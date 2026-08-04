import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModalProvider from "@/components/QuoteModalProvider";

export const metadata: Metadata = {
  title: "Maatics — Développement, sécurité et énergie solaire intelligente",
  description:
    "Maatics conçoit vos sites web, applications mobiles et solutions SaaS, et installe vos systèmes de vidéosurveillance et panneaux solaires intelligents — un seul partenaire pour tous vos projets.",

  icons: {
    icon: [
      { url: "/icon_m-light.ico", media: "(prefers-color-scheme: light)" },
      { url: "/icon_m-dark.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <QuoteModalProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}