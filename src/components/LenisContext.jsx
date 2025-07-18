// context/LenisContext.js
"use client";
import { createContext, useRef } from "react";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";

export const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
      <LenisSmoothScroll ref={lenisRef} />
    </LenisContext.Provider>
  );
}
