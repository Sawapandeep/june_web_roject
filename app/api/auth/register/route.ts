// app/api/auth/register/route.ts
import { addUser, findUserByEmail } from "@/lib/users";
import { signToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const exists = findUserByEmail(email);
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  await addUser(email, password);
  const token = signToken(email);

  const response = NextResponse.json({ success: true });
  response.cookies.set("token", token, { httpOnly: true });
  return response;
}
