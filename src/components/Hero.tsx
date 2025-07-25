import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Clock, MapPin, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/lovable-uploads/cd053653-855d-459f-ab26-ec7a02f6f4da.png",
      title: "Professional Truck Transport",
      subtitle: "Specialized hauling for pickup trucks and large vehicles"
    },
    {
      image: "/lovable-uploads/a3f4466b-b7e3-4d1b-8811-28fb486fa5e7.png", 
      title: "Multi-Vehicle Car Carriers",
      subtitle: "Efficient transport for multiple vehicles in one shipment"
    },
    {
      image: "/lovable-uploads/798b0daf-4947-406f-ab73-1b1596ca848e.png",
      title: "Open Auto Transport",
      subtitle: "Cost-effective shipping for cars, SUVs, and trucks"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-blue via-primary-blue-light to-primary-blue-lighter overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-60" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/70 via-primary-blue/50 to-transparent"></div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-smooth"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-smooth"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center text-white space-y-8">
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Shield className="h-6 w-6" />
              <span className="font-semibold text-lg">Angel's Trusted Transport</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Professional
              <span className="block text-white">Vehicle Transport</span>
              <span className="block text-2xl lg:text-3xl font-normal mt-4 text-white/90">
                Delivering on Promise
              </span>
            </h1>
            
            {/* Dynamic subtitle based on current slide */}
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-xl font-semibold text-white">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="accent" size="hero" className="bg-white text-primary-blue hover:bg-white/90">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-white text-white hover:bg-white hover:text-primary-blue"
                >
                  Call (780) 707-8444
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="text-base font-semibold">Licensed &</div>
                <div className="text-base">Insured</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <div className="text-base font-semibold">Fast &</div>
                <div className="text-base">Reliable</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <div className="text-base font-semibold">Nationwide</div>
                <div className="text-base">Coverage</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="text-base font-semibold">25+ Years</div>
                <div className="text-base">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}