interface SearchBarProps {
    placeholder?: string;
  }
  
  export default function SearchBar({
    placeholder = "Search raw materials...",
  }: SearchBarProps) {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-500"
        />
      </div>
    );
  }