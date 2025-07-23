"use client";
import Link from "next/link";
import React, { useState } from "react";
import LangConfig from "./LangConfig";
import { useTranslations } from "next-intl";
import SwitchMode from "@/components/SwitchMode";
import { SiteType } from "@/types/SiteType";
import { categoryType } from "@/types/CategoryType";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = ({
  site,
  category,
}: {
  category: categoryType[];
  site: SiteType;
}) => {
  const t = useTranslations("HeadersContent");
  const { locale } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[var(--clr-bg)] fixed z-50 px-4 md:px-[68px] h-[74px]">
      <ul className="hidden md:flex justify-between items-center h-full text-white">
        <li className="text-[25px] font-semibold">INTEX-MARKET.UZ</li>
        <ul className="flex gap-[50px]">
          {category.map((item: categoryType) => (
            <li className="text-[22px] font-bold" key={item.id}>
              <a href={`#${item.name_uz}`}>
                {locale == "uz" ? item.name_uz : item.name_ru}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-[15px]">
          <li className="text-[20px] font-bold">
            <a href={`tel:${site.phone}`}>{site.phone}</a>
          </li>
          <li>
            <Link href={site.telegram} target="_blank">
              <img src="/Teleg.png" alt="Telegram" />
            </Link>
          </li>
          <li>
            <Link href={site.instagram} target="_blank">
              <img src="/Insta.png" alt="Instagram" />
            </Link>
          </li>
          <li>
            <LangConfig />
          </li>
          <li className="mt-[-10px]">
            <SwitchMode />
          </li>
        </ul>
      </ul>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center h-full text-white">
        <span className="text-[22px] font-bold">INTEX-MARKET.UZ</span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-[var(--clr-bg)] z-40 p-6 flex flex-col gap-4 md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="self-end mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} className="text-white" />
          </button>

          {category.map((item: categoryType) => (
            <a
              key={item.id}
              href={`#${item.name_uz}`}
              className="py-2 px-4 bg-white text-[var(--clr-bg)] rounded-md font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {locale == "uz" ? item.name_uz : item.name_ru}
            </a>
          ))}

          <div className="flex flex-col gap-4 mt-[100%]">
            <a
              href={`tel:${site.phone}`}
              className="bg-green-500 text-white py-2 rounded-md text-center font-bold"
            >
              📞 {site.phone}
            </a>

            <Link
              href={site.telegram}
              target="_blank"
              className="bg-white text-[var(--clr-bg)] py-2 rounded-md text-center font-bold"
            >
              Telegram
            </Link>

            <Link
              href={site.instagram}
              target="_blank"
              className="bg-white text-[var(--clr-bg)] py-2 rounded-md text-center font-bold"
            >
              Instagram
            </Link>
            <div className="flex justify-center gap-4 mt-4">
              <LangConfig />
              <SwitchMode />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
