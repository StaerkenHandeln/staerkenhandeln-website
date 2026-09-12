import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

// Large preview image used for link-share previews (WhatsApp, Facebook,
// LinkedIn, iMessage, etc.) — the site's existing hero graphic.
const previewImage =
  "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/85c94da7f_hero_ref.png";

const siteUrl = "https://staerkenhandeln.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "StärkenHandeln",
  description:
    "Institut zur Förderung und Stärkung von individuellem Wachstum. Raum für Menschen, Raum für Ideen, Raum zum Wirken.",
  openGraph: {
    title: "StärkenHandeln",
    description:
      "Institut zur Förderung und Stärkung von individuellem Wachstum. Raum für Menschen, Raum für Ideen, Raum zum Wirken.",
    url: siteUrl,
    siteName: "StärkenHandeln",
    images: [
      {
        url: previewImage,
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StärkenHandeln",
    description:
      "Institut zur Förderung und Stärkung von individuellem Wachstum. Raum für Menschen, Raum für Ideen, Raum zum Wirken.",
    images: [previewImage],
  },
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
