import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import angelsLogo from "@/assets/angels-trucking-logo-new.png";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <a href="tel:+17807078444" className="hover:text-white/80 transition-smooth font-medium">
                  (780) 707-8444
                </a>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">OUR ROUTE: CALGARY - EDMONTON - SASKATOON - GRAND PRAIRIE</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <span className="text-white">✓</span> Licensed & Insured
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden space-y-2 text-center text-sm">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+17807078444" className="hover:text-white/80 transition-smooth font-medium">
                (780) 707-8444
              </a>
            </div>
            <div className="flex items-center justify-center gap-1">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-medium">
                  OUR ROUTE: CALGARY - EDMONTON - SASKATOON - GRAND PRAIRIE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-smooth",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-medium"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={angelsLogo}
                alt="Angel's Trucking - Delivering on Promise" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-gray-700 hover:text-primary-blue transition-smooth font-medium",
                    location.pathname === item.href && "text-primary-blue border-b-2 border-primary-blue"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/quote">
                <Button variant="outline" size="sm" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                  Get Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="default" size="sm" className="bg-primary-blue hover:bg-primary-blue-light">
                  Call Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-medium">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block text-gray-700 hover:text-navy transition-smooth font-medium py-2",
                    location.pathname === item.href && "text-navy"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link to="/quote" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="navy-outline" className="w-full">
                    Get Quote
                  </Button>
                </Link>
                <Link to="/quote" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}