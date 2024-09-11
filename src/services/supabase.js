import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cmmjvmyjeihsmmzzdwri.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtbWp2bXlqZWloc21tenpkd3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNzQ0MDYsImV4cCI6MjA0MDk1MDQwNn0.WDMc2JvYR23IEFz9bRpLRYoNOwUbaBu0rLmahpDYYcU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
