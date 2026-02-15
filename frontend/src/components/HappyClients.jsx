import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 35, label: "Years of Industry Experience" },
  { value: 20, label: "Branches across UAE" },
  { value: 5000, label: "Loyal Customers", suffix: "K+" },
  { value: 10, label: "Major Car Brands" },
  { value: 150, label: "Dedicated Employees" },
];

function CircleStat({ value, label, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  const size = 160;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let interval;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);

          interval = setInterval(() => {
            start += increment;

            if (start >= value) {
              start = value;
              clearInterval(interval);
            }

            setCount(Math.floor(start));
            setProgress((start / value) * 100);
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      
      {/* Circle Wrapper */}
      <div className="relative w-[160px] h-[160px] flex items-center justify-center">
        
        <svg width={size} height={size} className="rotate-[-90deg]">
          
          {/* Background Circle */}
          <circle
            stroke="#15803d"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />

          {/* Animated Circle */}
          <circle
            stroke="#ff5a00"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (progress / 100) * circumference
            }
            r={radius}
            cx={size / 2}
            cy={size / 2}
            className="transition-all duration-200"
          />
        </svg>

        {/* Centered Number */}
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-700">
          {value >= 1000 ? Math.floor(count / 1000) : count}
          {suffix}
        </div>

      </div>

      {/* Label */}
      <p className="mt-4 text-gray-700 text-center w-48">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className=" py-20">
      <div className="max-w-7xl font-medium mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
        {stats.map((item) => (
          <CircleStat
            key={item.label}
            value={item.value}
            label={item.label}
            suffix={item.suffix}
          />
        ))}
      </div>
    </div>
  );
}
