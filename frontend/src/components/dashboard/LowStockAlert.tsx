export default function LowStockAlert() {
    return (
      <div className="rounded-2xl border border-red-900 bg-red-950/30 p-6">
  
        <h2 className="text-xl font-bold text-white">
          Low Stock Alerts
        </h2>
  
        <p className="mt-2 text-sm text-zinc-400">
          Raw materials that require attention.
        </p>
  
        <div className="mt-6 space-y-4">
  
          <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-4">
            <span className="text-white">
              Raw Propolis
            </span>
  
            <span className="font-semibold text-red-400">
              18 kg
            </span>
          </div>
  
          <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-4">
            <span className="text-white">
              Ethanol 96%
            </span>
  
            <span className="font-semibold text-yellow-400">
              42 L
            </span>
          </div>
  
          <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-4">
            <span className="text-white">
              Royal Jelly
            </span>
  
            <span className="font-semibold text-red-400">
              6 kg
            </span>
          </div>
  
        </div>
  
      </div>
    );
  }