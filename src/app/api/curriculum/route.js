import { handleCreateCurriculum, handleListCurricula } from "@/features/curriculum/curriculum.service";

export async function GET() {
  try {
    const data = await handleListCurricula();
    return Response.json({ ok: true, data });
  } catch (err) {
    return Response.json({ ok: false, error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const data = await handleCreateCurriculum(body);
    return Response.json({ ok: true, data }, { status: 201 });
  } catch (err) {
    // Zod parse errors will land here too
    return Response.json({ ok: false, error: err?.message ?? "Invalid request" }, { status: 400 });
  }
}
