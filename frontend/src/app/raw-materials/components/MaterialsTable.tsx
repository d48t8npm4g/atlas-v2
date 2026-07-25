import StatusBadge from "./StatusBadge";
import { rawMaterials } from "../data";

function coaVariant(status: string) {
  switch (status) {
    case "APPROVED":
      return "success";
    case "PENDING":
      return "warning";
    default:
      return "danger";
  }
}

function analysisVariant(status: string) {
  switch (status) {
    case "COMPLETED":
      return "success";
    case "IN_PROGRESS":
      return "info";
    default:
      return "warning";
  }
}

function stockColor(remaining: number) {
  if (remaining <= 20) return "text-red-400 font-bold";

  if (remaining <= 50) return "text-yellow-400 font-bold";

  return "text-green-400 font-bold";
}

export default function MaterialsTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Raw Materials Inventory
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Track incoming raw materials across all warehouses.
          </p>
        </div>

        <div className="rounded-xl bg-zinc-800 px-4 py-2 text-sm font-semibold text-amber-400">
          {rawMaterials.length} Materials
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-zinc-800/70">
            <tr>
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Lot</th>
              <th className="px-6 py-4 text-left">Material</th>
              <th className="px-6 py-4 text-left">Supplier</th>
              <th className="px-6 py-4 text-left">Warehouse</th>
              <th className="px-6 py-4 text-left">Remaining</th>
              <th className="px-6 py-4 text-left">COA</th>
              <th className="px-6 py-4 text-left">Analysis</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {rawMaterials.map((material, index) => (
              <tr
                key={material.id}
                className="border-t border-zinc-800 transition hover:bg-zinc-800/60"
              >
                <td className="px-6 py-4 text-zinc-500">
                  {index + 1}
                </td>

                <td className="px-6 py-4 font-mono">
                  {material.lotNo}
                </td>

                <td className="px-6 py-4 font-semibold">
                  {material.name}
                </td>

                <td className="px-6 py-4">
                  {material.supplier}
                </td>

                <td className="px-6 py-4">
                  {material.warehouse}
                </td>

                <td
                  className={`px-6 py-4 ${stockColor(
                    material.remaining
                  )}`}
                >
                  {material.remaining} {material.unit}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge
                    text={material.coaStatus}
                    variant={coaVariant(material.coaStatus)}
                  />
                </td>

                <td className="px-6 py-4">
                  <StatusBadge
                    text={material.analysisStatus.replace("_", " ")}
                    variant={analysisVariant(material.analysisStatus)}
                  />
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="rounded-lg border border-zinc-700 px-3 py-1 text-xs transition hover:border-sky-500 hover:text-sky-400">
                      View
                    </button>

                    <button className="rounded-lg border border-zinc-700 px-3 py-1 text-xs transition hover:border-amber-500 hover:text-amber-400">
                      Edit
                    </button>

                    <button className="rounded-lg border border-zinc-700 px-3 py-1 text-xs transition hover:border-red-500 hover:text-red-400">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}