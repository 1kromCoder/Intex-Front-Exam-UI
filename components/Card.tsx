"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Card = ({ title }: { title: string }) => {
  return (
    <div className="max-w-sm w-[355px] bg-white rounded-br-[35px] rounded-bl-[35px] rounded-tr-[35px] shadow-2xl relative p-[32px]">
      <div className={`${title==="Tavsiya qilamiz" ? "bg-green-600": title==="Chegirma" ? "bg-yellow-300" : "bg-red-500"} absolute top-0 left-0  text-white px-[18px] py-2 rounded-br-[10px] text-[15px] font-bold`}>
        {title}
      </div>
      <div className="flex justify-center w-[300px] h-[200px]">
        <Image
          src="/basen.png"
          alt="Hovuz rasmi"
          width={275}
          height={173}
          className="object-contain"
        />
      </div>
      <div className="flex gap-[30px] items-center px-[32px]">
        <div className="flex flex-col">
          <span className="line-through text-gray-400 font-normal text-[12px]">
            1.400.000 so’m
          </span>
          <span className="text-black text-[12px] font-bold">
            1.090.000 so’m
          </span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Card;
