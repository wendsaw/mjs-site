import React from "react";
import { cn } from "../lib/utils.js";

export default function Button({ children, href, onClick, variant = "primary", className, target, rel }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";
  const styles =
    variant === "primary"
      ? "bg-white text-slate-900 hover:bg-white/90 focus:ring-white/30"
      : variant === "ghost"
      ? "bg-white/0 text-white hover:bg-white/10 focus:ring-white/20"
      : "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-400/30";
  const cls = cn(base, styles, className);

  if (href) return <a className={cls} href={href} onClick={onClick} target={target} rel={rel}>{children}</a>;
  return <button className={cls} onClick={onClick} type="button">{children}</button>;
}