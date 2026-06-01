import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | ELCCO Group",
    default: "ELCCO Group | Servicios Industriales en México desde 1983",
  },
  description:
    "Más de 40 años ofreciendo soluciones industriales integrales: obra civil, fabricación estructural, instalaciones eléctricas y automatización para la industria automotriz en México.",
  metadataBase: new URL("https://elccogroup.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "ELCCO Group",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
