import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Floor Plans", href: "/floor-plans" },
    { label: "Gallery", href: "/gallery" },
    { label: "The Perks", href: "/the-perks" },
    { label: "Neighborhood", href: "/neighborhood" },
    { label: "Contact", href: "/contact" },
    { label: "Apply Now", href: "/apply" }
  ];

  const services = [
    { label: "Service Request", href: "/service-request" },
    { label: "Pay Rent", href: "/pay-rent" },
    { label: "Resident Portal", href: "#" },
    { label: "Virtual Tour", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">G</span>
              </div>
              <span className="font-serif font-bold text-3xl tracking-[0.2em]">
                GALA
              </span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Experience the pinnacle of luxury senior living in our sophisticated 
              55+ community. Where elegance meets comfort, and every day feels like 
              a celebration.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>1234 Luxury Lane, Prestigious District, City 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>Leasing Office: Mon-Sat 9AM-6PM, Sun 12PM-5PM</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 text-accent">Resident Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 GALA Senior Living. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-primary-foreground/60 text-sm">Follow Us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;