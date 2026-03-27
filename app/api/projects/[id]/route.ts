import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb";
import Project from "@/models/Project";

export const dynamic = "force-dynamic";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const params = await context.params;
    const { id } = params;

    const body = await req.json();

    if (body._id) {
      delete body._id;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true },
    );

    if (!updatedProject) {
      return NextResponse.json(
        { error: "Project not found in DB" },
        { status: 404 },
      );
    }

    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update project", details: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const params = await context.params;
    const { id } = params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 },
    );
  }
}
