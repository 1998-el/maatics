"use client";

import Navbar from "@/components/Navbar";
import UtilityBar from "@/components/UtilityBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <UtilityBar />
      <div className="border-t border-slate-100/80">
        <Navbar />
      </div>
    </header>
  );
}
