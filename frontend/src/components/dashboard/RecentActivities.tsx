export default function RecentActivities() {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
  
        <h2 className="mb-6 text-xl font-bold text-white">
          Recent Activities
        </h2>
  
        <div className="space-y-4">
  
          <div className="rounded-xl bg-zinc-800 p-4">
            <p className="font-semibold text-white">
              Raw Material Added
            </p>
  
            <p className="mt-1 text-sm text-zinc-400">
              250 kg Raw Propolis added to warehouse.
            </p>
          </div>
  
          <div className="rounded-xl bg-zinc-800 p-4">
            <p className="font-semibold text-white">
              Production Started
            </p>
  
            <p className="mt-1 text-sm text-zinc-400">
              Batch PR-2026-018 started.
            </p>
          </div>
  
          <div className="rounded-xl bg-zinc-800 p-4">
            <p className="font-semibold text-white">
              Analysis Completed
            </p>
  
            <p className="mt-1 text-sm text-zinc-400">
              COA approved successfully.
            </p>
          </div>
  
        </div>
  
      </div>
    );
  }