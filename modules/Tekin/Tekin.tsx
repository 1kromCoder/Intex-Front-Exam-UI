"use client";
import KonsultationCreate from "@/components/KonsultationCreate";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Tekin = () => {
  const [create, setCreate] = useState(false);
  const t = useTranslations("FreeShippingPart");

  return (
    <div>
      <div className="bg-[var(--clr-bg)] text-center px-4 md:px-8 lg:px-[200px] py-6 rounded-2xl">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-white text-[28px] md:text-[35px] lg:text-[50px] font-bold">
            {t("title")}
          </h1>
          <p className="text-white text-[14px] md:text-[18px] lg:text-[23px] font-normal">
            {t("desc")}
          </p>
          <button
            onClick={() => setCreate(true)}
            className="w-[220px] h-[40px] bg-[#FFE600] hover:bg-gray-500 transition-colors px-4 rounded-[10px] shadow-2xl font-bold text-[16px] md:text-[18px] lg:text-[20px]"
          >
            {t("button")}
          </button>
        </div>
      </div>

      {create && <KonsultationCreate setCreate={setCreate} />}
    </div>
  );
};

export default Tekin;
