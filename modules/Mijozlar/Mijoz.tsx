import Image from "next/image";
import React from "react";

const Mijoz = () => {
  return (
    <div>
      <div className="bg-[#E2EFEF] text-center px-[458px] py-[23px] mt-[98px]">
        <h1 className="text-[#009398] text-[50px] font-bold ">
          Mijozlarni qadrlash
        </h1>
      </div>
      <div className="flex gap-[10px] items-center py-[90px] px-[140px]">
        <div className="flex items-center gap-[50px]">
          <Image
            src="/child.png"
            alt="Bola rasmi"
            width={108}
            height={105}
            className="object-contain"
          />
          <div className="flex flex-col w-[245px] h-[125px]">
            <span className="text-black text-[40px] font-bold">Tajriba</span>
            <p className="text-[20px] font-normal text-black">
              Xodimlarimizning professionalligi
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image
              src="/car.png"
              alt="Yuk moshina rasmi"
              width={124}
              height={124}
              className="object-contain"
            />
            <div className="flex flex-col w-[302px] h-[148px]">
              <span className="text-black text-[40px] font-bold">
                Yetkazib berish
              </span>
              <p className="text-[20px] font-normal text-black">
                Shahar bo’ylab bepul yetkazib berish
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image
              src="/check.png"
              alt="Check rasmi"
              width={113}
              height={111}
              className="object-contain"
            />
            <div className="flex flex-col w-[208px] h-[148px]">
              <span className="text-black text-[40px] font-bold">
              Sifat
              </span>
              <p className="text-[20px] font-normal text-black">
              Chidamli, sifatli basseynlar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mijoz;
