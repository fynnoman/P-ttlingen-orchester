export default function Kicker({
  children,
  tone = "royal",
}: {
  children: React.ReactNode;
  tone?: "royal" | "white";
}) {
  const color = tone === "white" ? "text-white/70" : "text-royal";
  const bar = tone === "white" ? "bg-white/40" : "bg-royal/60";
  return (
    <p
      className={`inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-kicker font-medium ${color}`}
    >
      <span className={`h-px w-8 ${bar}`} aria-hidden />
      {children}
    </p>
  );
}
