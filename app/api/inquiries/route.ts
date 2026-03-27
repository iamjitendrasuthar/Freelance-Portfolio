// app/api/inquiries/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb"; // Apna path verify kar lein
import ClientInquiry from "@/models/ClientInquiry";

export const dynamic = "force-dynamic";
// GET: Fetch all inquiries
export async function GET() {
  try {
    await connectDB();
    const inquiries = await ClientInquiry.find({}).sort({ createdAt: -1 }); // Newest first
    return NextResponse.json(
      { success: true, data: inquiries },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Fetch Inquiries Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch inquiries" },
      { status: 500 },
    );
  }
}
export async function POST(req: Request) {
  try {
    await connectDB();

    // Frontend se aaya data JSON mein convert karein
    const body = await req.json();

    // Database mein naya record create karein
    const newInquiry = await ClientInquiry.create(body);

    return NextResponse.json(
      { success: true, data: newInquiry },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("DB Save Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save inquiry" },
      { status: 500 },
    );
  }
}
