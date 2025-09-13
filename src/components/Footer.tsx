import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import angelsLogo from "@/assets/angels-trucking-logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Our Services",
    href: "/services"
  }, {
    name: "Get Quote",
    href: "/quote"
  }, {
    name: "Contact Us",
    href: "/contact"
  }];
  const services = [{
    name: "Open Car Transport",
    href: "/services#open"
  }, {
    name: "Enclosed Transport",
    href: "/services#enclosed"
  }, {
    name: "Truck Transport",
    href: "/services#truck"
  }, {
    name: "Quote Request",
    href: "/quote"
  }];
  const legal = [{
    name: "Privacy Policy",
    href: "/privacy"
  }, {
    name: "Terms & Conditions",
    href: "/terms"
  }, {
    name: "Insurance Info",
    href: "/insurance"
  }, {
    name: "Shipping Guide",
    href: "/guide"
  }];
  const provinces = ["British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "New Brunswick", "Nova Scotia", "Prince Edward Island", "Newfoundland"];
  return <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={angelsLogo} alt="Angel's Trucking" className="h-12 w-auto" />
              <div>
                <div className="text-xl font-bold text-white">Angel's Trucking</div>
                <div className="text-sm text-gray-200 font-medium bg-transparent">Professional Transport Services</div>
              </div>
            </div>
            
            <p className="mb-6 leading-relaxed font-medium text-gray-200">
              Specialized vehicle transport along the Calgary-Edmonton-Saskatoon-Grand Prairie corridor. 
              Safe, reliable service with over 10 years of experience.
            </p>

            {/* Contact Info */}
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-canadian-red" />
                <a href="tel:+17807078444" className="hover:text-canadian-red transition-smooth text-gray-200">
                  (780) 707-8444
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-canadian-red" />
                <a href="mailto:info@angelstrucking.ca" className="hover:text-canadian-red transition-smooth text-gray-200">
                  info@angelstrucking.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-canadian-red" />
                <span className="text-gray-200">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-canadian-red" />
                <span className="text-gray-200">Suite 110- 15397 117 Ave T5M3X4 Edmonton AB</span>
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
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-200 hover:text-canadian-red transition-smooth">About Us</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-canadian-red transition-smooth">Our Services</Link></li>
              <li><Link to="/quote" className="text-gray-200 hover:text-canadian-red transition-smooth">Get Quote</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-canadian-red transition-smooth">Contact Us</Link></li>
            </ul>

          {/* Services */}
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#open" className="text-gray-200 hover:text-canadian-red transition-smooth">Open Car Transport</Link></li>
              <li><Link to="/services#enclosed" className="text-gray-200 hover:text-canadian-red transition-smooth">Enclosed Transport</Link></li>
              <li><Link to="/services#truck" className="text-gray-200 hover:text-canadian-red transition-smooth">Truck Transport</Link></li>
              <li><Link to="/quote" className="text-gray-200 hover:text-canadian-red transition-smooth">Quote Request</Link></li>
              <li><span className="text-yellow-300 font-bold hover:text-yellow-200 cursor-pointer">💰 We Buy Scrap Cars for Cash $$$$</span></li>
            </ul>

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
              <div className="text-sm font-semibold text-white">Licensed & Insured</div>
              <div className="text-xs text-gray-300">Fully Compliant</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-canadian-red font-bold">A+</span>
              </div>
              <div className="text-sm font-semibold text-white">BBB Accredited</div>
              <div className="text-xs text-gray-300">Top Rating</div>
            </div>
            <div className="flex flex-col items-center bg-transparent">
              <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-canadian-red font-bold">24/7</span>
              </div>
              <div className="text-sm font-semibold text-white">Customer Support</div>
              <div className="text-xs text-gray-300">Always Available</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-canadian-red/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-canadian-red font-bold">10+</span>
              </div>
              <div className="text-sm font-semibold text-white">Years Experience</div>
              <div className="text-xs text-gray-300">Since 2014</div>
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
              <Link to="/privacy" className="text-gray-300 hover:text-canadian-red transition-smooth">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-canadian-red transition-smooth">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}