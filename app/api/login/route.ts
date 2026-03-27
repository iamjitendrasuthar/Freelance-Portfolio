import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // .env se credentials check karein
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Cookie set karein jo 24 hours tak valid rahegi
    const cookieStore = await cookies();
    cookieStore.set("admin_token", "authenticated_success", {
      httpOnly: true, // Security ke liye zaroori
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false, message: "Invalid Credentials" },
    { status: 401 },
  );
}
