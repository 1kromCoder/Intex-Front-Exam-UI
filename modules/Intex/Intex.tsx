import { CheckIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import React from "react";
const Intex = () => {
  const t = useTranslations("InTashkent")
  return (
    <div className="mb-[80px]">
      <div className="bg-[#E2EFEF] text-center px-[235px] py-[20px]">
        <h1 className="text-[#009398] text-[50px] font-bold ">
          {t('title')}
        </h1>
      </div>
      <div className="flex gap-[80px] px-[160px] ">
        <div className="py-[80px]">
          <p className="text-black w-[503px] h-[262px] text-[25px] font-normal">
            {t('desc')}
          </p>
        </div>
        <div className="pt-[80px] flex flex-col gap-[50px]">
          <p className="text-black w-[500px] h-[85px] text-[25px] font-normal">
            {t('desc2')}
          </p>
          <div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">{t('text')}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
              {t('text2')}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
              {t('text3')}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
              {t('text4')}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
                {t('text5')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intex;
