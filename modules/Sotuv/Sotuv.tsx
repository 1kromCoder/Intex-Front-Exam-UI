"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";

const Sotuv = () => {
  const t = useTranslations("HeroContent");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {/* Title */}
      <div className="bg-[var(--clr-bg)] !w-full text-center px-4 py-6 md:px-[200px] mt-[-20px] font-bold">
        <h1 className="text-white text-[28px] md:text-[40px] lg:text-[50px]">
          {t("title")}
        </h1>
      </div>

      {/* Cards */}
      <div
        ref={sectionRef}
        className="flex flex-col mx-auto md:flex-row gap-6 md:gap-[44px] px-8"
      >
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`w-full md:w-[355px] h-[150px] md:h-[150px] bg-[var(--clr-bg)] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white py-4 transform transition-all duration-500 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : num === 1
                ? "-translate-x-[100%] opacity-0"
                : "translate-x-[100%] opacity-0"
            }`}
            style={{ transitionDelay: `${num * 100}ms` }} // Staggered animation
          >
            <div className="flex gap-4 md:gap-[19px]">
              <span className="text-[40px] md:text-[65px] font-bold">{num}</span>
              <div className="flex flex-col justify-center">
                <span className="text-[18px] md:text-[24px] font-bold">
                  {t(`cardTitle${num}`)}
                </span>
                <span className="text-[12px] md:text-[14px] font-normal mt-1">
                  {t(`cardDesc${num}`)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sotuv;