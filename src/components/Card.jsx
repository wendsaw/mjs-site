import React from "react";
import { cn } from "../lib/utils.js";

export default function Card({ children, className }) {
  return (
    <div className={cn("rounded-2xl border border-slate-200/70 bg-white shadow-sm transition hover:shadow-md", className)}>
      {children}
    </div>
  );
}