"use client";

/**
 * CarFilters
 *
 * Client-side filter controls for the car listing page. Receives the active
 * filters from the server (via props) and, on change, builds a new query
 * string and pushes it so the server page re-renders with fresh Supabase data.
 *
 * Props-based (no useSearchParams) so it needs no Suspense boundary.
 */
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { carModels } from "@/lib/site";

interface CarFiltersProps {
  current: { model?: string; condition?: string; sort?: string };
}

const sortOptions = [
  { value: "", label: "Featured" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "year-desc", label: "Year: Newest" },
];

const conditionOptions = [
  { value: "", label: "All" },
  { value: "new", label: "New" },
  { value: "used", label: "Used" },
];

export default function CarFilters({ current }: CarFiltersProps) {
  const router = useRouter();

  const update = useCallback(
    (key: "model" | "condition" | "sort", value: string) => {
      const merged = {
        model: current.model,
        condition: current.condition,
        sort: current.sort,
      };
      merged[key] = value;

      const params = new URLSearchParams();
      if (merged.model) params.set("model", merged.model);
      if (merged.condition) params.set("condition", merged.condition);
      if (merged.sort) params.set("sort", merged.sort);

      const qs = params.toString();
      router.push(qs ? `/cars?${qs}` : "/cars");
    },
    [current, router],
  );

  const hasActiveFilters = Boolean(current.model || current.condition || current.sort);

  return (
    <div className="card-dark space-y-6 p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => router.push("/cars")}
            className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-steel-muted transition-colors hover:text-electric"
          >
            Reset
          </button>
        )}
      </div>

      {/* Model dropdown */}
      <div>
        <label
          htmlFor="filter-model"
          className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-steel-muted"
        >
          Model
        </label>
        <select
          id="filter-model"
          className="input-dark"
          value={current.model ?? ""}
          onChange={(e) => update("model", e.target.value)}
        >
          <option value="">All Models</option>
          {carModels.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Condition toggle */}
      <div>
        <span className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-steel-muted">
          Condition
        </span>
        <div className="grid grid-cols-3 gap-2">
          {conditionOptions.map((opt) => {
            const active = (current.condition ?? "") === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => update("condition", opt.value)}
                aria-pressed={active}
                className={`rounded-lg border px-2 py-2 font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
                  active
                    ? "border-electric bg-electric/10 text-electric"
                    : "border-asphalt-border text-silver-bright hover:border-steel-muted"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort dropdown */}
      <div>
        <label
          htmlFor="filter-sort"
          className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-steel-muted"
        >
          Sort By
        </label>
        <select
          id="filter-sort"
          className="input-dark"
          value={current.sort ?? ""}
          onChange={(e) => update("sort", e.target.value)}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
