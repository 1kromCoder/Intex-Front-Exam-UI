"use client"
import { ClockIcon } from "@/assets/icons";
import { postRequest } from "@/service/getRequest";
import { SiteType } from "@/types/SiteType";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FormEvent } from "react";
import toast from "react-hot-toast";

const Footer = ({site}:{site: SiteType}) => {
  const t = useTranslations("footer")
  const {locale} = useParams()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const name = (form.username as HTMLInputElement).value
  const phone = (form.phone as HTMLInputElement).value
  const payload = { name, phone }
  
  try {
    const res = await postRequest('/consultation', payload).then(res => {
      toast.success('Siz konsultatsiyangiz qabul qilindi')}).catch(err => toast.error(err.message))
    console.log(res);
  } catch (err) {
    toast.error('Xatolik yuz berdi')
  }
}
  return (
    <div className={`bg-[var(--clr-bg)] w-full h-[300px] flex justify-evenly gap-[125px]`}>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-[20px] w-[331px] mt-[15px]">
        <span className="text-[#FFFFFF] text-center text-[25px] font-bold">
          {t('title')}
        </span>
        <input
          name="username"
          className="bg-white py-[10px] px-[19px] w-[290px] border-none rounded-[10px]"
          type="text"
          placeholder={t('inputText1')}
        />
        <input
          name="phone"
          className="bg-white py-[10px] px-[19px] w-[290px] border-none rounded-[10px]"
          type="text"
          placeholder={t('inputText2')}
        />
        <button type="submit" className="w-[239px] h-[37px] bg-[#FFE600] hover:bg-gray-500 transition-colors px-[13px] rounded-[10px] shadow-2xl font-bold text-[15px]">
          {t('button')}
        </button>
      </form>
      <div className="mt-[15px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[13px]">
          <ClockIcon />
          <span className="text-[20px] text-white font-bold">{t('workTime')}</span>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-[20px] text-white font-bold">
            {locale == 'uz' ? site.work_time_uz : site.work_time_ru}
          </span>
          <span className="text-[20px] text-white font-bold">
            {t('afterWorkTime')}
          </span>
          <ul className="flex items-center gap-[15px] pt-[10px]">
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
          </ul>
        </div>
      </div>
      <div className="mt-[15px] flex flex-col gap-[55px]">
        <div className="w-[201px] h-[130px]">
          <div className="text-[20px] flex flex-col text-white font-bold">
            <span>Intex-market.uz</span>
            <span>{site.phone}</span>
            <span>{locale == "uz" ? site.address_uz : site.address_ru}</span>
          </div>
        </div>
        <span className="w-[242px] h-[34px] text-[15px] text-white font-bold">Разработано в Support Solutions Все права защищены.</span>
      </div>
    </div>
  );
};

export default Footer;
