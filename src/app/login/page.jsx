"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Login
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">Choose a method</p>

      <div className="grid gap-4">
        {/* Google Login */}
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          onClick={() => signIn("google", { callbackUrl: "/products" })}
        >
          Continue with Google
        </button>

        <div className="flex items-center justify-center">
          <hr className="w-full border-gray-300 dark:border-gray-600" />
          <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">
            or
          </span>
          <hr className="w-full border-gray-300 dark:border-gray-600" />
        </div>

        {/* Credentials Login */}
        <CredentialLogin />
      </div>
    </div>
  );
}

function CredentialLogin() {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    await signIn("credentials", { email, password, callbackUrl: "/products" });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-200 mb-1 font-medium">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-200 mb-1 font-medium">
          Password
        </label>
        <input
          name="password"
          type="password"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
      >
        Sign in
      </button>
    </form>
  );
}
