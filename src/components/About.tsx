import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import canadianLandscape from "@/assets/canadian-landscape.jpg";
export default function About() {
  const stats = [{
    icon: Award,
    number: "25+",
    label: "Years Experience",
    description: "Trusted auto transport since 1998"
  }, {
    icon: Users,
    number: "50K+",
    label: "Happy Customers",
    description: "Vehicles safely delivered"
  }, {
    icon: MapPin,
    number: "100%",
    label: "Canada Coverage",
    description: "Coast to coast service"
  }, {
    icon: Clock,
    number: "24/7",
    label: "Customer Support",
    description: "Always here to help"
  }];
  const values = [{
    title: "Safety First",
    description: "Every vehicle is handled with care using professional equipment and experienced drivers."
  }, {
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. What we quote is what you pay."
  }, {
    title: "Reliable Service",
    description: "On-time pickup and delivery with real-time tracking and updates."
  }, {
    title: "Expert Team",
    description: "Licensed, insured, and trained professionals handling your precious vehicle."
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-canadian-red/10 rounded-full px-4 py-2 mb-4">
                <Award className="h-4 w-4 text-canadian-red" />
                <span className="text-canadian-red font-semibold">About Canada Auto Ship</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                Canada's Most Trusted
                <span className="block text-canadian-red">Auto Transport Company</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 25 years, Canada Auto Ship has been the trusted choice for vehicle 
                transport across Canada. We've safely delivered over 50,000 vehicles, 
                building our reputation on reliability, safety, and exceptional customer service.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Whether you're relocating, buying a car from another province, or need to 
                transport your vehicle for any reason, we provide safe, affordable, and 
                reliable auto transport solutions across all Canadian provinces and territories.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our team of licensed and insured carriers uses state-of-the-art equipment 
                and follows strict safety protocols to ensure your vehicle arrives in the 
                same condition it was picked up.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button variant="hero" size="lg" className="bg-blue-700 hover:bg-blue-600">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="navy-outline" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img src={canadianLandscape} alt="Beautiful Canadian landscape representing our nationwide coverage" className="w-full h-96 object-cover" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-strong p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce bg-blue-400">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>;
        })}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver 
              the best auto transport experience in Canada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth">
                <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}