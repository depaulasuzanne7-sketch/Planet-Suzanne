import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Planet Suzanne Explorers",
    template: "%s | Planet Suzanne",
  },
  description: "Discover meaningful places, support local stories, and collect moments—not things.",
  keywords: ["Planet Suzanne", "DePaula Discoveries", "travel", "exploration", "hidden gems", "Explorer Passport"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
