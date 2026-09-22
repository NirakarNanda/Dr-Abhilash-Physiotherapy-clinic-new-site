"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { useReducedMotion } from "@/components/anatomy/useReducedMotion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { CLINIC } from "@/content/site";

const MODEL_PATH = "/models/skeleton.glb";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");

function withDraco(loader: GLTFLoader) {
  loader.setDRACOLoader(dracoLoader);
}

const BONE_DARK = "#EFE9DC";
const BONE_LIGHT = "#6E6154"; // warm bronze-gray — reads on the beige treatment

function SkeletonRig({
  progressRef,
  reduced,
  onReady,
  theme,
}: {
  progressRef: { current: number };
  reduced: boolean;
  onReady: () => void;
  theme: "dark" | "light";
}) {
  const { scene } = useLoader(GLTFLoader, MODEL_PATH, withDraco);
  const { camera, size } = useThree();

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(BONE_DARK),
        roughness: 0.55,
        metalness: 0.02,
      }),
    []
  );

  const group = useMemo(() => {
    const g = scene.clone(true);
    g.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        node.material = material;
        node.castShadow = false;
        node.receiveShadow = false;
      }
    });
    return g;
  }, [scene, material]);

  /* World-space framing: aim at the model's true center (the GLB's local
     origin is not guaranteed to be centered) and fit ~80% of frame height. */
  const frame = useMemo(() => {
    const box = new THREE.Box3().setFromObject(group);
    const center = box.getCenter(new THREE.Vector3());
    const dims = box.getSize(new THREE.Vector3());
    return { center, height: Math.max(dims.y, 0.001), width: Math.max(dims.x, 0.001) };
  }, [group]);

  useEffect(() => {
    material.color.set(theme === "light" ? BONE_LIGHT : BONE_DARK);
  }, [theme, material]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    const aspect = size.width / Math.max(1, size.height);
    const narrow = aspect < 0.9;
    const halfFov = THREE.MathUtils.degToRad(32) / 2;
    const fitDist =
      Math.max(
        frame.height / (2 * Math.tan(halfFov)),
        frame.width / (2 * Math.tan(halfFov) * aspect)
      ) / 0.8;
    const base = fitDist * (narrow ? 1.3 : 1);
    const dist = reduced ? base : THREE.MathUtils.lerp(base, base * 0.74, p);
    // Desktop: park the skeleton right-of-frame so the headline owns the left.
    const lookX = narrow ? 0 : -dist * Math.tan(halfFov) * aspect * 0.24;
    const cy = frame.center.y;
    camera.position.set(
      lookX + (reduced ? 0 : Math.sin(p * 0.7) * 0.35),
      cy + (reduced ? 0.1 : THREE.MathUtils.lerp(0.12, 0, p)),
      dist
    );
    camera.lookAt(lookX, cy, 0);
    group.rotation.y =
      (reduced ? 0.5 : t * 0.12) + (reduced ? 0 : p * Math.PI * 0.9);
  });

  return <primitive object={group} />;
}

export function Hero3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  const { theme } = useTheme();
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    const caption = captionRef.current;
    if (!section) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      progressRef.current = reduced ? 0 : p;
      if (overlay && !reduced) {
        const fade = Math.min(1, p * 2.4);
        overlay.style.opacity = String(1 - fade);
        overlay.style.transform = `translateY(${(p * -70).toFixed(1)}px)`;
        overlay.style.visibility = fade >= 1 ? "hidden" : "visible";
      }
      if (caption && !reduced) {
        const show = Math.min(1, Math.max(0, (p - 0.55) / 0.4));
        caption.style.opacity = String(show);
        caption.style.transform = `translateY(${((1 - show) * 30).toFixed(1)}px)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section ref={sectionRef} id="top" className="relative" style={{ height: "170vh" }}>
      <div className="grain sticky top-0 overflow-hidden viewport-full bg-coal">
        {/* ambient backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--site-glow)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--site-vignette)" }}
          aria-hidden="true"
        />

        <div className="absolute inset-0" aria-hidden={!ready}>
          <Canvas
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: true }}
            camera={{ fov: 32, position: [0, 1.2, 4.7], near: 0.1, far: 60 }}
          >
            <ambientLight intensity={0.55} />
            <directionalLight position={[3, 5, 4]} intensity={1.35} color="#fff5e8" />
            <directionalLight position={[-4, 2.5, -3]} intensity={0.7} color="#a8b7a1" />
            <directionalLight position={[0, -1, 5]} intensity={0.25} color="#cdd6c8" />
            <Suspense fallback={null}>
              <SkeletonRig progressRef={progressRef} reduced={reduced} onReady={onReady} theme={theme} />
            </Suspense>
          </Canvas>
        </div>

        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <p className="flex items-center gap-3 text-[11px] font-display uppercase tracking-label text-ivory-faint">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
              Preparing the skeleton
            </p>
          </div>
        )}

        {/* headline overlay */}
        <div ref={overlayRef} className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <div className="mx-auto w-full max-w-content">
            <p className="flex items-center gap-3 text-[11px] font-display font-semibold uppercase tracking-label text-accent">
              <span className="inline-block h-px w-10 bg-accent/70" aria-hidden="true" />
              {CLINIC.legalName} · Sonepur, Odisha
            </p>
            <h1 className="mt-6 font-editorial leading-[0.95] text-ivory">
              <span className="block text-[19vw] md:text-[9.5rem]">Healing</span>
              <span className="block text-[19vw] italic text-accent md:text-[9.5rem]">Here</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-muted md:text-lg">
              {CLINIC.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#appointment"
                className="rounded-full bg-ivory px-7 py-3.5 text-xs font-display font-bold uppercase tracking-label text-coal transition-colors hover:bg-accent"
              >
                Book an appointment
              </a>
              <a
                href="/anatomy"
                className="rounded-full border border-line/20 px-7 py-3.5 text-xs font-display font-bold uppercase tracking-label text-ivory transition-colors hover:border-accent hover:text-accent"
              >
                Explore 3D anatomy
              </a>
            </div>
          </div>
        </div>

        {/* scroll-driven closing caption */}
        <div
          ref={captionRef}
          className="pointer-events-none absolute inset-x-0 bottom-24 px-6 text-center md:bottom-28"
          style={{ opacity: reduced ? 1 : 0 }}
          aria-hidden="true"
        >
          <p className="font-editorial text-2xl italic text-ivory md:text-4xl">
            206 bones. One story of movement.
          </p>
        </div>

        {/* scroll hint */}
        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3" aria-hidden="true">
          <p className="text-[10px] font-display uppercase tracking-label text-ivory-faint">
            Scroll to explore
          </p>
          <span className="block h-10 w-px overflow-hidden bg-line/10">
            <span className="animate-scroll-hint block h-1/4 w-px bg-accent" />
          </span>
        </div>

        <p className="absolute bottom-6 left-6 max-w-[240px] text-[10px] leading-relaxed text-ivory-faint/70 md:left-10">
          3D skeleton: CT Derived Human Skeleton by Terrie Simmons-Ehrhardt, CC-BY 4.0
        </p>
      </div>
    </section>
  );
}
