import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import angelsLogo from "@/assets/angels-trucking-logo.png";

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
    { name: "Truck Transport", href: "/services#truck" },
    { name: "Quote Request", href: "/quote" },
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
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={angelsLogo}
                alt="Angel's Trucking" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold text-white">Angel's Trucking</div>
                <div className="text-sm text-gray-200 font-medium">Professional Transport Services</div>
              </div>
            </div>
            
            <p className="text-gray-200 mb-6 leading-relaxed font-medium">
              Specialized vehicle transport along the Calgary-Edmonton-Saskatoon-Grand Prairie corridor. 
              Safe, reliable service with over 25 years of experience.
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
            <h3 className="text-lg font-bold mb-6 text-white">Our Main Route</h3>
            <p className="text-gray-200 mb-4 text-sm font-medium">
              Primary transport corridor through Western Canada:
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-200 font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Calgary, Alberta
              </div>
              <div className="flex items-center text-gray-200 font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Edmonton, Alberta
              </div>
              <div className="flex items-center text-gray-200 font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Saskatoon, Saskatchewan
              </div>
              <div className="flex items-center text-gray-200 font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Grand Prairie, Alberta
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-3">
              Additional coverage available throughout Western Canada
            </p>
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
            <div className="text-sm text-gray-200 mb-4 md:mb-0 font-medium">
              © {currentYear} Angel's Trucking Services. All rights reserved.
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