// lib/users.ts
import bcrypt from "bcryptjs";

interface User {
  email: string;
  passwordHash: string;
}

const users: User[] = [];

export const addUser = async (email: string, password: string) => {
  const passwordHash = await bcrypt.hash(password, 10);
  users.push({ email, passwordHash });
};

export const findUserByEmail = (email: string) => {
  return users.find(user => user.email === email);
};

export const validateUser = async (email: string, password: string) => {
  const user = findUserByEmail(email);
  if (!user) return false;
  return await bcrypt.compare(password, user.passwordHash);
};
