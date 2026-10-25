"use client";

/**
 * CarCard
 *
 * Listing card for a single vehicle. Uses the active currency from
 * CurrencyProvider together with formatPrice from @/lib/site to render
 * the price. Hover lifts the card and switches its border to electric.
 */
import Link from "next/link";
import { formatPrice } from "@/lib/site";
import { useCurrency } from "@/components/CurrencyProvider";

export interface Car {
  id: string | number;
  slug: string;
  model: string;
  condition: "new" | "used";
  year: number;
  /** Odometer reading in km. Omit/0 for new vehicles. */
  mileage?: number;
  /** List price in CNY. */
  price_cny: number;
  /** Image URL for the listing thumbnail. */
  thumbnail: string;
  status: "available" | "sold" | "reserved";
  /** Optional drivetrain info, e.g. "Automatic", "Manual". */
  transmission?: string;
}

const statusLabel: Record<Car["status"], string> = {
  available: "Available",
  sold: "Sold",
  reserved: "Reserved",
};

const statusBadge: Record<Car["status"], string> = {
  available: "badge-available",
  sold: "badge-sold",
  reserved: "badge-reserved",
};

function formatMileage(km?: number): string {
  if (!km || km <= 0) return "Brand New";
  return `${km.toLocaleString()} km`;
}

export default function CarCard({ car }: { car: Car }) {
  const { code } = useCurrency();

  return (
    <Link
      href={`/cars/${car.slug}`}
      className="card-dark group block hover:-translate-y-1 hover:border-electric"
      aria-label={`${car.year} ${car.model} — view details`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-asphalt-light">
        {car.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={car.thumbnail}
            alt={`${car.year} ${car.model}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-sans text-xs uppercase tracking-[0.16em] text-steel-muted">
            No Image
          </div>
        )}

        {/* Condition badge */}
        <div className="absolute left-3 top-3">
          <span className={`badge ${car.condition === "new" ? "badge-new" : "badge-used"}`}>
            {car.condition}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute right-3 top-3">
          <span className={`badge ${statusBadge[car.status]}`}>
            {statusLabel[car.status]}
          </span>
        </div>

        {/* Dim sold/reserved listings slightly */}
        {car.status !== "available" && (
          <div className="pointer-events-none absolute inset-0 bg-asphalt/40" aria-hidden="true" />
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold uppercase tracking-tight text-silver-bright">
            {car.model}
          </h3>
          <span className="shrink-0 font-sans text-sm font-medium text-silver">
            {car.year}
          </span>
        </div>

        {/* Key specs */}
        <dl className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs text-silver">
          <div className="flex items-center gap-1.5">
            <dt className="text-steel-muted">Mileage</dt>
            <dd className="font-medium text-silver-bright">
              {formatMileage(car.mileage)}
            </dd>
          </div>
          {car.transmission && (
            <div className="flex items-center gap-1.5">
              <dt className="text-steel-muted">Gearbox</dt>
              <dd className="font-medium text-silver-bright">{car.transmission}</dd>
            </div>
          )}
        </dl>

        {/* Price + CTA */}
        <div className="mt-4 flex items-end justify-between gap-2 border-t border-asphalt-border pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-steel-muted">
              Price
            </span>
            <span className="font-display text-xl font-black text-silver-bright">
              {formatPrice(car.price_cny, code)}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-electric transition-transform duration-300 group-hover:translate-x-0.5">
            View Details
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
