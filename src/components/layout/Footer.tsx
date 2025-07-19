import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">A</span>
              </div>
              <div>
                <div className="font-bold text-lg">Attivita Ricco</div>
                <div className="text-xs opacity-80">Microfinance Ltd</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Kenya's trusted microfinance institution offering fast business loans 
              with 12-hour processing. Empowering entrepreneurs and small businesses to grow.
            </p>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">12-Hour Loan Processing</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/services" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Loan Services
              </Link>
              <Link to="/apply" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Apply Now
              </Link>
              <Link to="/faqs" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                FAQs
              </Link>
              <Link to="/contact" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">+254 738 810 000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">info@attivitar.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Why Choose Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-secondary" />
                <span className="text-sm">Secure & Licensed</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-4 w-4 text-secondary" />
                <span className="text-sm">Trusted by 10,000+ Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm">Fast 12-Hour Processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm opacity-90">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
            </div>
            <div className="text-sm opacity-90">
              © {new Date().getFullYear()} All Rights Reserved to Unique Brain Limited
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;