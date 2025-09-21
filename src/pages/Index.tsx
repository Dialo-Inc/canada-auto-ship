import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Angel's Trucking Services - Professional Vehicle Transport Calgary Edmonton Saskatoon Grand Prairie"
        description="Professional vehicle transport services along the Calgary-Edmonton-Saskatoon-Grand Prairie corridor. Safe, reliable, and insured auto shipping with over 10 years of experience."
        keywords="vehicle transport Calgary, car shipping Edmonton, auto transport Saskatoon, vehicle carrier Grand Prairie, Calgary Edmonton transport, car shipping Alberta Saskatchewan"
      />
      <Navigation />
      <Hero />
      <Gallery />
      
      {/* Scrap Cars Banner */}
      <section className="py-8 bg-yellow-400 border-t-2 border-yellow-500">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="text-3xl">💰</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                We Buy Scrap Cars for Cash $$$$
              </h2>
              <span className="text-3xl">💰</span>
            </div>
            <p className="text-lg text-gray-800 mb-4">
              Get instant cash for your old, damaged, or non-running vehicles!
            </p>
            <Link to="/contact">
              <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                Get Cash Quote Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
