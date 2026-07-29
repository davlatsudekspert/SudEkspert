import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://hnxqonffsajpmqfwpxex.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhueHFvbmZmc2FqcG1xZndweGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNjI5OTUsImV4cCI6MjEwMDczODk5NX0.C_5Qf2GodcfPTpwAhH1BwyDYqEIFr6OybWJYhwsv5yo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
