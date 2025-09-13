import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Truck, Shield, Clock, DollarSign, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import openTransportImage from "@/assets/open-transport.jpg";
import enclosedTransportImage from "@/assets/enclosed-transport.jpg";

export default function ServicesPage() {
  const services = [{
    id: "open",
    icon: Car,
    title: "Open Car Transport",
    subtitle: "Most Popular Choice",
    description: "Cost-effective and reliable shipping for most vehicles using open car carriers. Your vehicle is secured on a multi-car trailer, protected by professional tie-downs.",
    image: openTransportImage,
    popular: true,
    features: ["Most affordable shipping option", "Faster pickup and delivery times", "Safe and secure transport", "Weather-resistant securing", "Perfect for daily drivers", "Real-time tracking included"],
    pricing: "Starting from $500",
    deliveryTime: "3-7 days"
  }, {
    id: "enclosed",
    icon: Shield,
    title: "Enclosed Transport",
    subtitle: "Premium Protection",
    description: "Maximum protection for luxury, classic, or high-value vehicles. Your car is transported in a fully enclosed trailer, protected from weather and road debris.",
    image: enclosedTransportImage,
    popular: false,
    features: ["Complete weather protection", "Protection from road debris", "Climate-controlled environment", "Ideal for luxury vehicles", "Classic and antique cars", "Higher insurance coverage"],
    pricing: "Starting from $800",
    deliveryTime: "5-10 days"
  }, {
    id: "truck",
    icon: Truck,
    title: "Truck & Large Vehicle Transport",
    subtitle: "Heavy Duty Solutions",
    description: "Specialized transport for pickup trucks, RVs, commercial vehicles, and other oversized vehicles requiring special handling and equipment.",
    image: openTransportImage,
    popular: false,
    features: ["Heavy-duty transport equipment", "Specialized securing methods", "Pickup trucks and SUVs", "Commercial vehicles", "RVs and motorhomes", "Oversized vehicle handling"],
    pricing: "Starting from $700",
    deliveryTime: "5-10 days"
  }, {
    id: "scrap-cars",
    icon: DollarSign,
    title: "We Buy Scrap Cars for Cash $$$$",
    subtitle: "Get Cash Today",
    description: "Turn your old, damaged, or unwanted vehicle into cash! We buy scrap cars in any condition along our Calgary-Edmonton-Saskatoon-Grand Prairie route.",
    image: openTransportImage,
    popular: false,
    features: ["Cash on the spot", "Any condition accepted", "Free towing service", "Instant quotes", "Eco-friendly disposal", "All paperwork handled"],
    pricing: "Up to $5000 Cash",
    deliveryTime: "Same day pickup"
  }];

  const additionalServices = [{
    icon: Clock,
    title: "Expedited Shipping",
    description: "Need your vehicle delivered faster? Our expedited service ensures priority pickup and delivery."
  }, {
    icon: Shield,
    title: "Extra Insurance",
    description: "Additional coverage options available for high-value vehicles beyond standard carrier insurance."
  }, {
    icon: CheckCircle,
    title: "Door-to-Door Service",
    description: "Convenient pickup and delivery right at your location (where accessible by transport truck)."
  }, {
    icon: Star,
    title: "White Glove Service",
    description: "Premium service with extra care, detailed vehicle inspection, and dedicated support."
  }];

  const coverageAreas = ["Calgary", "Edmonton", "Saskatoon", "Grand Prairie", "Red Deer", "Medicine Hat", "Lethbridge", "Fort McMurray"];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Vehicle Transport Services Calgary Edmonton Saskatoon Grand Prairie - Angel's Trucking"
        description="Professional vehicle transport services along the Calgary-Edmonton-Saskatoon-Grand Prairie corridor. Open transport, enclosed transport, truck shipping, and we buy scrap cars for cash."
        keywords="vehicle transport Calgary Edmonton, car shipping Saskatoon Grand Prairie, enclosed transport Alberta, truck transport Saskatchewan, scrap car buyers"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Auto Transport Services
              <span className="block text-canadian-red">Calgary-Edmonton-Saskatoon-Grand Prairie</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white">
              Comprehensive vehicle shipping solutions for every need and budget. 
              Professional service along our main route with over 10 years experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Transport Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect shipping solution for your vehicle type and protection needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-strong">
                        {service.popular && (
                          <div className="absolute top-4 right-4 bg-canadian-red text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                            {service.subtitle}
                          </div>
                        )}
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-80 object-cover" 
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={!isEven ? 'lg:col-start-1' : ''}>
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                          <IconComponent className="h-8 w-8 text-navy" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-navy">{service.title}</h3>
                          <p className="text-canadian-red font-semibold">{service.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-canadian-red mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing & Delivery */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="bg-gray-50 rounded-lg px-4 py-2">
                          <div className="text-sm text-gray-500">Starting Price</div>
                          <div className="font-bold text-navy">{service.pricing}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg px-4 py-2">
                          <div className="text-sm text-gray-500">Delivery Time</div>
                          <div className="font-bold text-navy">{service.deliveryTime}</div>
                        </div>
                      </div>

                      <Link to="/quote">
                        <Button variant={service.popular ? "hero" : "default"} size="lg">
                          {service.id === "scrap-cars" ? "Get Cash Quote" : `Get Quote for ${service.title}`}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extra services to enhance your auto transport experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-canadian-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-canadian-red" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Service Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve cities along our main Calgary-Edmonton-Saskatoon-Grand Prairie route
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {coverageAreas.map(area => (
              <div key={area} className="bg-gradient-subtle rounded-lg p-4 text-center">
                <div className="text-navy font-semibold">{area}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your location? Contact us to confirm service availability.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us for Coverage Info
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Questions?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get answers to common questions about our auto transport services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Which service is right for me?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Open transport is perfect for most vehicles and offers the best value. 
                  Choose enclosed transport for luxury, classic, or high-value vehicles 
                  that need maximum protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>How do I prepare my vehicle?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Remove personal items, ensure 1/4 tank of gas, clean for inspection, 
                  and document any existing damage. We'll provide a detailed preparation 
                  checklist when you book.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>What's included in the price?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  All quotes include pickup, transport, delivery, basic insurance coverage, 
                  and tracking. No hidden fees or surprise charges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>How far in advance should I book?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We recommend booking 1-2 weeks in advance for best availability, 
                  though we can often accommodate last-minute requests with expedited service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 text-center shadow-strong max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-4">Ready to Ship Your Vehicle?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free, instant quote for any of our services. No obligation, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="default" size="xl" className="bg-primary-blue hover:bg-primary-blue-light">
                  Get Free Quote Now
                </Button>
              </Link>
              <a href="tel:+17807078444">
                <Button variant="outline" size="xl" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                  Call: (780) 707-8444
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}