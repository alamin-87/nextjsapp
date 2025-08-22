import { auth } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await dbConnect();
  const products = await Product.find({}).sort({ createdAt: -1 });
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  const session = await auth();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { name, description, price, image } = await req.json();

  if (!name || !description || price === undefined) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  await dbConnect();
  const created = await Product.create({
    name,
    description,
    price: Number(price),
    image,
  });

  return new Response(JSON.stringify(created), { status: 201 });
}
