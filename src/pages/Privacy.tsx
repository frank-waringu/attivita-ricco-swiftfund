import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Your privacy and data security are our top priorities. 
              Learn how we protect and handle your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">Our Commitment to Privacy</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Attivita Ricco Ltd ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website, use our services, or apply for our loan products.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()} | 
                <strong> Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>
            </Card>

            {/* Information We Collect */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Information We Collect</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-muted-foreground text-sm mb-2">When you apply for our services, we may collect:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Full name and contact information (phone, email, address)</li>
                    <li>National ID number and copies of identification documents</li>
                    <li>Business information and registration details</li>
                    <li>Financial information including bank statements and M-PESA records</li>
                    <li>Guarantor information and documentation</li>
                    <li>Photographs (passport photos)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>IP address and browser information</li>
                    <li>Website usage patterns and preferences</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">How We Use Your Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Primary Uses</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Process and evaluate loan applications</li>
                    <li>Verify identity and conduct background checks</li>
                    <li>Assess creditworthiness and business viability</li>
                    <li>Communicate about your application and account</li>
                    <li>Provide customer support and services</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Secondary Uses</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Improve our services and customer experience</li>
                    <li>Send relevant business information and updates (with consent)</li>
                    <li>Conduct market research and analytics</li>
                    <li>Prevent fraud and ensure security</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Information Sharing */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Information Sharing and Disclosure</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Authorized Sharing</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>With your explicit consent</li>
                    <li>With credit reference bureaus for credit assessment</li>
                    <li>With regulatory authorities as required by law</li>
                    <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>In case of business merger, acquisition, or restructuring</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Legal Requirements</h4>
                  <p className="text-muted-foreground text-sm">
                    We may disclose information when required by law, court orders, or to protect our rights, 
                    property, or safety, or that of others.
                  </p>
                </div>
              </div>
            </Card>

            {/* Data Security */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Data Security</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  We implement robust security measures to protect your personal information:
                </p>
                
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers and data centers</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure document storage and disposal</li>
                  <li>Multi-factor authentication systems</li>
                </ul>
                
                <p className="text-muted-foreground text-sm">
                  While we strive to protect your information, no method of transmission over the internet 
                  is 100% secure. We cannot guarantee absolute security but continuously work to improve our security measures.
                </p>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Your Rights</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  You have the following rights regarding your personal information:
                </p>
                
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                  <li><strong>Restriction:</strong> Request limitation of processing</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                
                <p className="text-muted-foreground text-sm">
                  To exercise these rights, contact us at <a href="mailto:info@attivitar.com" className="text-primary hover:underline">info@attivitar.com</a> 
                  or call <a href="tel:+254738810000" className="text-primary hover:underline">+254 738 810 000</a>.
                </p>
              </div>
            </Card>

            {/* Data Retention */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Data Retention</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  We retain your personal information for as long as necessary to:
                </p>
                
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>Provide our services and manage your account</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Prevent fraud and maintain security</li>
                </ul>
                
                <p className="text-muted-foreground text-sm">
                  Generally, we retain loan application data for 7 years after account closure, 
                  as required by Kenyan financial regulations.
                </p>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Cookies and Tracking</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Our website uses cookies and similar technologies to enhance your experience:
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Types of Cookies We Use</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant content (with consent)</li>
                  </ul>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  You can control cookies through your browser settings, but disabling essential cookies 
                  may affect website functionality.
                </p>
              </div>
            </Card>

            {/* Changes to Policy */}
            <Card className="card-professional p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Changes to This Policy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of significant changes by posting the updated policy on our website and updating the 
                "Last Updated" date. We encourage you to review this policy regularly.
              </p>
            </Card>

            {/* Contact Information */}
            <Card className="card-professional p-8 bg-muted/50">
              <h3 className="text-xl font-bold text-primary mb-6">Contact Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="space-y-2 text-sm">
                <p><strong>Attivita Ricco Ltd</strong></p>
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

export default Privacy;