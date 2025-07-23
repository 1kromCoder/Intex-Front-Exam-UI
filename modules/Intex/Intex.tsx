import { CheckIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import React from "react";

const Intex = () => {
  const t = useTranslations("InTashkent");

  return (
    <div className="mb-20">
      {/* Title */}
      <div className="bg-[#E2EFEF] text-center py-6 px-4 md:px-8 lg:px-[235px]">
        <h1 className="text-[var(--clr-bg)] text-[28px] md:text-[40px] lg:text-[50px] font-bold">
          {t("title")}
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col px-4 lg:flex-row gap-10 mt-10">
        {/* Left paragraph */}
        <div className="py-6 lg:py-[80px] w-full lg:w-1/2">
          <p className="text-[var(--clr-text)] text-[16px] md:text-[20px] lg:text-[25px] font-normal leading-relaxed">
            {t("desc")}
          </p>
        </div>

        {/* Right section */}
        <div className="pt-6 lg:pt-[80px] w-full lg:w-1/2 flex flex-col gap-6">
          <p className="text-[var(--clr-text)] text-[16px] md:text-[20px] lg:text-[25px] font-normal leading-relaxed">
            {t("desc2")}
          </p>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-[var(--clr-text)] text-[16px] md:text-[20px] lg:text-[25px] font-normal">
                  {t(`text${num === 1 ? "" : num}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intex;
