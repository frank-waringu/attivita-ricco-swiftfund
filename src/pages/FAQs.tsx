import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  CreditCard,
  Shield,
  Phone
} from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "General Information",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is Attivita Ricco Ltd?",
          answer: "Attivita Ricco Ltd is a licensed microfinance institution in Kenya, specializing in providing fast business loans to entrepreneurs and small businesses. We are regulated by the Central Bank of Kenya and have been serving the Kenyan business community with reliable financial solutions."
        },
        {
          question: "How long does it take to get a loan approved?",
          answer: "Our signature feature is our 12-hour processing time. From the moment you submit a complete application with all required documents, we aim to approve and disburse your loan within 12 hours during business hours."
        },
        {
          question: "What types of businesses do you serve?",
          answer: "We serve a wide range of businesses including retail shops, restaurants, service providers, small manufacturers, agricultural businesses, and technology startups. As long as your business is legal and generating income, we can consider your application."
        }
      ]
    },
    {
      title: "Loan Terms & Rates",
      icon: CreditCard,
      faqs: [
        {
          question: "What are your interest rates?",
          answer: "Our interest rates start from 2.5% per month for business growth loans, 3% per month for working capital loans, and 3.5% per month for startup loans. The exact rate depends on your business profile, loan amount, and repayment term. We pride ourselves on transparent pricing with no hidden fees."
        },
        {
          question: "What is the minimum and maximum loan amount?",
          answer: "Our loan amounts range from Ksh 5,000 to Ksh 1,000,000 depending on the loan type. Working capital loans: Ksh 5,000 - Ksh 500,000. Business growth loans: Ksh 10,000 - Ksh 1,000,000. Startup loans: Ksh 15,000 - Ksh 300,000."
        },
        {
          question: "What are the repayment terms?",
          answer: "Repayment terms are flexible and range from 1 month to 24 months depending on the loan type and amount. We work with you to create a repayment schedule that aligns with your business cash flow. Early repayment is allowed without penalties."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in complete transparency. All fees are clearly outlined in your loan agreement. The only fees are the interest rate and a small processing fee that is disclosed upfront. There are no hidden charges or surprise fees."
        }
      ]
    },
    {
      title: "Application Process",
      icon: Clock,
      faqs: [
        {
          question: "What documents do I need to apply?",
          answer: "Required documents include: Valid Kenyan National ID, 1 year M-PESA or bank statement showing business transactions, 2 passport-size photos, and guarantor details with their ID. Optional documents that can strengthen your application include business license and a simple business plan."
        },
        {
          question: "Can I apply online?",
          answer: "Yes! Our online application process is designed to be simple and secure. You can complete the entire application on our website, upload your documents, and track your application status. Our digital-first approach makes the process convenient and fast."
        },
        {
          question: "What happens after I submit my application?",
          answer: "After submission, our team conducts a business assessment (2-4 hours), followed by loan review and approval (4-6 hours), and finally disbursement (1-2 hours). You'll receive updates via SMS and email throughout the process."
        },
        {
          question: "Can I apply for multiple loans?",
          answer: "Yes, existing clients with good repayment history can apply for additional loans. We also offer top-up loans for clients who need additional funding before completing their current loan, subject to assessment."
        }
      ]
    },
    {
      title: "Eligibility & Requirements",
      icon: Shield,
      faqs: [
        {
          question: "Who can apply for a loan?",
          answer: "To be eligible, you must be a Kenyan citizen aged 18 or above, have an active business operating for at least 6 months, show regular business income through bank or M-PESA statements, and have a reliable guarantor. No collateral is required."
        },
        {
          question: "Do I need a guarantor?",
          answer: "Yes, we require one reliable guarantor who must be a Kenyan citizen with a valid ID. Your guarantor should be someone who knows your business well and is willing to support your loan application. The guarantor doesn't need to have money but should be reachable and trustworthy."
        },
        {
          question: "What if I don't have a business license?",
          answer: "A business license is not mandatory for all loan applications. Many small businesses operate without formal licenses, and we understand this. However, having a business license can strengthen your application and may qualify you for better terms."
        },
        {
          question: "Can I apply with bad credit history?",
          answer: "We consider each application individually. While we check credit history, we also look at your current business performance, cash flow, and repayment capacity. If you have a good explanation for past credit issues and demonstrate current business viability, we may still approve your loan."
        }
      ]
    },
    {
      title: "Repayment & Support",
      icon: Phone,
      faqs: [
        {
          question: "How do I repay my loan?",
          answer: "Repayment is flexible and convenient. You can pay through M-PESA, bank transfer, or cash deposits at our offices. We'll provide you with payment instructions and send reminders before due dates. You can also set up automatic payments."
        },
        {
          question: "What happens if I'm late on a payment?",
          answer: "We understand that business cash flow can be unpredictable. If you anticipate difficulty making a payment, contact us immediately. We can discuss restructuring options. Late payments may incur additional fees, but we prefer to work with you rather than penalize you."
        },
        {
          question: "Can I pay off my loan early?",
          answer: "Absolutely! You can repay your loan early without any prepayment penalties. Early repayment can also improve your credit profile with us for future loan applications and may qualify you for better rates on subsequent loans."
        },
        {
          question: "What support do you provide during the loan term?",
          answer: "We provide ongoing support including regular check-ins on your business progress, financial advice, business mentorship resources, and assistance with loan management. Our customer service team is available to help with any questions or concerns."
        }
      ]
    }
  ];

  let faqIndex = 0;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Find answers to common questions about our business loans, 
              application process, and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndexInCategory) => {
                    const currentFaqIndex = faqIndex++;
                    return (
                      <Card key={faqIndexInCategory} className="card-professional overflow-hidden">
                        <button
                          onClick={() => toggleFaq(currentFaqIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                        >
                          <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                          {openIndex === currentFaqIndex ? (
                            <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                          )}
                        </button>
                        
                        {openIndex === currentFaqIndex && (
                          <div className="px-6 pb-6 pt-0">
                            <div className="border-t border-border pt-4">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="card-professional p-8 max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Can't find the answer you're looking for? Our friendly customer service team 
              is here to help you with any questions about our loan products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+254738810000">Call +254 738 810 000</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Apply CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Apply for Your Business Loan?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your application today and get funded within 12 hours.
          </p>
          <Button asChild size="lg" className="btn-secondary text-lg px-8 py-6">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;