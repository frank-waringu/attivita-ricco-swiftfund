import HeroSection from "@/components/home/HeroSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  Star,
  CheckCircle,
  FileText,
  CreditCard,
  UserCheck,
  ArrowRight
} from "lucide-react";

const Home = () => {
  const benefits = [
    {
      icon: Clock,
      title: "12-Hour Processing",
      description: "From application to disbursement in just 12 hours"
    },
    {
      icon: Shield,
      title: "Secure & Licensed",
      description: "Fully regulated by Central Bank of Kenya"
    },
    {
      icon: TrendingUp,
      title: "Flexible Terms",
      description: "Repayment plans designed for your business growth"
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of Kenyan business landscape"
    }
  ];

  const requirements = [
    {
      icon: FileText,
      title: "National ID",
      description: "Valid Kenyan National ID"
    },
    {
      icon: CreditCard,
      title: "Financial Records",
      description: "1 year M-PESA or Bank Statement"
    },
    {
      icon: FileText,
      title: "Passport Photos",
      description: "Recent passport-size photographs"
    },
    {
      icon: UserCheck,
      title: "Guarantor",
      description: "One reliable guarantor"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mwangi",
      business: "Mwangi Fashion Store",
      text: "Attivita Ricco helped me expand my tailoring business. The 12-hour processing is incredible!",
      rating: 5
    },
    {
      name: "Peter Kamau",
      business: "Kamau Electronics",
      text: "Professional service and fair interest rates. My electronics shop now serves three locations.",
      rating: 5
    },
    {
      name: "Grace Wanjiku",
      business: "Wanjiku Groceries",
      text: "Quick approval and excellent customer service. Highly recommend for small business owners.",
      rating: 5
    }
  ];

  const loanProcess = [
    {
      step: "1",
      title: "Business Assessment",
      description: "We evaluate your business needs and loan requirements"
    },
    {
      step: "2", 
      title: "Loan Review",
      description: "Our team reviews your application and documentation"
    },
    {
      step: "3",
      title: "Disbursement",
      description: "Funds are transferred to your account within 12 hours"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection />

      {/* Company Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Empowering Kenyan Entrepreneurs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Attivita Ricco Ltd is Kenya's trusted microfinance partner, committed to supporting 
              small and medium enterprises with fast, reliable business loans. Our 12-hour processing 
              time and local expertise have helped over 10,000 businesses grow and thrive.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Our Business Loans?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of running a business in Kenya. 
              That's why we've designed our services to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-professional p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Simple Loan Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've streamlined our requirements to make the application process as simple as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {requirements.map((req, index) => (
              <Card key={index} className="card-professional p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <req.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{req.title}</h3>
                <p className="text-muted-foreground text-sm">{req.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services">View Full Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our 3-Step Loan Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From application to disbursement in just 12 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanProcess.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < loanProcess.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful Kenyan entrepreneurs who have grown their businesses with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-professional p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Apply now and get your business loan approved within 12 hours. 
            Join thousands of successful entrepreneurs across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-secondary text-lg px-8 py-6">
              <Link to="/apply">Apply for Loan Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;