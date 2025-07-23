import { ClockIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("footer")
  return (
    <div className={`bg-[#009398] w-full h-[300px] flex justify-evenly gap-[125px]`}>
      <div className="flex flex-col items-center gap-[20px] w-[331px] mt-[15px]">
        <span className="text-[#FFFFFF] text-center text-[25px] font-bold">
          {t('title')}
        </span>
        <input
          className="bg-white py-[10px] px-[19px] w-[290px] border-none rounded-[10px]"
          type="text"
          placeholder={t('inputText1')}
        />
        <input
          className="bg-white py-[10px] px-[19px] w-[290px] border-none rounded-[10px]"
          type="text"
          placeholder={t('inputText2')}
        />
        <button className="w-[239px] h-[37px] bg-[#FFE600] hover:bg-gray-500 transition-colors px-[13px] rounded-[10px] shadow-2xl font-bold text-[15px]">
          {t('button')}
        </button>
      </div>
      <div className="mt-[15px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[13px]">
          <ClockIcon />
          <span className="text-[20px] text-white font-bold">{t('workTime')}</span>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-[20px] text-white font-bold">
            Ish kunlari: 10:00 - 22:00
          </span>
          <span className="text-[20px] text-white font-bold">
            {t('afterWorkTime')}
          </span>
          <ul className="flex items-center gap-[15px] pt-[10px]">
            <li>
              <Link href={"/#"}>
                <img src={"/Teleg.png"}></img>
              </Link>
            </li>
            <li>
              <Link href={"/#"}>
                <img src={"/Insta.png"}></img>
              </Link>
            </li>
            <li>
              <Link href={"/#"}>
                <img src={"/RU.png"}></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[15px] flex flex-col gap-[55px]">
        <div className="w-[201px] h-[130px]">
          <span className="text-[20px] text-white font-bold">
            Intex-market.uz +998(99)911-02-04 Pahlavon Mahmud ko’chasi,
            Yashnobod tumani, Toshkent.
          </span>
        </div>
        <span className="w-[242px] h-[34px] text-[15px] text-white font-bold">Разработано в Support Solutions Все права защищены.</span>
      </div>
    </div>
  );
};

export default Footer;
