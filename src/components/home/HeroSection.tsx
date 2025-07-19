import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Shield, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-microfinance.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="h-4 w-4" />
                12-Hour Loan Processing
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Get Business Funding in
                <span className="text-secondary block mt-2">Just 12 Hours!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                Fast, reliable business loans for Kenyan entrepreneurs. 
                No hidden fees, minimal requirements, maximum growth.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">10,000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Same Day Approval</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-secondary text-lg px-8 py-6">
                <Link to="/apply">Apply for Loan Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">Ksh 5K</div>
                <div className="text-sm opacity-80">Minimum Loan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">Ksh 1M</div>
                <div className="text-sm opacity-80">Maximum Loan</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-secondary">12hrs</div>
                <div className="text-sm opacity-80">Processing Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - Key Features */}
          <div className="space-y-6">
            <div className="card-professional p-8 bg-background/95 backdrop-blur">
              <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Attivita Ricco?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Lightning Fast</h4>
                    <p className="text-sm text-muted-foreground">Get approved and funded within 12 hours of application</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Secure & Licensed</h4>
                    <p className="text-sm text-muted-foreground">Fully regulated microfinance institution in Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Growth</h4>
                    <p className="text-sm text-muted-foreground">Flexible terms designed to grow your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;