import dbConnect from "@/lib/mongodb";
import Feature from "@/models/Feature";

export async function GET() {
  await dbConnect();
  const features = await Feature.find({}).sort({ createdAt: -1 });
  return new Response(JSON.stringify(features), { status: 200 });
}

// Optional: Add POST if you want to create features from admin dashboard
export async function POST(req) {
  const { title, description, icon } = await req.json();
  if (!title || !description) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  await dbConnect();
  const created = await Feature.create({ title, description, icon });
  return new Response(JSON.stringify(created), { status: 201 });
}
