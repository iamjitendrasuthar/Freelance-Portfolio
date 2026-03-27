// app/api/projects/[id]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb";
import Project from "@/models/Project";

// Yeh Next.js ko batayega ki is API ko cache NAHI karna hai
export const dynamic = "force-dynamic";

export async function PUT(
  req: Request,
  context: { params: { id: string } }, // Using 'context' to safely await params
) {
  try {
    await connectDB();

    // 1. Next.js 15 Fix: Await the params object
    const params = await context.params;
    const { id } = params;

    console.log("-> PUT API HIT for ID:", id); // Terminal mein check karein

    const body = await req.json();

    // 2. MongoDB Fix: _id field ko body se nikalna zaroori hai
    // kyunki MongoDB usko modify allow nahi karta
    if (body._id) {
      delete body._id;
    }

    // 3. Document Update
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: body }, // $set ensures exact fields are updated
      { new: true, runValidators: true },
    );

    // Agar database mein us ID ka project nahi mila
    if (!updatedProject) {
      console.log("-> ERROR: Project not found in DB for ID:", id);
      return NextResponse.json(
        { error: "Project not found in DB" },
        { status: 404 },
      );
    }

    console.log("-> SUCCESS: Project Updated");
    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error: any) {
    console.error("-> PUT ERROR:", error.message);
    return NextResponse.json(
      { error: "Failed to update project", details: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: { id: string } },
) {
  try {
    await connectDB();

    // Await params for Next.js latest versions
    const params = await context.params;
    const { id } = params;

    console.log("-> DELETE API HIT for ID:", id);

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("-> DELETE ERROR:", error.message);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 },
    );
  }
}
