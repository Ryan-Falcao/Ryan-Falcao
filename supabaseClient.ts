import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://swasjokrndcdetxnnczj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3YXNqb2tybmRjZGV0eG5uY3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MDk3NTAsImV4cCI6MjA5ODA4NTc1MH0.AhsUhBS-O6Dd6P7j6abfcgaAZZgQD81058KhP9Lo3MI";

export const supabase = createClient(supabaseUrl, supabaseKey);
