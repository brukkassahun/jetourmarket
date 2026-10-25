import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cache } from "react";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { formatPrice, whatsappLink } from "@/lib/site";
import CarCard, { type Car } from "@/components/CarCard";
import CarGallery from "@/components/CarGallery";

export const revalidate = 60;

/**
 * Full car record including detail-only fields not present on the CarCard
 * interface. All extra fields are optional so the row stays Car-compatible.
 */
interface CarDetail extends Car {
  images?: string[] | string | null;
  fuel_type?: string | null;
  engine?: string | null;
  seats?: number | null;
  color?: string | null;
  features?: string[] | string | null;
  description?: string | null;
  featured?: boolean | null;
}

/** Normalize a Supabase images/features value into a string[]. */
function normalizeList(value: unknown, fallback?: string | null): string[] {
  if (Array.isArray(value)) {
    const arr = value.filter((v): v is string => typeof v === "string" && v.length > 0);
    if (arr.length > 0) return arr;
  }
  if (typeof value === "string" && value.length > 0) {
    // Could be a JSON-encoded array stored as text.
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        const arr = parsed.filter((v): v is string => typeof v === "string" && v.length > 0);
        if (arr.length > 0) return arr;
      }
    } catch {
      // Not JSON — treat as a single item.
      return [value];
    }
  }
  if (fallback) return [fallback];
  return [];
}

/**
 * Cached car fetcher. React `cache()` dedupes this within a single request
 * so generateMetadata and the page body share one Supabase round-trip.
 */
const getCarBySlug = cache(async (slug: string): Promise<CarDetail | null> => {
  try {
    const { data, error } = await supabaseAdmin
      .from("cars")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();
    if (error) return null;
    return (data as CarDetail) ?? null;
  } catch {
    return null;
  }
});

interface DetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const car = await getCarBySlug(params.slug);
  if (!car) {
    return { title: "Vehicle Not Found" };
  }
  const title = `${car.year} ${car.model} for Sale`;
  const description =
    typeof car.description === "string" && car.description.length > 0
      ? car.description.slice(0, 160)
      : `Buy the ${car.year} ${car.model} (${car.condition}) direct from China. Factory-direct pricing, global shipping.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: car.thumbnail ? [{ url: car.thumbnail }] : undefined,
    },
  };
}

export default async function CarDetailPage({ params }: DetailPageProps) {
  const car = await getCarBySlug(params.slug);
  if (!car) notFound();

  // Similar cars: same model, different listing, still available.
  let similar: Car[] = [];
  try {
    const { data } = await supabaseAdmin
      .from("cars")
      .select("*")
      .eq("model", car.model)
      .eq("status", "available")
      .neq("id", car.id)
      .limit(3);
    similar = (data ?? []) as Car[];
  } catch {
    /* ignore — similar section is optional */
  }

  const images = normalizeList(car.images, car.thumbnail);
  const features = normalizeList(car.features);
  const priceFormatted = formatPrice(car.price_cny);
  const title = `${car.year} ${car.model}`;

  const specs = [
    { label: "Year", value: String(car.year) },
    { label: "Condition", value: car.condition === "new" ? "New" : "Used" },
    {
      label: "Mileage",
      value:
        car.mileage && car.mileage > 0
          ? `${car.mileage.toLocaleString()} km`
          : "Brand New",
    },
    { label: "Transmission", value: car.transmission ?? "—" },
    { label: "Fuel Type", value: car.fuel_type ?? "—" },
    { label: "Engine", value: car.engine ?? "—" },
    { label: "Seats", value: car.seats ? String(car.seats) : "—" },
    { label: "Color", value: car.color ?? "—" },
  ];

  const inquireHref = whatsappLink(
    `Hi, I'm interested in the ${title} (${car.condition}) listed at ${priceFormatted}. Is it still available?`,
  );

  const statusBadgeClass =
    car.status === "available"
      ? "badge-available"
      : car.status === "sold"
        ? "badge-sold"
        : "badge-reserved";

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap items-center gap-2 font-sans text-xs text-steel-muted"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-silver-bright">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/cars" className="transition-colors hover:text-silver-bright">
              Cars
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-silver-bright">{car.model}</span>
          </nav>
        </div>
      </section>

      {/* Main: gallery + details */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: image gallery */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <CarGallery images={images} alt={title} />
          </div>

          {/* Right: car details */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`badge ${car.condition === "new" ? "badge-new" : "badge-used"}`}
              >
                {car.condition}
              </span>
              <span className={`badge ${statusBadgeClass}`}>{car.status}</span>
            </div>

            <h1 className="display-md mt-4 text-silver-bright">{title}</h1>

            <div className="mt-4 flex items-end gap-3">
              <span className="mb-1 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                Price
              </span>
              <span className="font-display text-3xl font-black text-electric">
                {priceFormatted}
              </span>
              <span className="mb-1 font-sans text-xs text-steel-muted">
                ex-works China
              </span>
            </div>

            {/* Key specs grid */}
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-asphalt-border bg-asphalt-card p-3"
                >
                  <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-sans text-sm font-semibold capitalize text-silver-bright">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Features */}
            {features.length > 0 && (
              <div className="mt-6">
                <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
                  Features
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {features.map((f, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-asphalt-border bg-asphalt-card px-3 py-1.5 font-sans text-xs font-medium text-silver-bright"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={inquireHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                Inquire on WhatsApp
              </a>
              <Link href="/contact" className="btn-ghost flex-1">
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Full description */}
        {typeof car.description === "string" && car.description.length > 0 && (
          <div className="mt-12 max-w-3xl">
            <h2 className="title text-silver-bright">Overview</h2>
            <p className="mt-4 whitespace-pre-line font-sans text-sm leading-relaxed text-silver">
              {car.description}
            </p>
          </div>
        )}

        {/* Similar cars */}
        {similar.length > 0 && (
          <div className="mt-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="title text-silver-bright">
                Similar {car.model} Listings
              </h2>
              <Link
                href={`/cars?model=${encodeURIComponent(car.model)}`}
                className="shrink-0 font-sans text-xs font-bold uppercase tracking-[0.14em] text-electric hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {similar.map((c) => (
                <CarCard key={c.slug} car={c} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
