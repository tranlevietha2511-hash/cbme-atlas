import { createCurriculumSchema } from "./curriculum.schema";
import { createCurriculum, listCurricula } from "./curriculum.repo";

export async function handleCreateCurriculum(payload) {
  const parsed = createCurriculumSchema.parse(payload);
  return await createCurriculum(parsed);
}

export async function handleListCurricula() {
  return await listCurricula();
}
