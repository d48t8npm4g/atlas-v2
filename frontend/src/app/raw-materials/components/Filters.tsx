"use client";

export default function Filters() {
  return (
    <section className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search by material or lot..."
          className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-amber-500"
        />

        <select className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white">
          <option>All Suppliers</option>
        </select>

        <select className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white">
          <option>All Warehouses</option>
        </select>

        <select className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white">
          <option>All Status</option>
        </select>
      </div>
    </section>
  );
}