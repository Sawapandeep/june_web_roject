// app/api/auth/login/route.ts
import { validateUser } from "@/lib/users";
import { signToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const isValid = await validateUser(email, password);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken(email);
  const response = NextResponse.json({ success: true });
  response.cookies.set("token", token, { httpOnly: true });
  return response;
}
