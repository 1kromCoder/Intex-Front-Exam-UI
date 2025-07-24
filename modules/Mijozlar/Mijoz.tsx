import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Mijoz = () => {
  const t = useTranslations("ForClientsPart");

  return (
    <div className="mt-16">
      {/* Title */}
      <div className="bg-[var(--clr-mijoz)] w-full text-center py-6 px-4 md:px-10 lg:px-[200px]">
        <h1 className="text-[var(--clr-mijozTxt)] text-[28px] md:text-[40px] lg:text-[50px] font-bold">
          {t("title")}
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between py-10">
        {/* Block 1 */}
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src="/child.png"
            alt="Bola rasmi"
            width={80}
            height={80}
            className="object-contain w-[80px] h-[80px] md:w-[108px] md:h-[105px]"
          />
          <div className="flex flex-col max-w-[240px]">
            <span className="text-[var(--clr-text)] text-[20px] md:text-[30px] lg:text-[40px] font-bold">
              {t("conTitle1")}
            </span>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] text-[var(--clr-text)]">
              {t("conDesc1")}
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src="/car.png"
            alt="Yuk mashina rasmi"
            width={90}
            height={90}
            className="object-contain w-[90px] h-[90px] md:w-[124px] md:h-[124px]"
          />
          <div className="flex flex-col max-w-[280px]">
            <span className="text-[var(--clr-text)] text-[20px] md:text-[30px] lg:text-[40px] font-bold">
              {t("conTitle2")}
            </span>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] text-[var(--clr-text)]">
              {t("conDesc2")}
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src="/check.png"
            alt="Check rasmi"
            width={90}
            height={90}
            className="object-contain w-[90px] h-[90px] md:w-[113px] md:h-[111px]"
          />
          <div className="flex flex-col max-w-[240px]">
            <span className="text-[var(--clr-text)] text-[20px] md:text-[30px] lg:text-[40px] font-bold">
              {t("conTitle3")}
            </span>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] text-[var(--clr-text)]">
              {t("conDesc3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mijoz;
