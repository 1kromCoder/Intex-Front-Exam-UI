"use client";
import { ClockIcon } from "@/assets/icons";
import { postRequest } from "@/service/getRequest";
import { SiteType } from "@/types/SiteType";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FormEvent } from "react";
import toast from "react-hot-toast";

const Footer = ({ site }: { site: SiteType }) => {
  const t = useTranslations("footer");
  const { locale } = useParams();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.username as HTMLInputElement).value;
    const phone = (form.phone as HTMLInputElement).value;
    const payload = { name, phone };

    try {
      await postRequest("/consultation", payload)
        .then(() => toast.success("Sizning konsultatsiyangiz qabul qilindi"))
        .catch((err) => toast.error(err.message));
    } catch (err) {
      toast.error("Xatolik yuz berdi");
    }
  };

  return (
    <div className="bg-[var(--clr-bg)] w-full px-4 py-8 md:py-10 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6">
      {/* Form section */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-4 w-full md:max-w-sm"
      >
        <span className="text-white text-[20px] md:text-[25px] font-bold text-center md:text-left">
          {t("title")}
        </span>
        <input
          name="username"
          className="bg-white py-2 px-4 w-full rounded-[10px]"
          type="text"
          placeholder={t("inputText1")}
        />
        <input
          name="phone"
          className="bg-white py-2 px-4 w-full rounded-[10px]"
          type="text"
          placeholder={t("inputText2")}
        />
        <button
          type="submit"
          className="w-full bg-[#FFE600] hover:bg-gray-500 transition-colors py-2 rounded-[10px] shadow-2xl font-bold text-[15px]"
        >
          {t("button")}
        </button>
      </form>

      {/* Work time & social section */}
      <div className="flex flex-col gap-4 w-full md:max-w-sm">
        <div className="flex items-center gap-3">
          <ClockIcon />
          <span className="text-[18px] md:text-[20px] text-white font-bold">
            {t("workTime")}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[18px] md:text-[20px] text-white font-bold">
            {locale === "uz" ? site.work_time_uz : site.work_time_ru}
          </span>
          <span className="text-[18px] md:text-[20px] text-white font-bold">
            {t("afterWorkTime")}
          </span>
          <ul className="flex gap-4 pt-2">
            <li>
              <Link href={site.telegram} target="_blank">
                <img src={"/Teleg.png"} alt="Telegram" />
              </Link>
            </li>
            <li>
              <Link href={site.instagram} target="_blank">
                <img src={"/Insta.png"} alt="Instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Address section */}
      <div className="flex flex-col gap-6 w-full md:max-w-sm">
        <div className="text-white text-[16px] md:text-[20px] font-bold">
          <p>Intex-market.uz</p>
          <p>{site.phone}</p>
          <p>{locale === "uz" ? site.address_uz : site.address_ru}</p>
        </div>
        <span className="text-[13px] md:text-[15px] text-white font-bold">
          Разработано в Support Solutions. Все права защищены.
        </span>
      </div>
    </div>
  );
};

export default Footer;
