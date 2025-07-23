import { useTranslations } from "next-intl";
import React from "react";

const Sotuv = () => {
  const t = useTranslations("HeroContent");
  return (
    <div className="flex flex-col gap-10">
      {/* Title */}
      <div className="bg-[var(--clr-bg)] !w-full text-center px-4 py-6 md:px-[200px] mt-[-20px] font-bold">
        <h1 className="text-white text-[28px] md:text-[40px] lg:text-[50px] ">
          {t("title")}
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col mx-auto md:flex-row gap-6 md:gap-[44px] px-8">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="w-full md:w-[355px] h-[150px] md:h-[150px] bg-[var(--clr-bg)] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white py-4"
          >
            <div className="flex gap-4  md:gap-[19px]">
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
