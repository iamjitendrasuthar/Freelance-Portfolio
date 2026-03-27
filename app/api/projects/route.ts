// app/api/projects/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb";
import Project from "@/models/Project";

// GET: Fetch all projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 }); // Newest first
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

// POST: Create a new project
export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();

    const newProject = await Project.create(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 },
    );
  }
}
