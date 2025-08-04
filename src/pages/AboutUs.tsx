import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Shield, Clock, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import canadianLandscape from "@/assets/canadian-landscape.jpg";
export default function AboutUs() {
  const stats = [{
    icon: Award,
    number: "25+",
    label: "Years in Business",
    description: "Serving Canada since 1998"
  }, {
    icon: Users,
    number: "50,000+",
    label: "Vehicles Shipped",
    description: "Safely delivered nationwide"
  }, {
    icon: MapPin,
    number: "13",
    label: "Provinces & Territories",
    description: "Complete Canada coverage"
  }, {
    icon: Truck,
    number: "500+",
    label: "Carrier Partners",
    description: "Licensed & insured fleet"
  }];
  const timeline = [{
    year: "1998",
    title: "Company Founded",
    description: "Started as a small family business with a vision to provide reliable auto transport across Canada."
  }, {
    year: "2005",
    title: "Expanded Fleet",
    description: "Grew our network of carrier partners to serve all major Canadian cities and routes."
  }, {
    year: "2012",
    title: "Technology Integration",
    description: "Implemented advanced tracking systems and online quote platforms for better customer experience."
  }, {
    year: "2018",
    title: "Industry Leadership",
    description: "Became one of Canada's top auto transport companies with 20,000+ successful deliveries."
  }, {
    year: "2023",
    title: "Continued Innovation",
    description: "Celebrating 25 years of excellence with 50,000+ vehicles safely transported across Canada."
  }];
  const values = [{
    icon: Shield,
    title: "Safety First",
    description: "Every vehicle is handled with the utmost care using professional equipment and experienced drivers. We maintain the highest safety standards in the industry."
  }, {
    icon: CheckCircle,
    title: "Reliability",
    description: "On-time pickup and delivery with real-time tracking. We keep our promises and deliver when we say we will, every time."
  }, {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. Our 24/7 customer support team is always ready to assist with any questions or concerns."
  }, {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every aspect of our service, from initial quote to final delivery. Quality is never compromised."
  }];
  const team = [{
    name: "Michael Thompson",
    role: "CEO & Founder",
    description: "25+ years in transportation industry, committed to exceptional customer service."
  }, {
    name: "Sarah Chen",
    role: "Operations Director",
    description: "Oversees all shipping operations ensuring safe and timely vehicle deliveries."
  }, {
    name: "Robert Martinez",
    role: "Customer Relations Manager",
    description: "Dedicated to providing outstanding customer support and satisfaction."
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={canadianLandscape} alt="Canadian landscape" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-canadian-red" />
              <span className="text-canadian-red font-semibold text-slate-950">About Canada Auto Ship</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-950">
              Canada's Most Trusted
              <span className="block text-canadian-red">Auto Transport Company</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-950">
              For over 25 years, we've been Canada's premier vehicle shipping company, 
              safely transporting over 50,000 vehicles coast to coast with unmatched 
              reliability and customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-slate-950">
                  Canada Auto Ship was founded in 1998 with a simple mission: to provide 
                  safe, reliable, and affordable vehicle transport services across Canada. 
                  What started as a small family business has grown into one of the nation's 
                  most trusted auto transport companies.
                </p>
                <p className="text-slate-950">
                  Over the past 25 years, we've built our reputation on three core principles: 
                  safety, reliability, and exceptional customer service. Every vehicle we 
                  transport is treated with the same care and attention we'd give to our own.
                </p>
                <p className="text-slate-950">
                  Today, we're proud to serve customers from coast to coast, with a network 
                  of licensed and insured carriers who share our commitment to excellence. 
                  Whether you're moving across the country, buying a car from another province, 
                  or need specialty vehicle transport, we're here to help.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/quote">
                  <Button variant="hero" size="lg">
                    Get Your Quote Today
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={canadianLandscape} alt="Canadian transportation network" className="w-full h-96 object-cover rounded-2xl shadow-strong" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-strong p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-canadian-red">99.8%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Journey</h2>
            <p className="text-xl max-w-3xl mx-auto text-slate-950">
              25 years of growth, innovation, and unwavering commitment to our customers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-canadian-red/30"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium z-10">
                      {item.year.slice(-2)}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 bg-white rounded-xl shadow-soft p-6 flex-1">
                      <div className="text-sm text-canadian-red font-semibold mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold text-navy mb-2 text-slate-950">{item.title}</h3>
                      <p className="text-slate-950">{item.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl max-w-3xl mx-auto text-slate-950">
              These principles guide everything we do and ensure we deliver 
              the best auto transport experience in Canada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
            const IconComponent = value.icon;
            return <Card key={index} className="bg-white/5 border-white/10 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-canadian-red" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="leading-relaxed text-zinc-950">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to providing exceptional auto transport services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                  <div className="text-canadian-red font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Ship Your Vehicle?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-950">
              Join thousands of satisfied customers who trust Canada Auto Ship 
              for their vehicle transport needs. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="accent" size="xl" className="text-zinc-50 bg-blue-700 hover:bg-blue-600">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="red-outline" size="xl" className="border-white text-white hover:text-navy bg-blue-700 hover:bg-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}