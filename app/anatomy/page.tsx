import type { Metadata } from "next";
import { AnatomyNavbar } from "@/components/navigation/AnatomyNavbar";
import { AnatomyExperience } from "@/components/sections/AnatomyExperience";

export const metadata: Metadata = {
  title: "3D Anatomy — Bijayalakshmi Physiotherapy Clinic",
  description:
    "Explore the human frame in interactive 3D — an exploded-view journey through the skeleton, from skull to foot.",
};

export default function AnatomyPage() {
  return (
    <>
      <AnatomyNavbar />
      <main>
        <AnatomyExperience />
      </main>
    </>
  );
}
