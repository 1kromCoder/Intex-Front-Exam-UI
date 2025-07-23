"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { ProductType } from "@/types/ProductType";
import { API } from "@/service/getEnv";
import OrderCreate from "./OrderCreate";
import { useParams } from "next/navigation";

const Card = ({ item }: { item: ProductType}) => {
  const {locale} = useParams()
  const [form, setForm] = useState(false);
  const bg = {
    "Рекомендуем": ["bg-green-600", "Tavsiya qilamiz"],
    "Cкидка": ["bg-yellow-400", "Chegirma"],
    "Нет_в_наличии": ["bg-red-500", "Sotuvda yo'q"],
  }
  
  return (
    <div className="max-w-sm w-[355px] bg-[var(--clr-prCard)] rounded-br-[35px] rounded-bl-[35px] rounded-tr-[35px] shadow-2xl relative p-[32px]">
      <div className={`${bg[item.status][0]} absolute top-0 left-0 text-white px-[18px] py-2 rounded-br-[10px] text-[15px] font-bold`}>
        {locale === "uz" ? bg[item.status][1] : item.status}
      </div>
      <div className="flex justify-center w-[300px] h-[200px]">
        <img
          src={`${API}/file/${item.image}`}
          alt="Hovuz rasmi"
          width={275}
          height={173}
          className="object-contain"
        />
      </div>
      <div className="flex gap-[30px] items-center px-[32px]">
        <div className="flex flex-col">
          <span className="line-through text-[var(--clr-grey)] font-normal text-[12px]">
            {item.price} so'm
          </span>
          <span className="text-black text-[12px] font-bold">
            {item.discountedPrice} so'm
          </span>
        </div>
        <Button onClick={() => setForm(true)}/>
      </div>
      {form && <OrderCreate item={item} setCreate={setForm}/>}
    </div>
  );
};

export default Card;
