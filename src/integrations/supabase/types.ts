export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      businesses: {
        Row: {
          business_description: string | null
          business_location: string | null
          business_name: string
          business_registration: string | null
          business_type: string
          created_at: string
          employee_count: number | null
          id: string
          monthly_revenue: number | null
          registration_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          business_description?: string | null
          business_location?: string | null
          business_name: string
          business_registration?: string | null
          business_type: string
          created_at?: string
          employee_count?: number | null
          id?: string
          monthly_revenue?: number | null
          registration_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          business_description?: string | null
          business_location?: string | null
          business_name?: string
          business_registration?: string | null
          business_type?: string
          created_at?: string
          employee_count?: number | null
          id?: string
          monthly_revenue?: number | null
          registration_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      communications: {
        Row: {
          application_id: string | null
          communication_type: string
          created_at: string
          id: string
          message: string
          sent_at: string
          sent_by: string | null
          status: string | null
          subject: string | null
          user_id: string
        }
        Insert: {
          application_id?: string | null
          communication_type: string
          created_at?: string
          id?: string
          message: string
          sent_at?: string
          sent_by?: string | null
          status?: string | null
          subject?: string | null
          user_id: string
        }
        Update: {
          application_id?: string | null
          communication_type?: string
          created_at?: string
          id?: string
          message?: string
          sent_at?: string
          sent_by?: string | null
          status?: string | null
          subject?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "communications_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "loan_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          application_id: string | null
          created_at: string
          document_type: string
          file_name: string
          file_path: string
          file_size: number | null
          id: string
          is_verified: boolean | null
          mime_type: string | null
          user_id: string
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          application_id?: string | null
          created_at?: string
          document_type: string
          file_name: string
          file_path: string
          file_size?: number | null
          id?: string
          is_verified?: boolean | null
          mime_type?: string | null
          user_id: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          application_id?: string | null
          created_at?: string
          document_type?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          id?: string
          is_verified?: boolean | null
          mime_type?: string | null
          user_id?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "loan_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      guarantors: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          employer: string | null
          full_name: string
          id: string
          monthly_income: number | null
          national_id: string
          occupation: string | null
          phone: string
          relationship: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          employer?: string | null
          full_name: string
          id?: string
          monthly_income?: number | null
          national_id: string
          occupation?: string | null
          phone: string
          relationship: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          employer?: string | null
          full_name?: string
          id?: string
          monthly_income?: number | null
          national_id?: string
          occupation?: string | null
          phone?: string
          relationship?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      loan_applications: {
        Row: {
          amount: number
          application_date: string
          approval_date: string | null
          collateral_description: string | null
          collateral_value: number | null
          created_at: string
          credit_score: number | null
          disbursement_date: string | null
          id: string
          loan_officer_id: string | null
          loan_product_id: string
          purpose: string
          rejection_reason: string | null
          review_date: string | null
          risk_rating: string | null
          status: string | null
          term_months: number
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          application_date?: string
          approval_date?: string | null
          collateral_description?: string | null
          collateral_value?: number | null
          created_at?: string
          credit_score?: number | null
          disbursement_date?: string | null
          id?: string
          loan_officer_id?: string | null
          loan_product_id: string
          purpose: string
          rejection_reason?: string | null
          review_date?: string | null
          risk_rating?: string | null
          status?: string | null
          term_months: number
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          application_date?: string
          approval_date?: string | null
          collateral_description?: string | null
          collateral_value?: number | null
          created_at?: string
          credit_score?: number | null
          disbursement_date?: string | null
          id?: string
          loan_officer_id?: string | null
          loan_product_id?: string
          purpose?: string
          rejection_reason?: string | null
          review_date?: string | null
          risk_rating?: string | null
          status?: string | null
          term_months?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "loan_applications_loan_product_id_fkey"
            columns: ["loan_product_id"]
            isOneToOne: false
            referencedRelation: "loan_products"
            referencedColumns: ["id"]
          },
        ]
      }
      loan_disbursements: {
        Row: {
          account_number: string | null
          amount: number
          application_id: string
          created_at: string
          disbursed_by: string
          disbursement_date: string
          disbursement_method: string
          id: string
          notes: string | null
          transaction_id: string | null
        }
        Insert: {
          account_number?: string | null
          amount: number
          application_id: string
          created_at?: string
          disbursed_by: string
          disbursement_date?: string
          disbursement_method: string
          id?: string
          notes?: string | null
          transaction_id?: string | null
        }
        Update: {
          account_number?: string | null
          amount?: number
          application_id?: string
          created_at?: string
          disbursed_by?: string
          disbursement_date?: string
          disbursement_method?: string
          id?: string
          notes?: string | null
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "loan_disbursements_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "loan_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      loan_products: {
        Row: {
          created_at: string
          description: string
          id: string
          interest_rate: number
          is_active: boolean | null
          max_amount: number
          max_term_months: number
          min_amount: number
          min_term_months: number
          name: string
          processing_fee_rate: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          interest_rate: number
          is_active?: boolean | null
          max_amount: number
          max_term_months: number
          min_amount: number
          min_term_months: number
          name: string
          processing_fee_rate?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          interest_rate?: number
          is_active?: boolean | null
          max_amount?: number
          max_term_months?: number
          min_amount?: number
          min_term_months?: number
          name?: string
          processing_fee_rate?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      loan_repayments: {
        Row: {
          amount: number
          application_id: string
          created_at: string
          id: string
          interest_amount: number | null
          is_verified: boolean | null
          payment_date: string
          payment_method: string
          penalty_amount: number | null
          principal_amount: number | null
          reference_number: string | null
          transaction_id: string | null
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          amount: number
          application_id: string
          created_at?: string
          id?: string
          interest_amount?: number | null
          is_verified?: boolean | null
          payment_date?: string
          payment_method: string
          penalty_amount?: number | null
          principal_amount?: number | null
          reference_number?: string | null
          transaction_id?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          amount?: number
          application_id?: string
          created_at?: string
          id?: string
          interest_amount?: number | null
          is_verified?: boolean | null
          payment_date?: string
          payment_method?: string
          penalty_amount?: number | null
          principal_amount?: number | null
          reference_number?: string | null
          transaction_id?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "loan_repayments_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "loan_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      loan_schedules: {
        Row: {
          application_id: string
          created_at: string
          due_date: string
          id: string
          installment_number: number
          interest_amount: number
          is_paid: boolean | null
          paid_amount: number | null
          payment_date: string | null
          penalty_amount: number | null
          principal_amount: number
          total_amount: number
          updated_at: string
        }
        Insert: {
          application_id: string
          created_at?: string
          due_date: string
          id?: string
          installment_number: number
          interest_amount: number
          is_paid?: boolean | null
          paid_amount?: number | null
          payment_date?: string | null
          penalty_amount?: number | null
          principal_amount: number
          total_amount: number
          updated_at?: string
        }
        Update: {
          application_id?: string
          created_at?: string
          due_date?: string
          id?: string
          installment_number?: number
          interest_amount?: number
          is_paid?: boolean | null
          paid_amount?: number | null
          payment_date?: string | null
          penalty_amount?: number | null
          principal_amount?: number
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "loan_schedules_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "loan_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          county: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          national_id: string
          phone: string
          sub_county: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          county?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          national_id: string
          phone: string
          sub_county?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          county?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          national_id?: string
          phone?: string
          sub_county?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          id: string
          is_active: boolean | null
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          id?: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          id?: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: Database["public"]["Enums"]["user_role"]
      }
    }
    Enums: {
      user_role:
        | "customer"
        | "loan_officer"
        | "manager"
        | "admin"
        | "super_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: [
        "customer",
        "loan_officer",
        "manager",
        "admin",
        "super_admin",
      ],
    },
  },
} as const
