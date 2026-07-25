import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r border-zinc-800 bg-zinc-950 p-6">
      <div>
        <h1 className="text-3xl font-black text-white">
          ATLAS
        </h1>

        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-blue-400">
          Factory OS
        </p>
      </div>

      <nav className="mt-12 flex flex-col gap-2">
        <Link
          href="/dashboard"
          className="rounded-xl bg-blue-600 px-4 py-3 text-left text-white"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/raw-materials"
          className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900"
        >
          📦 Raw Materials
        </Link>

        <Link
          href="/production"
          className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900"
        >
          🏭 Production
        </Link>

        <Link
          href="/quality"
          className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900"
        >
          🧪 Quality
        </Link>

        <Link
          href="/warehouse"
          className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900"
        >
          📋 Warehouse
        </Link>

        <Link
          href="/ai"
          className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900"
        >
          🤖 AI Assistant
        </Link>
      </nav>
    </aside>
  );
}