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
  
          <button className="rounded-xl bg-blue-600 px-4 py-3 text-left text-white">
            📊 Dashboard
          </button>
  
          <button className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900">
            📦 Raw Materials
          </button>
  
          <button className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900">
            🏭 Production
          </button>
  
          <button className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900">
            🧪 Quality
          </button>
  
          <button className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900">
            📋 Warehouse
          </button>
  
          <button className="rounded-xl px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900">
            🤖 AI Assistant
          </button>
  
        </nav>
  
      </aside>
    );
  }