import "./globals.css";
import LenisSmoothScroll from "../components/LenisSmoothScroll";
import LayoutTransition from "@/components/LayoutTransition";
import { defaultMetadata } from "@/lib/seo.config";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SoundProvider } from "@/fancy/SFX/SoundProvider";

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <>
      <LenisSmoothScroll />
      <html lang="en">
        <GoogleTagManager gtmId="GTM-T53Z2STS" />
        <body>
          <SoundProvider>
            <LayoutTransition>
              {children}
            </LayoutTransition>
          </SoundProvider>
        </body>
        <GoogleAnalytics gaId="G-1BGD0MT8D6" />
      </html>
    </>
  );
}
