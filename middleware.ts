import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // 1. Basic Auth header check karein
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];

    // Base64 decode karke username aur password nikalein
    const [user, pwd] = atob(authValue).split(":");

    // 2. Apne .env.local wale credentials se match karein
    if (
      user === process.env.ADMIN_USERNAME &&
      pwd === process.env.ADMIN_PASSWORD
    ) {
      // Agar match ho gaya, toh page open hone dein
      return NextResponse.next();
    }
  }

  // 3. Agar credentials galat hain ya nahi daale gaye, toh Login Popup dikhayen
  return new NextResponse("Unauthorized Access", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Admin Dashboard"',
    },
  });
}

// 4. Yeh define karta hai ki middleware sirf kis route par chalega
export const config = {
  matcher: ["/admin/:path*"], // /admin aur uske andar ke saare routes protect ho jayenge
};
