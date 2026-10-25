"use client";

/**
 * CarGallery
 *
 * Client-side image gallery for the car detail page. Shows a main image with
 * a clickable thumbnail strip that swaps the active image. Receives the
 * normalized image list as props from the server page.
 */
import { useState } from "react";

interface CarGalleryProps {
  images: string[];
  alt: string;
}

export default function CarGallery({ images, alt }: CarGalleryProps) {
  const [active, setActive] = useState(0);
  const hasImages = images.length > 0;
  const mainSrc = images[active] ?? images[0];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-asphalt-border bg-asphalt-light">
        {hasImages ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mainSrc}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-sans text-xs uppercase tracking-[0.16em] text-steel-muted">
            No Image Available
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {hasImages && images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.slice(0, 10).map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={i === active}
              className={`relative aspect-square overflow-hidden rounded-lg border transition-colors ${
                i === active
                  ? "border-electric ring-1 ring-electric"
                  : "border-asphalt-border hover:border-white/30"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
