import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { 
  Upload,
  FileText,
  CreditCard,
  UserCheck,
  Clock,
  Shield,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail
} from "lucide-react";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    businessName: "",
    businessType: "",
    loanAmount: "",
    loanPurpose: "",
    guarantorName: "",
    guarantorPhone: "",
    guarantorId: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will need backend integration
    alert("Form submission requires backend integration. Please connect to Supabase for full functionality.");
  };

  const requiredDocuments = [
    {
      icon: FileText,
      title: "National ID Copy",
      description: "Clear copy of your National ID (both sides)",
      required: true
    },
    {
      icon: CreditCard,
      title: "Bank/M-PESA Statement",
      description: "1 year statement showing business transactions",
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
      title: "Guarantor ID",
      description: "Copy of guarantor's National ID",
      required: true
    }
  ];

  const benefits = [
    "12-hour processing time",
    "Competitive interest rates",
    "Flexible repayment terms",
    "No hidden fees",
    "Dedicated account manager",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Apply for Business Loan
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Get funded in just 12 hours. Complete our simple application form 
              and take your business to the next level.
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Average processing time: 12 hours</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="professional-form">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">Loan Application Form</h2>
                  <p className="text-muted-foreground">All fields marked with * are required</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="idNumber">National ID Number *</Label>
                      <Input
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your ID number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+254 7XX XXX XXX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">Business Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Enter your business name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="businessType">Business Type *</Label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select business type</option>
                        <option value="retail">Retail/Shop</option>
                        <option value="restaurant">Restaurant/Food</option>
                        <option value="services">Services</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="technology">Technology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Loan Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">Loan Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount (Ksh) *</Label>
                      <Input
                        id="loanAmount"
                        name="loanAmount"
                        type="number"
                        value={formData.loanAmount}
                        onChange={handleInputChange}
                        placeholder="e.g., 100000"
                        min="5000"
                        max="1000000"
                        required
                      />
                    </div>
                    <div className="md:col-span-1">
                      <Label htmlFor="loanPurpose">Loan Purpose *</Label>
                      <select
                        id="loanPurpose"
                        name="loanPurpose"
                        value={formData.loanPurpose}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select loan purpose</option>
                        <option value="business-expansion">Business Expansion</option>
                        <option value="working-capital">Working Capital</option>
                        <option value="inventory">Inventory Purchase</option>
                        <option value="equipment">Equipment Purchase</option>
                        <option value="startup">Start-up Capital</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Guarantor Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">Guarantor Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="guarantorName">Guarantor Full Name *</Label>
                      <Input
                        id="guarantorName"
                        name="guarantorName"
                        value={formData.guarantorName}
                        onChange={handleInputChange}
                        placeholder="Guarantor's full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guarantorPhone">Guarantor Phone *</Label>
                      <Input
                        id="guarantorPhone"
                        name="guarantorPhone"
                        type="tel"
                        value={formData.guarantorPhone}
                        onChange={handleInputChange}
                        placeholder="+254 7XX XXX XXX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guarantorId">Guarantor ID Number *</Label>
                      <Input
                        id="guarantorId"
                        name="guarantorId"
                        value={formData.guarantorId}
                        onChange={handleInputChange}
                        placeholder="Guarantor's ID number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Document Upload Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">Required Documents</h3>
                  <p className="text-sm text-muted-foreground">
                    Please upload clear, readable copies of all required documents
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                        <doc.icon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <h4 className="font-semibold text-sm mb-1">{doc.title}</h4>
                        <p className="text-xs text-muted-foreground mb-3">{doc.description}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload File
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" required className="h-4 w-4" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <a href="/terms" className="text-primary hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" required className="h-4 w-4" />
                    <Label htmlFor="consent" className="text-sm">
                      I consent to Attivita Ricco contacting me regarding my loan application *
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-6">
                  Submit Loan Application
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Why Choose Us */}
            <Card className="card-professional p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Why Choose Attivita Ricco?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Support */}
            <Card className="card-professional p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Need Help?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to assist you with your loan application.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+254 738 810 000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">info@attivitar.com</span>
                </div>
              </div>
            </Card>

            {/* Security Notice */}
            <Card className="card-professional p-6 bg-muted/50">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-2">Your Data is Secure</h4>
                  <p className="text-xs text-muted-foreground">
                    All information is encrypted and protected. We are fully licensed 
                    and regulated by the Central Bank of Kenya.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apply;