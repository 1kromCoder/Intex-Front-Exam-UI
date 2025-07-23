import { useTranslations } from "next-intl";
import React from "react";

const Sotuv = () => {
  const t = useTranslations("HeroContent")
  return (
    <div className="flex gap-[98px] flex-col">
      <div className="bg-[var(--clr-bg)] text-center px-[458px] py-[23px] mt-[-20px]">
        <h1 className="text-white text-[50px] font-bold ">{t("title")}</h1>
      </div>
      <div className="flex gap-[44px] bg-[] px-[166px]">
        <div className="w-[355px] h-[150px] bg-[var(--clr-bg)] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white">
          <div className="flex gap-[19px]">
            <span className="text-[65px] font-bold">1</span>
            <div className="flex flex-col mt-[15px]">
              <span className="text-[24px] font-bold">
              {t("cardTitle1")}
              </span>
              <span className="text-[14px] font-normal">
              {t("cardDesc1")}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[355px] h-[150px] bg-[var(--clr-bg)] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white">
          <div className="flex gap-[19px]">
            <span className="text-[65px] font-bold">2</span>
            <div className="flex flex-col mt-[15px]">
              <span className="text-[24px] font-bold ">
              {t("cardTitle2")}
              </span>
              <span className="text-[14px] font-normal">
              {t("cardDesc2")}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[355px] h-[150px] bg-[var(--clr-bg)] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white">
          <div className="flex gap-[19px]">
            <span className="text-[65px] font-bold">3</span>
            <div className="flex flex-col mt-[15px] gap-[35px]">
              <span className="text-[24px] font-bold">{t("cardTitle3")}</span>
              <span className="text-[14px] font-normal">
                {t("cardDesc3")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sotuv;
