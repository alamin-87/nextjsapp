"use client";

import { useEffect, useState } from "react";

export default function ProductHighlights() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatures() {
      try {
        const res = await fetch("/api/features");
        if (!res.ok) throw new Error("Failed to fetch features");
        const data = await res.json();
        setFeatures(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatures();
  }, []);

  if (loading) {
    return <p className="text-center py-6">Loading features...</p>;
  }

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Highlights</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
