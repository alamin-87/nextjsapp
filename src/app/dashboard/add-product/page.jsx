// app/dashboard/add-product/page.jsx
import { auth } from "@/lib/auth";
import AddProductForm from "./sections/AddProductForm";

export default async function AddProductPage() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700 dark:text-gray-200">
        <h2 className="text-xl font-semibold mb-4">Redirecting to login...</h2>
        <meta httpEquiv="refresh" content="0; url=/login" />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Add Product
      </h1>
      <AddProductForm />
    </div>
  );
}
