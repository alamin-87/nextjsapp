import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cookies } from "next/headers";

export async function auth() {
  return await getServerSession({ cookies }, authOptions);
}
