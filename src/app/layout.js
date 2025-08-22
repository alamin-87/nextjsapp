import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Providers from "./components/Providers";

export const metadata = {
  title: "NextAuth Products",
  description: "Landing, products, details, and protected add-product page",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <div className="nav">
              <div className="container">
                <Navbar />
              </div>
            </div>
            <main className="container" style={{ minHeight: "70vh" }}>
              {children}
            </main>
            <div className="footer">
              <div className="container">
                <Footer />
              </div>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
