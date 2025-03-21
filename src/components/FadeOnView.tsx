"use client";

import React, { useEffect, useRef, useState } from "react";

type FadeOnViewProps = {
  children: React.ReactNode;
};

export function FadeOnView({ children }: FadeOnViewProps) {
  const domRef = useRef<HTMLDivElement>(null); // Explicit type for TypeScript
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries)
        entries.forEach((entry) => {
        //   console.log(entry);
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visible when in view
            observer.unobserve(entry.target); // Unobserve after the first intersection
          }
        });
      },
      { threshold: 0.25 } // Trigger when 10% of the element is visible
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div
    className="flex flex-col"
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}
