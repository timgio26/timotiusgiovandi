"use client";
import { useEffect, useState } from "react";

export function ScrollHorizontoalIndocator() {
  const [scrollPerc, setScrollPerc] = useState<number>();

  function handlescroll() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const currentPosition = window.scrollY;
    const scrollPercentage =
      (currentPosition / (fullHeight - windowHeight)) * 100;
    setScrollPerc(Math.round(scrollPercentage));
  }

  useEffect(() => {
    // console.log(scrollPerc);
    document.addEventListener("scroll", handlescroll);
    return () => {
      document.removeEventListener("scroll", handlescroll);
    };
  }, [scrollPerc]);
  return (
    <div className="bg-amber-200 h-2 fixed top-0 w-full z-10" hidden={scrollPerc?scrollPerc<10:true}>
      <div
        className="bg-amber-500 h-2 transition-all"
        style={{ width: `${scrollPerc||0}%` }}
      ></div>
    </div>
  );
}
