import clsx from "clsx";

export default function Badge({
  tone = "sage",
  children,
}: {
  tone?: "sage" | "gold" | "green" | "amber";
  children: React.ReactNode;
}) {
  const tones = {
    sage: "bg-sage text-slate border-sage",
    gold: "bg-gold/10 text-[#a07d2e] border-gold/20",
    green: "bg-emerald-forest/10 text-emerald-forest border-emerald-forest/20",
    amber: "bg-gold/15 text-[#a07d2e] border-gold/30",
  };
  return (
    <span className={clsx("inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border", tones[tone])}>
      {children}
    </span>
  );
}