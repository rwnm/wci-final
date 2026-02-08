import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ProductLines from "@/components/ProductLines";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ProductLines />
      <Metrics />
      <ContactSection />
      <Footer />
    </main>
  );
}
