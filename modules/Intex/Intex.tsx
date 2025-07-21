import { CheckIcon } from "@/assets/icons";
import React from "react";
const Intex = () => {
  return (
    <div className="mb-[80px]">
      <div className="bg-[#E2EFEF] text-center px-[235px] py-[20px]">
        <h1 className="text-[#009398] text-[50px] font-bold ">
          Intex basseynlari Toshkentda
        </h1>
      </div>
      <div className="flex gap-[80px] px-[160px] ">
        <div className="py-[80px]">
          <p className="text-black w-[503px] h-[262px] text-[25px] font-normal">
            Intex basseynlari - bu butun oila uchun yoqimli dam olish uchun
            mo'ljallangan arzon, yuqori sifatli, ishonchli va ekologik toza
            mahsulotlar. Basseyn har qanday hovliga to'liq o'rnatilishi va yozda
            faol foydalanilishi mumkin. Basseyn sizga yorqin his-tuyg'ularni
            beradi va issiq yoz kunlarida sizni jaziramadan qutqaradi.
          </p>
        </div>
        <div className="pt-[80px] flex flex-col gap-[50px]">
          <p className="text-black w-[500px] h-[85px] text-[25px] font-normal">
            Intex Basseynlari afzalliklarning kengligi bilan ajralib turadi,
            quyida ulardan eng muhimlarini ajratib ko'rsatish mumkin:
          </p>
          <div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">Chidamlilik</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
                O'rnatish uchun oson oson
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
                Chiroyli va yorqin ranglar
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
                Zamonaviy dizayn
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CheckIcon />
              <p className="text-black text-[25px] font-normal">
                Yuqori sifatli
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intex;
