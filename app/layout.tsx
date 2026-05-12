import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cannacare | Patient Navigation for Medicinal Consultations in Australia",
  description:
    "Cannacare connects Australian adults with licensed health professionals for medicinal consultation pathways. Not medical advice.",
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisclaimerBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
