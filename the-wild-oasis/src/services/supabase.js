import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://kcdceakoeosmbczubkjm.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZGNlYWtvZW9zbWJjenVia2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MDMxNzgsImV4cCI6MjA3MTA3OTE3OH0.Ua6syxRqOZ_HJ9dNvjk4Caa7vWegCRJyUIQdEHi8iqM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
