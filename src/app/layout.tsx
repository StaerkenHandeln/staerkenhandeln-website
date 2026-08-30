import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "StärkenHandeln e.V.",
  description:
    "Institut zur Förderung und Stärkung von individuellem Wachstum. Raum für Menschen, Raum für Ideen, Raum zum Wirken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased min-h-screen bg-[var(--color-cream)] text-stone-900">
        <div className="md:flex">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen min-w-0">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
