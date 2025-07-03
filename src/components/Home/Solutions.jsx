"use client"
import React, { useRef } from "react";
import SolutionsCard from "./SolutionsCard";
import MobileSolutions from "./MobileSolutions";

export default function Solutions() {
  
  const solutionsRef = useRef(null)
  return (
    <section
      className="w-screen h-fit flex flex-col bg-background relative z-[2] pb-[10%]"
      id="solutions"
    >
      <div className="w-screen h-[700vh] relative z-[1] max-md:hidden" ref={solutionsRef}>
        <SolutionsCard solutionsRef={solutionsRef} />
      </div>
      <div className="max-md:block hidden">
        <MobileSolutions/>
        </div>
    </section>
  );
}
