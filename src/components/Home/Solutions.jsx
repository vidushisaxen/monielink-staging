"use client"
import React, { useRef } from "react";
import SolutionsCard from "./SolutionsCard";

export default function Solutions() {
const solutionsRef = useRef(null)
  return (
    <section
      className="w-screen h-fit flex flex-col bg-background relative z-[2] pb-[10%]"
      id="solutions"
    >
      <div className="w-screen h-[700vh] relative z-[1]" ref={solutionsRef}>
      <SolutionsCard solutionsRef={solutionsRef}/>
      </div>
   
    </section>
  );
}
