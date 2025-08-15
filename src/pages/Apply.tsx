import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText,
  CreditCard,
  UserCheck,
  Clock,
  Shield,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Loader2
} from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    businessName: "",
    businessType: "",
    loanAmount: "",
    termMonths: "",
    loanPurpose: "",
    guarantorName: "",
    guarantorPhone: "",
    guarantorId: "",
    guarantorRelationship: "",
    address: "",
    county: "",
    businessLocation: "",
    businessDescription: "",
    monthlyRevenue: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application submitted successfully!",
        description: "Thank you for your application. We will contact you within 24 hours."
      });
      
      // Reset form
      setFormData({
        fullName: "",
        idNumber: "",
        phone: "",
        email: "",
        businessName: "",
        businessType: "",
        loanAmount: "",
        termMonths: "",
        loanPurpose: "",
        guarantorName: "",
        guarantorPhone: "",
        guarantorId: "",
        guarantorRelationship: "",
        address: "",
        county: "",
        businessLocation: "",
        businessDescription: "",
        monthlyRevenue: ""
      });
      
      setSubmitting(false);
    }, 2000);
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
    "Quick processing time",
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
              Get funded quickly. Complete our simple application form 
              and take your business to the next level.
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">We'll contact you within 24 hours</span>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessLocation">Business Location *</Label>
                      <Input
                        id="businessLocation"
                        name="businessLocation"
                        value={formData.businessLocation}
                        onChange={handleInputChange}
                        placeholder="e.g., Nairobi, Karen"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyRevenue">Monthly Revenue (Ksh)</Label>
                      <Input
                        id="monthlyRevenue"
                        name="monthlyRevenue"
                        type="number"
                        value={formData.monthlyRevenue}
                        onChange={handleInputChange}
                        placeholder="e.g., 50000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="businessDescription">Business Description</Label>
                    <Textarea
                      id="businessDescription"
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={handleInputChange}
                      placeholder="Brief description of your business activities"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="address">Your Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Physical address"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="county">County *</Label>
                      <Input
                        id="county"
                        name="county"
                        value={formData.county}
                        onChange={handleInputChange}
                        placeholder="e.g., Nairobi"
                        required
                      />
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
                    <div>
                      <Label htmlFor="termMonths">Loan Term (Months) *</Label>
                      <Input
                        id="termMonths"
                        name="termMonths"
                        type="number"
                        value={formData.termMonths}
                        onChange={handleInputChange}
                        placeholder="e.g., 12"
                        min="1"
                        max="24"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="loanPurpose">Loan Purpose *</Label>
                    <Textarea
                      id="loanPurpose"
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleInputChange}
                      placeholder="Describe how you plan to use the loan"
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Guarantor Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">Guarantor Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guarantorName">Guarantor Full Name *</Label>
                      <Input
                        id="guarantorName"
                        name="guarantorName"
                        value={formData.guarantorName}
                        onChange={handleInputChange}
                        placeholder="Enter guarantor's full name"
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guarantorId">Guarantor ID Number *</Label>
                      <Input
                        id="guarantorId"
                        name="guarantorId"
                        value={formData.guarantorId}
                        onChange={handleInputChange}
                        placeholder="Enter guarantor's ID number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guarantorRelationship">Relationship *</Label>
                      <Input
                        id="guarantorRelationship"
                        name="guarantorRelationship"
                        value={formData.guarantorRelationship}
                        onChange={handleInputChange}
                        placeholder="e.g., Friend, Family Member"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">Required Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requiredDocuments.map((doc, index) => {
                      const IconComponent = doc.icon;
                      return (
                        <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-foreground">{doc.title}</h4>
                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                            {doc.required && (
                              <span className="text-xs text-primary font-medium">Required</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Please have these documents ready before submitting your application. 
                      Our team will contact you for document collection after initial review.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full btn-primary h-12 text-lg font-semibold"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Benefits Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Why Choose Us?</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Contact Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Need Help?</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+254 738 810 000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@attivitar.com</span>
                </div>
                <p className="text-muted-foreground">
                  Our team is available Monday to Friday, 8:00 AM to 6:00 PM
                </p>
              </div>
            </Card>

            {/* Security Notice */}
            <Card className="p-6 bg-amber-50 border-amber-200">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Security Notice</h4>
                  <p className="text-sm text-amber-700">
                    Your information is protected with bank-level security. 
                    We never share your personal data with third parties.
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