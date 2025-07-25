import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Get Quote", href: "/quote" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Open Car Transport", href: "/services#open" },
    { name: "Enclosed Transport", href: "/services#enclosed" },
    { name: "Motorcycle Shipping", href: "/services#motorcycle" },
    { name: "Truck Transport", href: "/services#truck" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Insurance Info", href: "/insurance" },
    { name: "Shipping Guide", href: "/guide" },
  ];

  const provinces = [
    "British Columbia", "Alberta", "Saskatchewan", "Manitoba",
    "Ontario", "Quebec", "New Brunswick", "Nova Scotia",
    "Prince Edward Island", "Newfoundland"
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <div className="text-xl font-bold">Canada Auto Ship</div>
                <div className="text-xs text-gray-300">Trusted Transport Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Canada's most trusted auto transport company. Over 25 years of safe, 
              reliable vehicle shipping coast to coast.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-canadian-red" />
                <a href="tel:+1-800-SHIP-CAR" className="hover:text-canadian-red transition-smooth">
                  1-800-SHIP-CAR
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-canadian-red" />
                <a href="mailto:info@canadaautoship.ca" className="hover:text-canadian-red transition-smooth">
                  info@canadaautoship.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-canadian-red" />
                <span className="text-gray-300">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-canadian-red" />
                <span className="text-gray-300">Serving All Canadian Provinces</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-canadian-red transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-canadian-red transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-canadian-red transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-canadian-red transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-canadian-red transition-smooth"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Area */}
          <div>
            <h3 className="text-lg font-bold mb-6">Service Coverage</h3>
            <p className="text-gray-300 mb-4 text-sm">
              We ship vehicles to and from all Canadian provinces:
            </p>
            <div className="grid grid-cols-1 gap-1 text-sm">
              {provinces.map((province) => (
                <div key={province} className="text-gray-300">
                  • {province}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-canadian-red font-bold">✓</span>
              </div>
              <div className="text-sm font-semibold">Licensed & Insured</div>
              <div className="text-xs text-gray-400">Fully Compliant</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-canadian-red font-bold">A+</span>
              </div>
              <div className="text-sm font-semibold">BBB Accredited</div>
              <div className="text-xs text-gray-400">Top Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-canadian-red font-bold">24/7</span>
              </div>
              <div className="text-sm font-semibold">Customer Support</div>
              <div className="text-xs text-gray-400">Always Available</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-canadian-red font-bold">25+</span>
              </div>
              <div className="text-sm font-semibold">Years Experience</div>
              <div className="text-xs text-gray-400">Since 1998</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Canada Auto Ship. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-canadian-red transition-smooth"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}