export default function ProductionOverview() {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
  
        <div className="flex items-center justify-between">
  
          <div>
            <h2 className="text-xl font-bold text-white">
              Production Overview
            </h2>
  
            <p className="mt-1 text-sm text-zinc-400">
              Weekly production performance
            </p>
          </div>
  
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
            +12%
          </span>
  
        </div>
  
        <div className="mt-8 flex h-64 items-end justify-between gap-3">
  
          <div className="h-20 w-full rounded-t-lg bg-blue-500"></div>
          <div className="h-36 w-full rounded-t-lg bg-blue-500"></div>
          <div className="h-28 w-full rounded-t-lg bg-blue-500"></div>
          <div className="h-44 w-full rounded-t-lg bg-blue-500"></div>
          <div className="h-32 w-full rounded-t-lg bg-blue-500"></div>
          <div className="h-56 w-full rounded-t-lg bg-blue-500"></div>
          <div className="h-48 w-full rounded-t-lg bg-blue-500"></div>
  
        </div>
  
      </div>
    );
  }