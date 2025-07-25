import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
