import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Showreel from "@/components/Showreel";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Page() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        {/* <Showreel /> */}
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
