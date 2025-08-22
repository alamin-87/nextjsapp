import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Build faster with Next.js 15
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Public landing page with Navbar, Hero, Product Highlights, and Footer.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Browse Products
          </Link>
          <Link
            href="/login"
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
