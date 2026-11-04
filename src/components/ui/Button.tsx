import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "gold";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

const styles: Record<Variant, string> = {
  primary: "bg-emerald-forest text-white hover:bg-emerald-deep shadow-sm hover:shadow-md border border-transparent",
  ghost: "border border-sage bg-white text-charcoal hover:border-emerald-forest hover:text-emerald-forest shadow-sm",
  gold: "bg-gold text-emerald-deep hover:bg-[#b08f4c] shadow-sm hover:shadow-md border border-transparent font-semibold",
};

export default function Button({ variant = "primary", className, ...rest }: Props) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-input text-sm font-medium transition-all duration-200 active:scale-[0.98]",
        styles[variant],
        className
      )}
      {...rest}
    />
  );
}