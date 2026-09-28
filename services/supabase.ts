import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oxqanjedmcjwlevvbjnc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_SzK1UUsO9raG5UPLTOyO_w_IbMveRao";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
