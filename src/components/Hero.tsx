import { Button } from "@/components/ui/button";
import { Shield, Clock, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car-transport.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-light to-navy-lighter overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional car transport across Canada"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-canadian-red">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Canada's Trusted Auto Transport</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ship Your Car
                <span className="block text-canadian-red">Anywhere in Canada</span>
                <span className="block text-3xl lg:text-4xl font-normal mt-2">
                  Safely & Hassle-Free
                </span>
              </h1>
              
              <p className="text-xl text-gray-100 max-w-2xl">
                Get your free instant quote today and experience Canada's most trusted 
                car shipping service. Over 25+ years of safe, reliable transport coast to coast.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button variant="accent" size="hero" className="w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="red-outline" 
                  size="xl" 
                  className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-navy"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-canadian-red" />
                </div>
                <div className="text-sm font-semibold">Licensed &</div>
                <div className="text-sm">Insured</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-canadian-red" />
                </div>
                <div className="text-sm font-semibold">Fast &</div>
                <div className="text-sm">Reliable</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-8 w-8 text-canadian-red" />
                </div>
                <div className="text-sm font-semibold">Coast to</div>
                <div className="text-sm">Coast</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-canadian-red" />
                </div>
                <div className="text-sm font-semibold">25+ Years</div>
                <div className="text-sm">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:flex lg:justify-end">
            <div className="bg-white rounded-2xl shadow-strong p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-navy mb-2">Get Instant Quote</h2>
                <p className="text-gray-600">Free, no obligation estimate</p>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      From City
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Toronto"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      To City
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Vancouver"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vehicle Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent">
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  Get My Free Quote
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}