import { rawMaterials } from "../data";

function coaBadge(status: string) {
  switch (status) {
    case "APPROVED":
      return (
        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
          Approved
        </span>
      );

    case "PENDING":
      return (
        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">
          Pending
        </span>
      );

    default:
      return (
        <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
          Rejected
        </span>
      );
  }
}

function analysisBadge(status: string) {
  switch (status) {
    case "COMPLETED":
      return (
        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
          Completed
        </span>
      );

    case "IN_PROGRESS":
      return (
        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
          In Progress
        </span>
      );

    default:
      return (
        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">
          Waiting
        </span>
      );
  }
}

function stockColor(remaining: number) {
  if (remaining <= 20)
    return "text-red-400 font-bold";

  if (remaining <= 50)
    return "text-yellow-400 font-bold";

  return "text-green-400 font-bold";
}

export default function MaterialsTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <table className="w-full">
        <thead className="bg-zinc-800">
          <tr>
            <th className="px-6 py-4 text-left">Lot</th>
            <th className="px-6 py-4 text-left">Material</th>
            <th className="px-6 py-4 text-left">Supplier</th>
            <th className="px-6 py-4 text-left">Warehouse</th>
            <th className="px-6 py-4 text-left">Remaining</th>
            <th className="px-6 py-4 text-left">COA</th>
            <th className="px-6 py-4 text-left">Analysis</th>
          </tr>
        </thead>

        <tbody>
          {rawMaterials.map((material) => (
            <tr
              key={material.id}
              className="border-t border-zinc-800 transition hover:bg-zinc-800/60 cursor-pointer"
            >
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
                {coaBadge(material.coaStatus)}
              </td>

              <td className="px-6 py-4">
                {analysisBadge(material.analysisStatus)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}