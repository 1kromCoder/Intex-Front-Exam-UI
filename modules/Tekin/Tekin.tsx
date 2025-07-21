import Button from "@/components/Button";
import React from "react";

const Tekin = () => {
  return (
    <div>
      <div className="bg-[#009398] text-center px-[200px] py-[23px]">
        <div className="flex flex-col items-center gap-[30px]">
          <h1 className="text-white text-[50px] font-bold ">
            Tekin yetkazib berish
          </h1>
          <p className="text-white text-[23px] font-normal">
            Toshkent shahri ichida yetkazib berish bepul (shahar tashqarisida
            yetkazib berish alohida to'lanadi)
          </p>
          <button className="w-[250px] h-[40px] bg-[#FFE600] hover:bg-gray-500 transition-colors px-[13px] rounded-[10px] shadow-2xl font-bold text-[20px]">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tekin;
