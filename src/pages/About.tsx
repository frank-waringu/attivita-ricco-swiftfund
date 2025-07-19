import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Users,
  TrendingUp,
  Shield,
  Clock,
  Award,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We operate with complete transparency and ethical business practices, building lasting relationships with our clients."
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "Our 12-hour processing time reflects our commitment to helping businesses seize opportunities quickly."
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "We understand the Kenyan market and are dedicated to supporting local entrepreneurs and communities."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Every loan we provide is an investment in Kenya's economic development and entrepreneurial success."
    }
  ];

  const whyChoose = [
    "Licensed and regulated by Central Bank of Kenya",
    "Over 10,000 successful business loans disbursed",
    "Industry-leading 12-hour processing time",
    "Flexible repayment terms tailored to your business",
    "Local expertise with deep market understanding",
    "Competitive interest rates with no hidden fees",
    "Dedicated customer support throughout your loan term",
    "Digital-first approach for convenience and speed"
  ];

  const teamStats = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members"
    },
    {
      icon: Award,
      number: "10,000+",
      label: "Happy Clients"
    },
    {
      icon: TrendingUp,
      number: "Ksh 2B+",
      label: "Loans Disbursed"
    },
    {
      icon: Clock,
      number: "12hrs",
      label: "Average Processing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              About Attivita Ricco Ltd
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Kenya's premier microfinance institution, empowering entrepreneurs 
              with fast, reliable business financing since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Attivita Ricco Ltd was founded with a simple yet powerful vision: to provide 
                  Kenyan entrepreneurs with fast, accessible business financing that could keep 
                  pace with their ambitions. We recognized that traditional banking often failed 
                  to serve the unique needs of small and medium enterprises.
                </p>
                <p>
                  Today, we stand as one of Kenya's most trusted microfinance institutions, 
                  having disbursed over Ksh 2 billion in business loans to more than 10,000 
                  entrepreneurs across the country. Our innovative 12-hour processing time 
                  has revolutionized how businesses access capital.
                </p>
                <p>
                  Licensed and regulated by the Central Bank of Kenya, we combine financial 
                  expertise with deep local knowledge to provide personalized solutions that 
                  drive real business growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamStats.map((stat, index) => (
                <Card key={index} className="card-professional p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Vision */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be East Africa's leading microfinance institution, known for our speed, 
                reliability, and unwavering commitment to small business success. We envision 
                a Kenya where every entrepreneur has access to the financial tools they need 
                to build thriving, sustainable businesses.
              </p>
            </Card>

            {/* Mission */}
            <Card className="card-professional p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide fast, accessible, and responsible business financing that empowers 
                Kenyan entrepreneurs to grow their businesses, create jobs, and contribute to 
                economic development. We are committed to delivering exceptional service with 
                integrity and transparency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape our relationship with every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-professional p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Attivita Ricco?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what sets us apart from other financial institutions in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((reason, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the Attivita Ricco difference. Apply for your business loan today 
            and join thousands of successful entrepreneurs across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-secondary text-lg px-8 py-6">
              <Link to="/apply">Apply for Loan</Link>
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

export default About;