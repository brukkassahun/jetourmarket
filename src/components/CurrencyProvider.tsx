"use client";

/**
 * CurrencyProvider
 *
 * Client-side currency context. Stores the visitor's preferred display
 * currency in localStorage and exposes a `useCurrency()` hook so any
 * component can format CNY list prices into the active currency.
 *
 * Conversion chain mirrors @/lib/site `formatPrice`:
 *   CNY  ->  USD (base, / exchangeRate)  ->  selected currency (* rate)
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { currencies, formatPrice, type CurrencyCode } from "@/lib/site";

interface CurrencyContextValue {
  /** Active currency code, e.g. "USD". */
  code: CurrencyCode;
  /** Symbol for the active currency, e.g. "$". */
  symbol: string;
  /** Switch the active currency and persist it to localStorage. */
  setCode: (code: CurrencyCode) => void;
  /** Format a CNY price into the active currency, e.g. "$12,500". */
  format: (cny: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const STORAGE_KEY = "jetour-currency";

function isValidCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && currencies.some((c) => c.code === value);
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  // Default to USD. localStorage is read in an effect to avoid SSR mismatch.
  const [code, setCodeState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isValidCode(stored)) {
        setCodeState(stored);
      }
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, []);

  const setCode = useCallback((next: CurrencyCode) => {
    setCodeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore write failures (private mode, etc.) */
    }
  }, []);

  const symbol = useMemo(
    () => currencies.find((c) => c.code === code)?.symbol ?? "$",
    [code],
  );

  const format = useCallback(
    (cny: number) => formatPrice(cny, code),
    [code],
  );

  const value = useMemo<CurrencyContextValue>(
    () => ({ code, symbol, setCode, format }),
    [code, symbol, setCode, format],
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

/**
 * Access the active currency. Must be rendered inside <CurrencyProvider>.
 */
export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within a <CurrencyProvider>");
  }
  return ctx;
}
