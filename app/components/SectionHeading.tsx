interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {label && (
        <span
          className={`font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3 block ${
            light ? "text-gold-400" : "text-gold-500"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-normal mb-4 ${
          light ? "text-white" : "text-cobalt-900"
        }`}
      >
        {title}
      </h2>
      <span
        className={align === "center" ? "gold-line-center" : "gold-line"}
      />
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg mt-5 max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-charcoal/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
