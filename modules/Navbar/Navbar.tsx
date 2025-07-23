"use client"
import Link from "next/link";
import React from "react";
import LangConfig from "./LangConfig";
import { useTranslations } from "next-intl"
import SwitchMode from "@/components/SwitchMode";
import { SiteType } from "@/types/SiteType";
import { categoryType } from "@/types/CategoryType";
import { useParams } from "next/navigation";


const Navbar = ({site, category} : {category: categoryType[], site: SiteType}) => {
  const t = useTranslations("HeadersContent")
  const {locale} = useParams()
  return (
    <nav className="w-full h-[74px] bg-[var(--clr-bg)] px-[68px] pb-[80px] cursor-pointer fixed z-50">
      <ul className="flex gap-[50px] text-[#FFFFFF] items-center justify-between pt-[13px]">
        <li className="text-[25px] font-semibold ">INTEX-MARKET.UZ</li>
        <ul className="flex gap-[50px]">
          {category.map((item: categoryType) => (<li className="text-[22px] font-bold " key={item.id}><a href={`#${item.name_uz}`}>{locale == "uz" ? item.name_uz : item.name_ru}</a></li>))}
        </ul>
        <ul className="flex items-center gap-[15px] pt-[10px]">
          <li className="text-[20px] font-bold"><a href="#">{site.phone}</a></li>
          <li>
            <Link href={site.telegram} target="_blank">
              <img src={"/Teleg.png"}></img>
            </Link>
          </li>
          <li>
            <Link href={site.instagram} target="_blank">
              <img src={"/Insta.png"}></img>
            </Link>
          </li>
          <li>
            <LangConfig />
          </li>
          <div className="mt-[-10px]">
            <SwitchMode/>
          </div>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
