import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModalProvider from "@/components/QuoteModalProvider";

export const metadata: Metadata = {
  title: "Matiq — Construisons l'entreprise de demain",
  description: "Matiq accompagne les organisations qui veulent transformer leurs idées en résultats durables.",
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
