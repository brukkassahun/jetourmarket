import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Jetour Market — New & Used Jetour Vehicles Direct From China",
    template: "%s · Jetour Market",
  },
  description:
    "Buy new and used Jetour vehicles direct from China. Factory-direct pricing, global shipping, OEM quality. T2, Dashing, X70, X90 and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex min-h-dvh flex-col bg-asphalt font-sans text-silver-bright antialiased`}>
        <CurrencyProvider>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <FloatingContact />
        </CurrencyProvider>
        <Analytics />
      </body>
    </html>
  );
}
