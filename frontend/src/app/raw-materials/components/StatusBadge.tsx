type Variant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

interface StatusBadgeProps {
  text: string;
  variant: Variant;
}

const styles: Record<Variant, string> = {
  success:
    "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",

  warning:
    "bg-amber-500/15 text-amber-400 border border-amber-500/30",

  danger:
    "bg-red-500/15 text-red-400 border border-red-500/30",

  info:
    "bg-sky-500/15 text-sky-400 border border-sky-500/30",

  neutral:
    "bg-zinc-700/40 text-zinc-300 border border-zinc-600",
};

export default function StatusBadge({
  text,
  variant,
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[variant]}`}
    >
      {text}
    </span>
  );
}