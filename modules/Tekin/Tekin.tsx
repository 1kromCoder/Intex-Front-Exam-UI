import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import React from "react";

const Tekin = () => {
  const t = useTranslations("FreeShippingPart")
  return (
    <div>
      <div className="bg-[#009398] text-center px-[200px] py-[23px]">
        <div className="flex flex-col items-center gap-[30px]">
          <h1 className="text-white text-[50px] font-bold ">
            {t("title")}
          </h1>
          <p className="text-white text-[23px] font-normal">
            {t("desc")}
          </p>
          <button className="w-[250px] h-[40px] bg-[#FFE600] hover:bg-gray-500 transition-colors px-[13px] rounded-[10px] shadow-2xl font-bold text-[20px]">
            {t("button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tekin;
