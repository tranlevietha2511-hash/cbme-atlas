// src/features/curriculum/curriculum.repo.js

import { getSupabaseAdmin } from "@/server/db/supabaseAdmin";

/**
 * Create a new curriculum
 * @param {Object} params
 * @param {string} params.name
 * @param {string} params.academicYear
 * @param {boolean} params.isActive
 */
export async function createCurriculum({ name, academicYear, isActive }) {
  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("curricula")
    .insert([
      {
        name,
        academic_year: academicYear,
        is_active: isActive,
      },
    ])
    .select("*")
    .single();

  if (error) {
    console.error("createCurriculum error:", error);
    throw error;
  }

  return data;
}

/**
 * List all curricula
 */
export async function listCurricula() {
  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("curricula")
    .select("id, name, academic_year, is_active, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("listCurricula error:", error);
    throw error;
  }

  return data ?? [];
}

/**
 * Get curriculum by ID
 * @param {string|number} curriculumId
 */
export async function getCurriculumById(curriculumId) {
  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("curricula")
    .select("*")
    .eq("id", curriculumId)
    .single();

  if (error) {
    console.error("getCurriculumById error:", error);
    throw error;
  }

  return data;
}

/**
 * Update curriculum
 * @param {string|number} curriculumId
 * @param {Object} payload
 */
export async function updateCurriculum(curriculumId, payload) {
  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("curricula")
    .update(payload)
    .eq("id", curriculumId)
    .select("*")
    .single();

  if (error) {
    console.error("updateCurriculum error:", error);
    throw error;
  }

  return data;
}

/**
 * Soft delete curriculum (recommended)
 * @param {string|number} curriculumId
 */
export async function deactivateCurriculum(curriculumId) {
  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("curricula")
    .update({ is_active: false })
    .eq("id", curriculumId)
    .select("*")
    .single();

  if (error) {
    console.error("deactivateCurriculum error:", error);
    throw error;
  }

  return data;
}
