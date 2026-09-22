import { Navbar } from "@/components/Navbar";
import { Hero3D } from "@/components/Hero3D";
import { Stats } from "@/components/Stats";
import { Statement } from "@/components/Statement";
import { Steps } from "@/components/Steps";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Videos } from "@/components/Videos";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { VisitUs } from "@/components/VisitUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-coal text-ivory">
      <Navbar />
      <Hero3D />
      <Stats />
      <Statement />
      <Steps />
      <Services />
      <Features />
      <About />
      <Reviews />
      <Videos />
      <AppointmentCTA />
      <VisitUs />
      <Footer />
    </main>
  );
}
