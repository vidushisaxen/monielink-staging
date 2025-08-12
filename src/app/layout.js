import "./globals.css";
import LenisSmoothScroll from "../components/LenisSmoothScroll";
import LayoutTransition from "@/components/LayoutTransition";

export const metadata = {
  title: "MonieLink: Fast & Secure Payments",
  description: "Discover MonieLink's secure payment solutions. Send & receive money easily. Join now for fast, reliable transactions.",
};

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
