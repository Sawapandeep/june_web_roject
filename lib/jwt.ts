// lib/jwt.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = "super-secret-key"; // move this to env for production

export const signToken = (email: string) => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET) as { email: string };
  } catch {
    return null;
  }
};
