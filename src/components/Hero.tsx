import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/lovable-uploads/f86f02fc-9210-4447-bca7-6db8105270c2.png",
      alt: "Vehicle transport on flatbed trailer"
    },
    {
      image: "/lovable-uploads/4f7dfc91-f515-4c71-81e5-a064f736cfe2.png", 
      alt: "Multiple vehicles loaded on car carrier"
    },
    {
      image: "/lovable-uploads/e2ed17b5-eabb-4119-bb41-ce39723b10d2.png",
      alt: "Multi-vehicle car transport trailer"
    },
    {
      image: "/lovable-uploads/4ed215ec-ed2c-4b1b-8391-b7665d342daf.png",
      alt: "Professional vehicle transport service"
    },
    {
      image: "/lovable-uploads/487aaaa6-745e-4cdd-a9f5-6c6ebf936167.png",
      alt: "Vehicle ready for transport"
    },
    {
      image: "/lovable-uploads/295bc73a-91a5-4d89-9321-a9b89ec04c85.png",
      alt: "Car lot vehicle transport"
    },
    {
      image: "/lovable-uploads/850b4459-1f94-4c68-9836-3b80cd021cfc.png",
      alt: "Vehicle transport and shipping"
    },
    {
      image: "/lovable-uploads/4c451128-ff46-4534-a7ce-e950d43bdb36.png",
      alt: "Professional auto transport"
    },
    {
      image: "/lovable-uploads/a4cf7a52-9f67-49fc-8caa-0a6a85eb2b16.png",
      alt: "Vehicle carrier with multiple cars"
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
    <section className="bg-white">
      {/* Clean Image Slider - Google Business Profile Style */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Business Info Section */}
      <div className="bg-white py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            {/* Business Name */}
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Angel's Trucking Services
              </h1>
              <p className="text-lg text-gray-600">
                Professional Vehicle Transport & Shipping
              </p>
            </div>

            {/* Call Button - Google Business Profile Style */}
            <div className="flex justify-center">
              <a 
                href="tel:+17807078444"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="h-6 w-6" />
                Call (780) 707-8444
              </a>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-center">
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500">LOCATION</div>
                <div className="text-gray-900">Edmonton, Alberta</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500">EXPERIENCE</div>
                <div className="text-gray-900">25+ Years</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500">COVERAGE</div>
                <div className="text-gray-900">Nationwide</div>
              </div>
            </div>

            {/* Get Quote Button */}
            <div className="pt-4">
              <Link to="/quote">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}