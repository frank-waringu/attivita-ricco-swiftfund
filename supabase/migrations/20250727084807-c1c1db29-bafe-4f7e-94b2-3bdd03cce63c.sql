-- Create comprehensive microfinance database schema

-- User profiles table
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    national_id TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    address TEXT,
    county TEXT,
    sub_county TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Business information table
CREATE TABLE public.businesses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    business_name TEXT NOT NULL,
    business_type TEXT NOT NULL,
    business_registration TEXT,
    registration_date DATE,
    business_location TEXT,
    business_description TEXT,
    monthly_revenue DECIMAL(15,2),
    employee_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Guarantor information table
CREATE TABLE public.guarantors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    full_name TEXT NOT NULL,
    national_id TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    relationship TEXT NOT NULL,
    occupation TEXT,
    employer TEXT,
    monthly_income DECIMAL(15,2),
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Loan products table
CREATE TABLE public.loan_products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    min_amount DECIMAL(15,2) NOT NULL,
    max_amount DECIMAL(15,2) NOT NULL,
    min_term_months INTEGER NOT NULL,
    max_term_months INTEGER NOT NULL,
    interest_rate DECIMAL(5,2) NOT NULL,
    processing_fee_rate DECIMAL(5,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Loan applications table
CREATE TABLE public.loan_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    loan_product_id UUID REFERENCES public.loan_products(id) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    term_months INTEGER NOT NULL,
    purpose TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'approved', 'rejected', 'disbursed', 'completed', 'defaulted')),
    application_date TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    review_date TIMESTAMP WITH TIME ZONE,
    approval_date TIMESTAMP WITH TIME ZONE,
    disbursement_date TIMESTAMP WITH TIME ZONE,
    rejection_reason TEXT,
    loan_officer_id UUID REFERENCES auth.users(id),
    credit_score INTEGER,
    risk_rating TEXT CHECK (risk_rating IN ('low', 'medium', 'high')),
    collateral_description TEXT,
    collateral_value DECIMAL(15,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Document uploads table
CREATE TABLE public.documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    application_id UUID REFERENCES public.loan_applications(id) ON DELETE CASCADE,
    document_type TEXT NOT NULL CHECK (document_type IN ('national_id', 'business_permit', 'bank_statement', 'mpesa_statement', 'passport_photo', 'guarantor_id', 'collateral_document', 'other')),
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_size BIGINT,
    mime_type TEXT,
    is_verified BOOLEAN DEFAULT false,
    verified_by UUID REFERENCES auth.users(id),
    verified_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Loan disbursements table
CREATE TABLE public.loan_disbursements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id UUID REFERENCES public.loan_applications(id) ON DELETE CASCADE NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    disbursement_method TEXT NOT NULL CHECK (disbursement_method IN ('mpesa', 'bank_transfer', 'cash')),
    account_number TEXT,
    transaction_id TEXT,
    disbursement_date TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    disbursed_by UUID REFERENCES auth.users(id) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Loan repayments table
CREATE TABLE public.loan_repayments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id UUID REFERENCES public.loan_applications(id) ON DELETE CASCADE NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    payment_date TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    payment_method TEXT NOT NULL CHECK (payment_method IN ('mpesa', 'bank_transfer', 'cash')),
    transaction_id TEXT,
    reference_number TEXT,
    penalty_amount DECIMAL(15,2) DEFAULT 0,
    interest_amount DECIMAL(15,2) DEFAULT 0,
    principal_amount DECIMAL(15,2) DEFAULT 0,
    is_verified BOOLEAN DEFAULT false,
    verified_by UUID REFERENCES auth.users(id),
    verified_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Loan schedules table (for tracking payment schedules)
CREATE TABLE public.loan_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id UUID REFERENCES public.loan_applications(id) ON DELETE CASCADE NOT NULL,
    installment_number INTEGER NOT NULL,
    due_date DATE NOT NULL,
    principal_amount DECIMAL(15,2) NOT NULL,
    interest_amount DECIMAL(15,2) NOT NULL,
    total_amount DECIMAL(15,2) NOT NULL,
    paid_amount DECIMAL(15,2) DEFAULT 0,
    is_paid BOOLEAN DEFAULT false,
    payment_date TIMESTAMP WITH TIME ZONE,
    penalty_amount DECIMAL(15,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Communication logs table
CREATE TABLE public.communications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    application_id UUID REFERENCES public.loan_applications(id) ON DELETE CASCADE,
    communication_type TEXT NOT NULL CHECK (communication_type IN ('sms', 'email', 'call', 'visit', 'system_notification')),
    subject TEXT,
    message TEXT NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    sent_by UUID REFERENCES auth.users(id),
    status TEXT DEFAULT 'sent' CHECK (status IN ('pending', 'sent', 'delivered', 'failed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- User roles and permissions
CREATE TYPE public.user_role AS ENUM ('customer', 'loan_officer', 'manager', 'admin', 'super_admin');

CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role user_role NOT NULL DEFAULT 'customer',
    assigned_by UUID REFERENCES auth.users(id),
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    is_active BOOLEAN DEFAULT true,
    UNIQUE(user_id, role)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guarantors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_disbursements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_repayments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.communications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS user_role AS $$
BEGIN
    RETURN (
        SELECT role 
        FROM public.user_roles 
        WHERE user_id = auth.uid() 
        AND is_active = true
        ORDER BY assigned_at DESC 
        LIMIT 1
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
FOR SELECT USING (user_id = auth.uid() OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can insert their own profile" ON public.profiles
FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (user_id = auth.uid() OR public.get_current_user_role() IN ('manager', 'admin', 'super_admin'));

-- RLS Policies for businesses
CREATE POLICY "Users can view their own business info" ON public.businesses
FOR SELECT USING (user_id = auth.uid() OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can insert their own business info" ON public.businesses
FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own business info" ON public.businesses
FOR UPDATE USING (user_id = auth.uid() OR public.get_current_user_role() IN ('manager', 'admin', 'super_admin'));

-- RLS Policies for guarantors
CREATE POLICY "Users can view their own guarantor info" ON public.guarantors
FOR SELECT USING (user_id = auth.uid() OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can insert their own guarantor info" ON public.guarantors
FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own guarantor info" ON public.guarantors
FOR UPDATE USING (user_id = auth.uid() OR public.get_current_user_role() IN ('manager', 'admin', 'super_admin'));

-- RLS Policies for loan products (public read, admin write)
CREATE POLICY "Anyone can view active loan products" ON public.loan_products
FOR SELECT USING (is_active = true OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Only admins can modify loan products" ON public.loan_products
FOR ALL USING (public.get_current_user_role() IN ('admin', 'super_admin'));

-- RLS Policies for loan applications
CREATE POLICY "Users can view their own applications" ON public.loan_applications
FOR SELECT USING (user_id = auth.uid() OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can insert their own applications" ON public.loan_applications
FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their pending applications" ON public.loan_applications
FOR UPDATE USING (
    (user_id = auth.uid() AND status = 'pending') OR 
    public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin')
);

-- RLS Policies for documents
CREATE POLICY "Users can view their own documents" ON public.documents
FOR SELECT USING (user_id = auth.uid() OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can insert their own documents" ON public.documents
FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own documents" ON public.documents
FOR UPDATE USING (user_id = auth.uid() OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

-- RLS Policies for other tables (staff access only)
CREATE POLICY "Staff can access disbursements" ON public.loan_disbursements
FOR ALL USING (public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can view their repayments" ON public.loan_repayments
FOR SELECT USING (
    application_id IN (SELECT id FROM public.loan_applications WHERE user_id = auth.uid()) OR
    public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin')
);

CREATE POLICY "Staff can manage repayments" ON public.loan_repayments
FOR ALL USING (public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can view their loan schedules" ON public.loan_schedules
FOR SELECT USING (
    application_id IN (SELECT id FROM public.loan_applications WHERE user_id = auth.uid()) OR
    public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin')
);

CREATE POLICY "Staff can manage loan schedules" ON public.loan_schedules
FOR ALL USING (public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Users can view their communications" ON public.communications
FOR SELECT USING (user_id = auth.uid() OR public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

CREATE POLICY "Staff can manage communications" ON public.communications
FOR ALL USING (public.get_current_user_role() IN ('loan_officer', 'manager', 'admin', 'super_admin'));

-- RLS Policies for user roles
CREATE POLICY "Users can view their own roles" ON public.user_roles
FOR SELECT USING (user_id = auth.uid() OR public.get_current_user_role() IN ('manager', 'admin', 'super_admin'));

CREATE POLICY "Only admins can manage user roles" ON public.user_roles
FOR ALL USING (public.get_current_user_role() IN ('admin', 'super_admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at columns
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON public.businesses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_loan_applications_updated_at BEFORE UPDATE ON public.loan_applications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_loan_schedules_updated_at BEFORE UPDATE ON public.loan_schedules FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'customer');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert default loan products
INSERT INTO public.loan_products (name, description, min_amount, max_amount, min_term_months, max_term_months, interest_rate, processing_fee_rate) VALUES
('Business Growth Loan', 'Expand your existing business operations, purchase inventory, or invest in new equipment', 10000, 1000000, 3, 24, 2.5, 2.0),
('Working Capital Loan', 'Manage cash flow, pay suppliers, or cover operational expenses during slow periods', 5000, 500000, 1, 12, 3.0, 1.5),
('Start-up Business Loan', 'Launch your new business venture with the capital you need to get started', 15000, 300000, 6, 18, 3.5, 2.5);