import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Angel's Trucking Services - Professional Vehicle Transport Calgary Edmonton Saskatoon Grand Prairie"
        description="Professional vehicle transport services along the Calgary-Edmonton-Saskatoon-Grand Prairie corridor. Safe, reliable, and insured auto shipping with over 25 years of experience."
        keywords="vehicle transport Calgary, car shipping Edmonton, auto transport Saskatoon, vehicle carrier Grand Prairie, Calgary Edmonton transport, car shipping Alberta Saskatchewan"
      />
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
