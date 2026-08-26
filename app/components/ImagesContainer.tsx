export default function ImageContainer({
  src,
  surfaceText,
}: {
  src: string;
  surfaceText: string;
}) {
  return (
    <div className="relative shrink-0 group overflow-hidden rounded-2xl shadow-xl border border-white/15 w-75 sm:w-95 md:w-115 lg:w-130 h-50 sm:h-65 md:h-77 lg:h-87">
      <img
        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
        src={src}
        alt={surfaceText}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-cobalt-900/80 via-cobalt-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
        <span className="font-heading text-white text-sm sm:text-base md:text-lg font-medium tracking-wide drop-shadow-md">
          {surfaceText}
        </span>
      </div>
    </div>
  );
}
