import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Truck, Bike, Shield, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import openTransportImage from "@/assets/open-transport.jpg";
import enclosedTransportImage from "@/assets/enclosed-transport.jpg";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Open Car Transport",
      description: "Cost-effective shipping for standard vehicles using open car carriers.",
      features: ["Most affordable option", "Faster pickup times", "Safe & reliable", "Weather protection"],
      image: openTransportImage,
      popular: true
    },
    {
      icon: Shield,
      title: "Enclosed Transport",
      description: "Premium protection for luxury, classic, or high-value vehicles.",
      features: ["Maximum protection", "Climate controlled", "Luxury vehicles", "Classic cars"],
      image: enclosedTransportImage,
      popular: false
    },
    {
      icon: Truck,
      title: "Truck & Large Vehicle",
      description: "Specialized transport for trucks, RVs, and oversized vehicles.",
      features: ["Heavy duty transport", "Specialized equipment", "Pickup trucks", "Commercial vehicles"],
      image: openTransportImage,
      popular: false
    },
    {
      icon: Bike,
      title: "Motorcycle Shipping",
      description: "Expert motorcycle transport with specialized securing methods.",
      features: ["Secure crating", "Professional handling", "All bike types", "Door-to-door service"],
      image: enclosedTransportImage,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Best rates in Canada with transparent, no-hidden-fee pricing."
    },
    {
      icon: Clock,
      title: "Fast Pickup",
      description: "Quick scheduling with pickups available within 1-3 business days."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Your vehicle is protected with comprehensive insurance coverage."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Our Car Shipping Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From coast to coast, we offer comprehensive auto transport solutions 
            for every vehicle type and budget across Canada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth group">
                <div className="relative">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-canadian-red text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Most Popular
                    </div>
                  )}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-navy" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-canadian-red rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/quote">
                    <Button 
                      variant={service.popular ? "hero" : "navy-outline"} 
                      className="w-full"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy mb-4">
              Why Choose Canada Auto Ship?
            </h3>
            <p className="text-gray-600 text-lg">
              We're committed to providing the best car shipping experience in Canada
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <IconComponent className="h-8 w-8 text-canadian-red" />
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}