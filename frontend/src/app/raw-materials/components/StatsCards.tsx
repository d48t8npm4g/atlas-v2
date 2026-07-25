import {
  Boxes,
  TriangleAlert,
  FlaskConical,
  Truck,
} from "lucide-react";

import { rawMaterials } from "../data";

export default function StatsCards() {
  const totalMaterials = rawMaterials.length;

  const lowStock = rawMaterials.filter(
    (m) => m.remaining <= 20
  ).length;

  const waitingAnalysis = rawMaterials.filter(
    (m) => m.analysisStatus !== "COMPLETED"
  ).length;

  const suppliers = new Set(
    rawMaterials.map((m) => m.supplier)
  ).size;

  const stats = [
    {
      title: "Total Materials",
      value: totalMaterials,
      subtitle: "Registered materials",
      icon: Boxes,
    },
    {
      title: "Low Stock",
      value: lowStock,
      subtitle: "Needs replenishment",
      icon: TriangleAlert,
    },
    {
      title: "Waiting Analysis",
      value: waitingAnalysis,
      subtitle: "Pending laboratory",
      icon: FlaskConical,
    },
    {
      title: "Suppliers",
      value: suppliers,
      subtitle: "Active suppliers",
      icon: Truck,
    },
  ];

  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-200 hover:border-amber-500 hover:-translate-y-1"
          >
            <div className="mb-6 flex items-center justify-between">
              <Icon className="h-6 w-6 text-amber-400" />

              <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                Live
              </span>
            </div>

            <h2 className="text-4xl font-bold">
              {card.value}
            </h2>

            <p className="mt-2 text-lg font-medium">
              {card.title}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              {card.subtitle}
            </p>
          </div>
        );
      })}
    </section>
  );
}