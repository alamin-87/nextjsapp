import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[40px]">
          {product.description}
        </p>
        <p className="text-gray-900 dark:text-white font-bold text-lg">
          ${product.price}
        </p>
      </div>
      <Link
        href={`/products/${product._id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-center"
      >
        Details
      </Link>
    </div>
  );
}
