import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
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
    alert("Contact form submission requires backend integration. Please connect to Supabase for full functionality.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+254 738 810 000",
      description: "Call us during business hours for immediate assistance",
      action: "tel:+254738810000"
    },
    {
      icon: Mail,
      title: "Email Address", 
      details: "info@attivitar.com",
      description: "Send us an email and we'll respond within 24 hours",
      action: "mailto:info@attivitar.com"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "Nairobi, Kenya",
      description: "Visit our office for in-person consultation",
      action: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM | Sunday: Closed",
      action: null
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Loan Application Help",
    "Existing Loan Support",
    "Business Partnership", 
    "Media & Press",
    "Complaints & Feedback",
    "Technical Support"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Get in touch with our expert team. We're here to help you grow your business 
              with the right financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-professional p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <div className="space-y-2">
                  {info.action ? (
                    <a href={info.action} className="text-primary font-medium hover:underline">
                      {info.details}
                    </a>
                  ) : (
                    <div className="text-primary font-medium">{info.details}</div>
                  )}
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="professional-form">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Send us a Message</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
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

                <div>
                  <Label htmlFor="subject">Inquiry Type *</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your inquiry in detail..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-6">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Quick Information */}
            <div className="space-y-6">
              
              {/* Office Information */}
              <Card className="card-professional p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Our Office</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Headquarters</h4>
                    <p className="text-muted-foreground">
                      Attivita Ricco Ltd<br />
                      Nairobi, Kenya<br />
                      Licensed by Central Bank of Kenya
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Support */}
              <Card className="card-professional p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">For Urgent Loan Inquiries</h4>
                    <Button asChild className="w-full btn-primary">
                      <a href="tel:+254738810000">Call +254 738 810 000</a>
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For General Questions</h4>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:info@attivitar.com">Email info@attivitar.com</a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Response Times */}
              <Card className="card-professional p-6 bg-muted/50">
                <h3 className="text-lg font-bold text-primary mb-4">Expected Response Times</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Phone Calls:</span>
                    <span className="font-medium">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Inquiries:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact Form:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loan Applications:</span>
                    <span className="font-medium text-secondary">Within 12 hours</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="card-professional p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Visit Our Office</h3>
            <p className="text-muted-foreground mb-6">
              Located in the heart of Nairobi, our office is easily accessible for in-person consultations.
            </p>
            <div className="bg-muted/50 rounded-lg p-12 border-2 border-dashed border-border">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map integration available<br />
                Contact us for specific directions to our office
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;