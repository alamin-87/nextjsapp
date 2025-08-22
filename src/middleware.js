import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Protect all routes under /dashboard
  pages: {
    signIn: "/login", // redirect to login page
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
