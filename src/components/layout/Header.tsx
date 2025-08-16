import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import attivitaLogo from "@/assets/attivita-ricco-logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    href: "/",
    label: "Home"
  }, {
    href: "/about",
    label: "About Us"
  }, {
    href: "/services",
    label: "Loan Services"
  }, {
    href: "/apply",
    label: "Apply Now"
  }, {
    href: "/faqs",
    label: "FAQs"
  }, {
    href: "/contact",
    label: "Contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top contact bar */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                <span>+254 738 810 000</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-primary">
                <Mail className="h-4 w-4" />
                <span>info@attivitar.com</span>
              </div>
            </div>
            <div className="hidden md:block text-muted-foreground">
              Get funded in 12 hours!
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={attivitaLogo} 
                  alt="Attivita Ricco Logo" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-xl text-primary">Attivita Ricco Ltd</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.href} to={item.href} className={`transition-colors hover:text-primary ${isActive(item.href) ? "text-primary font-medium" : "text-foreground"}`}>
                {item.label}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="btn-primary">
              <Link to="/apply">Apply for Loan</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map(item => <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={`text-lg transition-colors hover:text-primary ${isActive(item.href) ? "text-primary font-medium" : "text-foreground"}`}>
                    {item.label}
                  </Link>)}
                <Button asChild className="btn-primary mt-4">
                  <Link to="/apply" onClick={() => setIsOpen(false)}>
                    Apply for Loan
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;