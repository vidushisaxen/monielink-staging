import "./globals.css";
import LenisSmoothScroll from "../components/LenisSmoothScroll";
import LayoutTransition from "@/components/LayoutTransition";
import { defaultMetadata } from "@/lib/seo.config";


export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <>
      <LenisSmoothScroll />
      <html lang="en">
        <body>
          <LayoutTransition>
          {children}
          </LayoutTransition>
        </body>
      </html>
    </>
  );
}
