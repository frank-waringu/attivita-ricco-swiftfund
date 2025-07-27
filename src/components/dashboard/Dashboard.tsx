import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { 
  CreditCard, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  User,
  Building,
  Users,
  TrendingUp
} from "lucide-react";

interface LoanApplication {
  id: string;
  amount: number;
  status: string;
  purpose: string;
  application_date: string;
  loan_products: {
    name: string;
  };
}

interface Profile {
  full_name: string;
  national_id: string;
  phone: string;
  email: string;
}

const Dashboard = () => {
  const { user, session, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !session) {
      navigate("/auth");
    }
  }, [session, loading, navigate]);

  useEffect(() => {
    if (session?.user) {
      fetchUserData();
    }
  }, [session]);

  const fetchUserData = async () => {
    try {
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", session?.user?.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error("Error fetching profile:", profileError);
      } else {
        setProfile(profileData);
      }

      // Fetch loan applications
      const { data: applicationsData, error: applicationsError } = await supabase
        .from("loan_applications")
        .select(`
          id,
          amount,
          status,
          purpose,
          application_date,
          loan_products (
            name
          )
        `)
        .eq("user_id", session?.user?.id)
        .order("application_date", { ascending: false });

      if (applicationsError) {
        console.error("Error fetching applications:", applicationsError);
        toast({
          title: "Error",
          description: "Failed to load your loan applications.",
          variant: "destructive"
        });
      } else {
        setApplications(applicationsData || []);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive"
      });
    } else {
      navigate("/");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-600";
      case "rejected":
        return "text-red-600";
      case "under_review":
        return "text-yellow-600";
      case "disbursed":
        return "text-blue-600";
      case "completed":
        return "text-green-700";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4" />;
      case "under_review":
        return <Clock className="h-4 w-4" />;
      case "disbursed":
        return <CreditCard className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Welcome, {profile?.full_name || user?.email}
            </h1>
            <p className="text-muted-foreground">
              Manage your loan applications and account settings
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{applications.length}</div>
                <div className="text-sm text-muted-foreground">Total Applications</div>
              </div>
            </div>
          </Card>

          <Card className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {applications.filter(app => app.status === 'approved' || app.status === 'disbursed').length}
                </div>
                <div className="text-sm text-muted-foreground">Approved</div>
              </div>
            </div>
          </Card>

          <Card className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {applications.filter(app => app.status === 'pending' || app.status === 'under_review').length}
                </div>
                <div className="text-sm text-muted-foreground">Under Review</div>
              </div>
            </div>
          </Card>

          <Card className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  Ksh {applications.reduce((sum, app) => sum + app.amount, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Requested</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Loan Applications */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary">Your Loan Applications</h2>
              <Button onClick={() => navigate("/apply")} className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                New Application
              </Button>
            </div>

            {applications.length === 0 ? (
              <Card className="card-professional p-12 text-center">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start your journey by applying for your first business loan
                </p>
                <Button onClick={() => navigate("/apply")} className="btn-primary">
                  Apply for Loan
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {applications.map((application) => (
                  <Card key={application.id} className="card-professional p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {getStatusIcon(application.status)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {application.loan_products?.name || "Business Loan"}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {application.purpose}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Applied on {new Date(application.application_date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">
                          Ksh {application.amount.toLocaleString()}
                        </div>
                        <div className={`flex items-center gap-1 text-sm ${getStatusColor(application.status)}`}>
                          {getStatusIcon(application.status)}
                          <span className="capitalize">{application.status.replace('_', ' ')}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Profile & Quick Actions */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="card-professional p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </h3>
              {profile ? (
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground">Full Name</div>
                    <div className="font-medium">{profile.full_name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">{profile.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">{profile.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">National ID</div>
                    <div className="font-medium">{profile.national_id}</div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted-foreground text-sm mb-4">
                    Complete your profile to apply for loans
                  </p>
                  <Button onClick={() => navigate("/apply")} size="sm" className="btn-primary">
                    Complete Profile
                  </Button>
                </div>
              )}
            </Card>

            {/* Quick Actions */}
            <Card className="card-professional p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate("/apply")} 
                  className="w-full btn-primary justify-start"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Apply for New Loan
                </Button>
                <Button 
                  onClick={() => navigate("/services")} 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Building className="h-4 w-4 mr-2" />
                  View Loan Products
                </Button>
                <Button 
                  onClick={() => navigate("/contact")} 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;