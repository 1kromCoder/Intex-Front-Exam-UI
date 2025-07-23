import Link from "next/link";
import React from "react";
import LangConfig from "./LangConfig";
import { useTranslations } from "next-intl"


const Navbar = () => {
  const t = useTranslations("HeadersContent")
  return (
    <nav className="w-full h-[74px] bg-[#009398] px-[68px] pb-[80px] cursor-pointer fixed z-50">
      <ul className="flex gap-[50px] text-[#FFFFFF] items-center justify-between pt-[13px]">
        <li className="text-[25px] font-semibold ">INTEX-MARKET.UZ</li>
        <ul className="flex gap-[50px]">
          <li className="text-[22px] font-bold "><a href={'#ramkali'}>{t("navItem1")}</a></li>
          <li className="text-[22px] font-bold "><a href={'#shish'}>{t("navItem2")}</a></li>
        </ul>
        <ul className="flex items-center gap-[15px] pt-[10px]">
          <li className="text-[20px] font-bold"><a href="#">(99) 911 02 04</a></li>
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
            <LangConfig />
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
