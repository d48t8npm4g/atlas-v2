export default function AIWidget() {
    return (
      <div className="rounded-2xl border border-blue-900 bg-blue-950/20 p-6">
  
        <div className="flex items-center justify-between">
  
          <div>
  
            <h2 className="text-xl font-bold text-white">
              Atlas AI
            </h2>
  
            <p className="mt-2 text-sm text-zinc-400">
              Factory assistant is online.
            </p>
  
          </div>
  
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl">
            🤖
          </div>
  
        </div>
  
        <div className="mt-8 rounded-xl bg-zinc-900 p-5">
  
          <p className="text-zinc-300">
            Good morning Efe.
          </p>
  
          <p className="mt-3 text-zinc-400">
            • 3 raw materials are below minimum stock.
          </p>
  
          <p className="mt-2 text-zinc-400">
            • 1 production batch is waiting for approval.
          </p>
  
          <p className="mt-2 text-zinc-400">
            • COA analysis for PR-2026-018 has been completed.
          </p>
  
        </div>
  
        <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500">
          Open AI Assistant
        </button>
  
      </div>
    );
  }