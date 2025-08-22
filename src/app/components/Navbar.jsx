"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
        NextAuth Products
      </Link>

      {/* Navigation Links */}
      <div className="ml-auto flex items-center gap-4">
        <Link
          href="/products"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Products
        </Link>
        <Link
          href="/dashboard/add-product"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Add Product
        </Link>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Authentication Buttons */}
        {status === "loading" ? (
          <span className="text-gray-500 dark:text-gray-400">Loading...</span>
        ) : session ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={() => signIn(undefined, { callbackUrl: "/products" })}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
