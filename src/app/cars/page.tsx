import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { carModels } from "@/lib/site";
import CarCard, { type Car } from "@/components/CarCard";
import CarFilters from "@/components/CarFilters";

interface CarsPageProps {
  searchParams?: { model?: string; condition?: string; sort?: string };
}

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const model = searchParams?.model;
  const condition = searchParams?.condition;
  const sort = searchParams?.sort;

  // Build the Supabase query with active filters.
  let cars: Car[] = [];
  try {
    let query = supabaseAdmin
      .from("cars")
      .select("*")
      .eq("status", "available");

    if (model) query = query.eq("model", model);
    if (condition === "new" || condition === "used") {
      query = query.eq("condition", condition);
    }

    switch (sort) {
      case "price-asc":
        query = query.order("price_cny", { ascending: true });
        break;
      case "price-desc":
        query = query.order("price_cny", { ascending: false });
        break;
      case "year-desc":
        query = query.order("year", { ascending: false });
        break;
      default:
        // Featured first, then newest.
        query = query
          .order("featured", { ascending: false })
          .order("created_at", { ascending: false });
    }

    query = query.limit(48);
    const { data, error } = await query;
    if (!error) cars = (data ?? []) as Car[];
  } catch {
    /* Supabase unavailable — render empty state */
  }

  const current = { model, condition, sort };
  const activeModel = carModels.find((m) => m.id === model);

  return (
    <>
      {/* Page header */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 font-sans text-xs text-steel-muted"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-silver-bright">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-silver-bright">Cars</span>
          </nav>
          <h1 className="display-md mt-4 text-silver-bright">
            {activeModel ? activeModel.name : "Browse Cars"}
          </h1>
          <p className="mt-2 font-sans text-sm text-silver">
            {cars.length > 0
              ? `${cars.length} vehicle${cars.length === 1 ? "" : "s"} available`
              : "Explore our Jetour inventory"}
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar filters */}
          <aside className="w-full shrink-0 lg:w-72">
            <div className="lg:sticky lg:top-20">
              <CarFilters current={current} />
            </div>
          </aside>

          {/* Car grid */}
          <div className="min-w-0 flex-1">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-steel-muted">
                {cars.length > 0
                  ? `${cars.length} result${cars.length === 1 ? "" : "s"}`
                  : "No results"}
              </p>
            </div>

            {cars.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {cars.map((car) => (
                  <CarCard key={car.slug} car={car} />
                ))}
              </div>
            ) : (
              <div className="card-dark flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-asphalt-border text-silver">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h2 className="title text-silver-bright">No vehicles found</h2>
                <p className="max-w-sm font-sans text-sm text-silver">
                  No cars match your current filters. Try adjusting the model,
                  condition, or sort to see more results.
                </p>
                <Link href="/cars" className="btn-ghost mt-2">
                  Clear Filters
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
