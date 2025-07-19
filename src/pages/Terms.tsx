import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, AlertTriangle, Scale, CreditCard } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Important legal information governing your use of our services 
              and loan products. Please read carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">Agreement Overview</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern your use of services provided by Attivita Ricco Ltd 
                ("Company," "we," "our," or "us"), a licensed microfinance institution in Kenya. By using our 
                services, applying for a loan, or accessing our website, you agree to be bound by these Terms.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()} | 
                <strong> Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
            </Card>

            {/* Definitions */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Definitions</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">Borrower:</span>
                  <span className="text-muted-foreground text-sm ml-2">
                    Any individual or business entity that applies for or receives a loan from the Company.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Guarantor:</span>
                  <span className="text-muted-foreground text-sm ml-2">
                    A person who agrees to be responsible for the loan if the borrower fails to repay.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Loan Agreement:</span>
                  <span className="text-muted-foreground text-sm ml-2">
                    The specific contract detailing the terms of your individual loan.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Services:</span>
                  <span className="text-muted-foreground text-sm ml-2">
                    All financial services, products, and digital platforms provided by Attivita Ricco Ltd.
                  </span>
                </div>
              </div>
            </Card>

            {/* Eligibility */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Eligibility and Application</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Eligibility Requirements</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Must be a Kenyan citizen aged 18 years or older</li>
                    <li>Must have a valid National ID or Passport</li>
                    <li>Must operate a legitimate business for at least 6 months</li>
                    <li>Must provide accurate and complete information</li>
                    <li>Must have a qualified guarantor</li>
                    <li>Must not be listed on any negative credit databases</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Application Process</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>All information provided must be accurate and verifiable</li>
                    <li>The Company reserves the right to verify all submitted information</li>
                    <li>False or misleading information may result in application rejection</li>
                    <li>Additional documentation may be requested during the review process</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Loan Terms */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Loan Terms and Conditions</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Interest Rates and Fees</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Interest rates range from 2.5% to 3.5% per month depending on loan type</li>
                    <li>All rates are clearly disclosed before loan approval</li>
                    <li>Processing fees, if any, are disclosed upfront</li>
                    <li>No hidden charges or surprise fees</li>
                    <li>Early repayment is allowed without penalties</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Repayment Terms</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Repayment periods range from 1 to 24 months</li>
                    <li>Monthly payment dates are agreed upon before disbursement</li>
                    <li>Payments can be made via M-PESA, bank transfer, or cash</li>
                    <li>Late payment fees may apply as specified in your loan agreement</li>
                    <li>Restructuring options available in case of financial difficulties</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Loan Approval and Disbursement</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Loan approval is at the sole discretion of the Company</li>
                    <li>The Company reserves the right to reject any application</li>
                    <li>Approved loans are typically disbursed within 12 hours</li>
                    <li>Disbursement methods include M-PESA and bank transfer</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Borrower Obligations */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Borrower Obligations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Payment Obligations</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Make payments on time as specified in the loan agreement</li>
                    <li>Notify the Company immediately if unable to make payments</li>
                    <li>Ensure sufficient funds are available for automatic payments</li>
                    <li>Pay all applicable fees and charges</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Information Updates</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Notify the Company of any changes in contact information</li>
                    <li>Update business information if circumstances change</li>
                    <li>Inform about any significant changes in financial situation</li>
                    <li>Provide additional documentation when requested</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Use of Funds</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Use loan funds only for stated business purposes</li>
                    <li>Do not use funds for illegal activities</li>
                    <li>Maintain proper business records</li>
                    <li>Allow reasonable inspection of business operations if requested</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Default and Collection */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Default and Collection</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Events of Default</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Failure to make payments when due</li>
                    <li>Providing false or misleading information</li>
                    <li>Using loan funds for unauthorized purposes</li>
                    <li>Bankruptcy or insolvency proceedings</li>
                    <li>Breach of any terms in the loan agreement</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Collection Procedures</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Initial contact within 7 days of missed payment</li>
                    <li>Formal notice sent after 14 days of default</li>
                    <li>Referral to credit reference bureaus after 30 days</li>
                    <li>Legal action may be taken after 60 days</li>
                    <li>Guarantor will be contacted for payment assistance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Consequences of Default</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Late payment fees and penalty charges</li>
                    <li>Negative reporting to credit reference bureaus</li>
                    <li>Acceleration of entire loan balance</li>
                    <li>Legal action for recovery of funds</li>
                    <li>Exclusion from future loan applications</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Privacy and Data */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Privacy and Data Protection</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  By using our services, you consent to the collection, use, and disclosure of your personal 
                  information as described in our Privacy Policy. This includes:
                </p>
                
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>Credit checks and verification procedures</li>
                  <li>Sharing information with credit reference bureaus</li>
                  <li>Communication regarding your loan and account</li>
                  <li>Compliance with regulatory reporting requirements</li>
                  <li>Marketing communications (with your consent)</li>
                </ul>
                
                <p className="text-muted-foreground text-sm">
                  For detailed information about how we handle your data, please review our 
                  <Link to="/privacy" className="text-primary hover:underline"> Privacy Policy</Link>.
                </p>
              </div>
            </Card>

            {/* Limitation of Liability */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Limitation of Liability</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  To the maximum extent permitted by law:
                </p>
                
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>The Company's liability is limited to the amount of the loan provided</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Business advice provided is general and not guaranteed</li>
                  <li>Technical issues with digital platforms may occur</li>
                  <li>Third-party service provider limitations may apply</li>
                </ul>
                
                <p className="text-muted-foreground text-sm">
                  This limitation does not affect your statutory rights under Kenyan consumer protection laws.
                </p>
              </div>
            </Card>

            {/* Governing Law */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Governing Law and Jurisdiction</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  These Terms and all loan agreements are governed by the laws of Kenya. Any disputes 
                  arising from these Terms or your loan agreement shall be subject to the exclusive 
                  jurisdiction of the Kenyan courts.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Initial disputes should be reported to our customer service team</li>
                    <li>Formal complaints can be escalated to management</li>
                    <li>External mediation may be considered for complex disputes</li>
                    <li>Legal action may be taken as a last resort</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Changes to Terms */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Changes to Terms</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on our website 
                with an updated "Last Updated" date. Significant changes will be communicated to existing 
                borrowers. Your continued use of our services after changes are posted constitutes acceptance 
                of the modified Terms.
              </p>
            </Card>

            {/* Contact Information */}
            <Card className="card-professional p-8 bg-muted/50">
              <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
              <p className="text-muted-foreground text-sm mb-4">
                For questions about these Terms or our services, please contact us:
              </p>
              
              <div className="space-y-2 text-sm">
                <p><strong>Attivita Ricco Ltd</strong></p>
                <p>Licensed by Central Bank of Kenya</p>
                <p>Email: <a href="mailto:info@attivitar.com" className="text-primary hover:underline">info@attivitar.com</a></p>
                <p>Phone: <a href="tel:+254738810000" className="text-primary hover:underline">+254 738 810 000</a></p>
                <p>Address: Nairobi, Kenya</p>
              </div>
              
              <div className="mt-6">
                <Button asChild className="btn-primary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;