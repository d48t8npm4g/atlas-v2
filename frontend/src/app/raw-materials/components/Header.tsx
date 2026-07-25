export default function Header() {
    return (
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            📦 Raw Materials
          </h1>
  
          <p className="mt-2 text-zinc-400">
            Atlas Factory OS - Raw Materials Module
          </p>
        </div>
  
        <button className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-black transition hover:bg-amber-400">
          + Add Material
        </button>
      </div>
    );
  }