import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };
  const contactMethods = [{
    icon: Phone,
    title: "Call Us",
    description: "Speak with our transport specialists",
    details: "1-800-SHIP-CAR",
    action: "tel:+1-800-SHIP-CAR",
    available: "24/7 Support"
  }, {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions anytime",
    details: "info@canadaautoship.ca",
    action: "mailto:info@canadaautoship.ca",
    available: "Response within 4 hours"
  }, {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support for quick questions",
    details: "Chat with an agent",
    action: "#",
    available: "Mon-Fri 8AM-8PM EST"
  }];
  const officeLocations = [{
    city: "Toronto",
    province: "Ontario",
    address: "123 Transport Way, Toronto, ON M5V 3A1",
    phone: "(416) 555-0123",
    hours: "Mon-Fri: 8AM-6PM EST"
  }, {
    city: "Vancouver",
    province: "British Columbia",
    address: "456 Shipping Street, Vancouver, BC V6B 1A1",
    phone: "(604) 555-0456",
    hours: "Mon-Fri: 8AM-6PM PST"
  }, {
    city: "Calgary",
    province: "Alberta",
    address: "789 Transport Avenue, Calgary, AB T2P 1J9",
    phone: "(403) 555-0789",
    hours: "Mon-Fri: 8AM-6PM MST"
  }];
  const departments = [{
    icon: Users,
    name: "Sales & Quotes",
    description: "Get pricing and book your shipment",
    email: "quotes@canadaautoship.ca",
    phone: "1-800-SHIP-CAR"
  }, {
    icon: Phone,
    name: "Customer Service",
    description: "Support for existing shipments",
    email: "support@canadaautoship.ca",
    phone: "1-800-SHIP-CAR"
  }, {
    icon: MessageCircle,
    name: "Claims & Insurance",
    description: "Report damage or file claims",
    email: "claims@canadaautoship.ca",
    phone: "1-800-SHIP-CAR"
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-zinc-950">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-zinc-950">
              Have questions about shipping your vehicle? Our expert team is here to help. 
              Contact us 24/7 for personalized assistance and instant quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us. We're committed to providing fast, helpful responses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce bg-blue-700">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <a href={method.action} className="text-canadian-red font-semibold hover:text-canadian-red-light transition-smooth block mb-2">
                      {method.details}
                    </a>
                    <div className="text-sm text-gray-500">{method.available}</div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy">Send Us a Message</CardTitle>
                  <p className="text-gray-600">We'll respond within 4 hours during business hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent">
                        <option value="">Select a subject</option>
                        <option value="quote">Request Quote</option>
                        <option value="booking">Existing Booking</option>
                        <option value="tracking">Track Shipment</option>
                        <option value="claim">Insurance Claim</option>
                        <option value="general">General Question</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent" placeholder="Please provide details about your inquiry..." />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 text-canadian-red mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-semibold">8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-semibold">9:00 AM - 5:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emergency Support:</span>
                        <span className="font-semibold text-canadian-red">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Departments */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Contact by Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, index) => {
                    const IconComponent = dept.icon;
                    return <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                          <div className="w-8 h-8 bg-canadian-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <IconComponent className="h-4 w-4 text-canadian-red" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-navy">{dept.name}</h4>
                            <p className="text-sm text-gray-600 mb-1">{dept.description}</p>
                            <div className="text-sm">
                              <a href={`mailto:${dept.email}`} className="text-canadian-red hover:text-canadian-red-light">
                                {dept.email}
                              </a>
                            </div>
                          </div>
                        </div>;
                  })}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-soft bg-canadian-red text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-zinc-950">Emergency Support</h3>
                  <p className="mb-4 text-canadian-red-light text-zinc-950">
                    For urgent matters related to active shipments, accidents, or breakdowns:
                  </p>
                  <a href="tel:+1-800-SHIP-CAR" className="flex items-center space-x-2 text-white hover:text-canadian-red-light transition-smooth">
                    <Phone className="h-5 w-5" />
                    <span className="font-bold text-lg">1-800-SHIP-CAR</span>
                  </a>
                  <p className="text-sm mt-2 text-canadian-red-light">Available 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our offices across Canada or contact us for service in your area
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 bg-zinc-500">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-1">{office.city}</h3>
                  <p className="text-canadian-red font-semibold mb-4">{office.province}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{office.address}</p>
                    <p className="font-semibold">{office.phone}</p>
                    <p>{office.hours}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see an office near you? We still serve your area through our network of carriers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}