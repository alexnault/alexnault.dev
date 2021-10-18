import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;

if (!SUPABASE_URL) {
  throw new Error("Missing SUPABASE_URL environment variable.");
}

if (!SUPABASE_SECRET_KEY) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_SECRET environment variable.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {});

export { supabase };
