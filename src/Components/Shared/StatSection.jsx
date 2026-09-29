"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Utensils, Wallet, CheckCircle2 } from "lucide-react";

const stats = [
  {
    value: 2500,
    suffix: "+",
    label: "Happy Members",
    icon: Users,
  },
  {
    value: 120,
    suffix: "+",
    label: "Active Messes",
    icon: Utensils,
  },
  {
    value: 50000,
    suffix: "+",
    label: "Meals Managed",
    icon: CheckCircle2,
  },
  {
    value: 1.2,
    suffix: "M+",
    label: "Expenses Tracked",
    icon: Wallet,
    decimals: 1,
  },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 lg:grid-cols-4 lg:divide-y-0">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <StatItem
              key={stat.label}
              {...stat}
              index={index}
              isVisible={isVisible}
            />
          );
        })}
      </div>
    </section>
  );
};

const StatItem = ({
  value,
  suffix,
  label,
  icon: Icon,
  decimals = 0,
  index,
  isVisible,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const duration = 1600;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = startValue + (value - startValue) * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Small stagger between counters
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, index * 120);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, value, index]);

  const formattedValue = count.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div className="group relative flex flex-col items-center px-5 py-9 text-center transition-colors duration-300 hover:bg-green-50/40 sm:px-8 lg:py-10">
      {/* Icon */}
      <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-800 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-green-100">
        <Icon size={20} />
      </div>

      {/* Number */}
      <div className="flex items-baseline justify-center">
        <span className="text-3xl font-bold tracking-[-0.04em] text-gray-950 sm:text-4xl">
          {formattedValue}
        </span>

        <span className="ml-1 text-xl font-bold text-green-700 sm:text-2xl">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-2 text-xs font-medium text-gray-500 sm:text-sm">
        {label}
      </p>
    </div>
  );
};

export default StatsSection;
