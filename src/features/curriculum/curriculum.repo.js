import { supabaseAdmin } from "@/server/db/supabaseAdmin";

export async function createCurriculum({ name, academicYear, isActive }) {
  const { data, error } = await supabaseAdmin
    .from("curricula")
    .insert([{ name, academic_year: academicYear, is_active: isActive }])
    .select("*")
    .single();

  if (error) throw error;
  return data;
}

export async function listCurricula() {
  const { data, error } = await supabaseAdmin
    .from("curricula")
    .select("id,name,academic_year,is_active,created_at")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}
