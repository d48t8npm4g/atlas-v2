export default function Topbar() {
    return (
      <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">
  
        <div>
          <h2 className="text-2xl font-bold text-white">
            Dashboard
          </h2>
  
          <p className="text-sm text-zinc-400">
            Welcome back, Efe 👋
          </p>
        </div>
  
        <div className="flex items-center gap-4">
  
          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
          />
  
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            E
          </div>
  
        </div>
  
      </header>
    );
  }