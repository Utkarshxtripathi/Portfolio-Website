"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface DataLineProps {
  className?: string;
  peaks?: number[];
}

export function DataLine({ className = "", peaks = [30, 55, 40, 75, 50, 85, 45, 65, 35, 60] }: DataLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const width = 300;
  const height = 40;
  const points = peaks.map((p, i) => ({
    x: (i / (peaks.length - 1)) * width,
    y: height - (p / 100) * height,
  }));

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const smoothedD = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      const cx = (prev.x + p.x) / 2;
      return `S ${cx} ${prev.y}, ${p.x} ${p.y}`;
    })
    .join(" ");

  useEffect(() => {
    if (!isInView || !pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `${length}`;
    pathRef.current.style.strokeDashoffset = `${length}`;

    const animate = () => {
      if (!pathRef.current) return;
      pathRef.current.style.transition = "stroke-dashoffset 1.2s ease-in-out";
      pathRef.current.style.strokeDashoffset = "0";
    };

    const timer = setTimeout(animate, 100);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <div ref={containerRef} className={className}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto opacity-60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d={smoothedD}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
