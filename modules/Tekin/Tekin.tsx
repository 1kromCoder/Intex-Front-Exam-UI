"use client";
import KonsultationCreate from "@/components/KonsultationCreate";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";

const Tekin = () => {
  const [create, setCreate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("FreeShippingPart");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="bg-[var(--clr-bg)] text-center px-[200px] py-[23px]">
        <div className="flex flex-col items-center gap-[30px]">
          <h1 className="text-white text-[50px] font-bold">
            {t("title")}
          </h1>
          <p className="text-white text-[23px] font-normal">
            {t("desc")}
          </p>
          <button
            onClick={() => setCreate(true)}
            className="w-[250px] h-[40px] bg-[#FFE600] hover:bg-gray-500 transition-colors px-[13px] rounded-[10px] shadow-2xl font-bold text-[20px]"
          >
            {t("button")}
          </button>
        </div>
      </div>

      {create && (
        <div
          ref={blockRef}
          className={`fixed top-0 left-0 h-full w-full z-50 bg-black/50 backdrop-blur-sm flex justify-start items-center transition-all duration-500 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="bg-white w-[400px] max-w-full h-full shadow-2xl p-6 overflow-y-auto">
            <KonsultationCreate setCreate={setCreate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tekin;
