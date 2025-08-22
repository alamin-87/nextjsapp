import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(req, { params }) {
  const { id } = params;
  await dbConnect();
  const product = await Product.findById(id);
  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(product), { status: 200 });
}
