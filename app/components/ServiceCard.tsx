import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl p-8 px-6 shadow-sm hover:shadow-xl transition-all max-h-100 h-full duration-500 hover:-translate-y-2 border border-cobalt-50 ${className}`}
    >
      {/* Decorative gradient top border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cobalt-700 via-cobalt-500 to-gold-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-10 h-10 rounded-lg bg-cobalt-50 flex items-center justify-center text-cobalt-700 mb-6 group-hover:bg-cobalt-700 group-hover:text-white transition-all duration-500">
        {icon}
      </div>

      <h3 className="font-heading text-lg text-cobalt-900 mb-3">{title}</h3>

      <p className="font-body text-sm text-charcoal/60 leading-relaxed">
        {description}
      </p>

      {/* Hover arrow */}
      <div className="mt-5 flex items-center gap-2 text-cobalt-700 opacity-0 group-hover:opacity-100 -translate-x-2.5 group-hover:translate-x-0 transition-all duration-500">
        <span className="font-body text-xs font-semibold uppercase tracking-wider">
          Learn More
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
}
