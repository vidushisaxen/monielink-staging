'use client'
import { useEffect, useRef } from "react";
import { useSound } from "./SoundProvider";

export function useHoverSound() {
  const { enabled } = useSound();
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound/hover.mp3");
  }, []);

  const playSoundHover = () => {
    if (!enabled) return; // ❌ stop if muted
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(err =>
          console.log("Audio playback failed:", err)
        );
      }
    } catch (err) {
      console.log("Error playing audio:", err);
    }
  };

  return { playSoundHover };
}

export function useTickSound() {
  const { enabled } = useSound();
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound/tick.mp3");
  }, []);

  const playSoundTick = () => {
    if (!enabled) return; // ❌ stop if muted
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(err =>
          console.log("Audio playback failed:", err)
        );
      }
    } catch (err) {
      console.log("Error playing audio:", err);
    }
  };

  return { playSoundTick };
}
