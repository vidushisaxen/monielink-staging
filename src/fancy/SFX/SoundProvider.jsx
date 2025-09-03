"use client";
import React, { createContext, useContext, useState } from "react";


const SoundContext = createContext({
  enabled: true,
  toggle: () => {},
});

export const SoundProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => setEnabled((prev) => !prev);

  return (
    <SoundContext.Provider value={{ enabled, toggle }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
