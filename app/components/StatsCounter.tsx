import { useState, useEffect, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  light?: boolean;
}

function AnimatedNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats, light = false }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <p
            className={`font-heading text-4xl md:text-5xl font-normal mb-2 ${
              light ? "text-white" : "text-cobalt-700"
            }`}
          >
            <AnimatedNumber target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
          </p>
          <p
            className={`font-body text-xs font-semibold uppercase tracking-[0.15em] ${
              light ? "text-white/60" : "text-charcoal/50"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
