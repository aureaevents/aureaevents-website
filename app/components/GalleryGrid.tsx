import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  showFilter?: boolean;
}

export default function GalleryGrid({
  images,
  showFilter = false,
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length,
      );
    }
  };

  return (
    <>
      {/* Filter Tabs */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-body text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full btn-transition ${
                activeFilter === cat
                  ? "bg-cobalt-700 text-white shadow-md"
                  : "bg-cobalt-50 text-cobalt-700 hover:bg-cobalt-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => openLightbox(i)}
            className="img-overlay-container rounded-xl overflow-hidden aspect-4/3 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Hover overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-2 group-hover:translate-y-0">
              <p className="font-body text-sm font-semibold text-white">
                {img.alt}
              </p>
              <p className="font-body text-xs text-white/70">{img.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white btn-transition z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white btn-transition z-10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <img
            src={filteredImages[lightboxIndex].src}
            alt={filteredImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white btn-transition z-10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-body text-sm">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
