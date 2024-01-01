// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] container mx-auto">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
