"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { target: 40, suffix: "+", label: "Entreprises équipées" },
  { target: 100, suffix: "+", label: "Sites et logiciels déployés" },
  { target: 99.4, decimals: 1, suffix: "%", label: "Disponibilité moyenne des services" },
  { target: 2, suffix: " h", label: "Délai moyen de réponse support" },
];

const DURATION = 1800;

function formatValue(value: number, decimals: number) {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedStat({ target, decimals = 0, prefix = "", suffix = "", label }: Stat) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / DURATION, 1);
      const eased = easeOutExpo(progress);
      setValue(target * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <div ref={ref} className="px-4 py-4 text-center sm:px-6">
      <span className="block text-3xl font-extrabold tabular-nums text-white sm:text-4xl">
        {prefix}
        {formatValue(value, decimals)}
        <span className="text-[#8fb3e8]">{suffix}</span>
      </span>
      <span className="mt-2 block text-xs text-[#c9d9f2] sm:text-sm">{label}</span>
    </div>
  );
}

export default function StatsBanner() {
  return (
    <section className="bg-[#1E499B] py-12 sm:py-14" aria-label="Chiffres clés Maatics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-y divide-white/20 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
