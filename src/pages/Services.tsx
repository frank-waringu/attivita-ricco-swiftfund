import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  CreditCard,
  Clock,
  Shield,
  TrendingUp,
  FileText,
  UserCheck,
  CheckCircle,
  AlertCircle,
  Calculator,
  Calendar
} from "lucide-react";

const Services = () => {
  const loanTypes = [
    {
      title: "Business Growth Loans",
      description: "Expand your existing business operations, purchase inventory, or invest in new equipment.",
      minAmount: "Ksh 10,000",
      maxAmount: "Ksh 1,000,000",
      term: "3-24 months",
      rate: "From 2.5% per month",
      features: [
        "Quick 12-hour processing",
        "Flexible repayment terms",
        "No collateral required",
        "Minimal documentation"
      ]
    },
    {
      title: "Working Capital Loans",
      description: "Manage cash flow, pay suppliers, or cover operational expenses during slow periods.",
      minAmount: "Ksh 5,000",
      maxAmount: "Ksh 500,000",
      term: "1-12 months",
      rate: "From 3% per month",
      features: [
        "Same-day approval",
        "Revolving credit facility",
        "No early repayment penalty",
        "Online account management"
      ]
    },
    {
      title: "Start-up Business Loans",
      description: "Launch your new business venture with the capital you need to get started.",
      minAmount: "Ksh 15,000",
      maxAmount: "Ksh 300,000",
      term: "6-18 months",
      rate: "From 3.5% per month",
      features: [
        "Business plan evaluation",
        "Mentorship support",
        "Gradual disbursement",
        "Business training resources"
      ]
    }
  ];

  const requirements = [
    {
      icon: FileText,
      title: "National ID",
      description: "Valid Kenyan National ID or Passport",
      required: true
    },
    {
      icon: CreditCard,
      title: "Financial Records", 
      description: "1 year M-PESA or Bank Statement showing business transactions",
      required: true
    },
    {
      icon: FileText,
      title: "Passport Photos",
      description: "2 recent passport-size photographs",
      required: true
    },
    {
      icon: UserCheck,
      title: "Guarantor",
      description: "One reliable guarantor with valid ID and contact information",
      required: true
    },
    {
      icon: FileText,
      title: "Business License",
      description: "Valid business registration or trading license (if applicable)",
      required: false
    },
    {
      icon: FileText,
      title: "Business Plan",
      description: "Simple business plan or description of your business activities",
      required: false
    }
  ];

  const loanProcess = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with required documents",
      duration: "5 minutes",
      icon: FileText
    },
    {
      step: "2",
      title: "Business Assessment", 
      description: "Our team evaluates your business and loan requirements",
      duration: "2-4 hours",
      icon: Calculator
    },
    {
      step: "3",
      title: "Loan Review & Approval",
      description: "Final review of application and approval decision",
      duration: "4-6 hours",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Disbursement",
      description: "Funds transferred directly to your M-PESA or bank account",
      duration: "1-2 hours",
      icon: CreditCard
    }
  ];

  const eligibilityCriteria = [
    "Kenyan citizen aged 18+ years",
    "Active business for at least 6 months",
    "Regular business income/transactions",
    "Valid business registration (where applicable)",
    "Good credit history",
    "Reliable guarantor"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Our Loan Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Flexible business financing solutions designed for Kenyan entrepreneurs. 
              Fast approval, competitive rates, and personalized service.
            </p>
            <Button asChild size="lg" className="btn-secondary text-lg px-8 py-6">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Business Loan Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the loan product that best fits your business needs and growth plans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="card-professional p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{loan.title}</h3>
                    <p className="text-muted-foreground">{loan.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Min Amount</div>
                      <div className="font-semibold">{loan.minAmount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Max Amount</div>
                      <div className="font-semibold">{loan.maxAmount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Term</div>
                      <div className="font-semibold">{loan.term}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Interest Rate</div>
                      <div className="font-semibold text-secondary">{loan.rate}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full btn-primary">
                    <Link to="/apply">Apply for This Loan</Link>
                  </Button>
                </div>
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
              Loan Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, straightforward requirements to get your business loan approved quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {requirements.map((req, index) => (
              <Card key={index} className="card-professional p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <req.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{req.title}</h3>
                      {req.required ? (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Required</span>
                      ) : (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Optional</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Eligibility Criteria */}
          <Card className="card-professional p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">Eligibility Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">{criteria}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our 4-Step Loan Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From application to disbursement in just 12 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanProcess.map((step, index) => (
              <Card key={index} className="card-professional p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                <div className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                  <Clock className="h-3 w-3 inline mr-1" />
                  {step.duration}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Apply for Your Business Loan?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful Kenyan entrepreneurs who have grown their businesses with Attivita Ricco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-secondary text-lg px-8 py-6">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Have Questions?</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;