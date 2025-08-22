import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const auth = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  return session;
};
