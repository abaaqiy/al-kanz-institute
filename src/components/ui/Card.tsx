import clsx from "clsx";
import type { HTMLAttributes } from "react";

export default function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "bg-white border border-sage rounded-card p-6 md:p-8 shadow-soft transition-all duration-300",
        className
      )}
      {...rest}
    />
  );
}