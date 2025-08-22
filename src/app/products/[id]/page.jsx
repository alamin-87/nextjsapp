async function getProduct(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {product.name}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {product.description}
      </p>
      <p className="text-gray-900 dark:text-white font-semibold mb-4">
        Price: ${product.price}
      </p>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-xl"
        />
      )}
    </div>
  );
}
