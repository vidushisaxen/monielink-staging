import "./globals.css";
import LenisSmoothScroll from "../components/LenisSmoothScroll";
import LayoutTransition from "@/components/LayoutTransition";
import { defaultMetadata } from "@/lib/seo.config";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GoogleTagManager gtmId="GTM-T53Z2STS" />

        <LenisSmoothScroll />
        <LayoutTransition>{children}</LayoutTransition>

        <GoogleAnalytics gaId="G-1BGD0MT8D6" />
      </body>
    </html>
  );
}
