import { getServerSession } from "next-auth/next";

export const auth = async (req, res) => {
  const session = await getServerSession(req, res);
  return session;
};
