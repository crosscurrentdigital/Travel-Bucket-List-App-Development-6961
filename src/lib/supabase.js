import { createClient } from '@supabase/supabase-js'

// Project URL and anon key will be auto-injected during deployment
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://<PROJECT-ID>.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '<ANON_KEY>'

// Validate environment variables
if (SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>') {
  console.warn('Missing Supabase environment variables')
}

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

export default supabase