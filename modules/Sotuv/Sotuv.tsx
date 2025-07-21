import React from "react";

const Sotuv = () => {
  return (
    <div className="flex gap-[98px] flex-col">
      <div className="bg-[#009398] text-center px-[458px] py-[23px] mt-[-20px]">
        <h1 className="text-white text-[50px] font-bold ">Mavsumiy sotuv!</h1>
      </div>
      <div className="flex gap-[44px] px-[166px]">
        <div className="w-[355px] h-[150px] bg-[#009398] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white">
          <div className="flex gap-[19px]">
            <span className="text-[65px] font-bold">1</span>
            <div className="flex flex-col mt-[15px]">
              <span className="text-[24px] font-bold">
                Hovuzni bepul yetkazib berish
              </span>
              <span className="text-[14px] font-normal">
                Biz mijozlarimizni qadrlaymiz, siz bizning xizmatimiz sifatiga
                amin bo'lishingiz mumkin!
              </span>
            </div>
          </div>
        </div>
        <div className="w-[355px] h-[150px] bg-[#009398] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white">
          <div className="flex gap-[19px]">
            <span className="text-[65px] font-bold">2</span>
            <div className="flex flex-col mt-[15px]">
              <span className="text-[24px] font-bold">
                Sovg'a sifatida maxsus kimyoviy moddalar
              </span>
              <span className="text-[14px] font-normal">
                Hovuz uchun maxsus tozalash kimyoviy moddalari - bepul
              </span>
            </div>
          </div>
        </div>
        <div className="w-[355px] h-[150px] bg-[#009398] rounded-tr-[40px] px-[13px] rounded-bl-[40px] text-white">
          <div className="flex gap-[19px]">
            <span className="text-[65px] font-bold">3</span>
            <div className="flex flex-col mt-[15px] gap-[35px]">
              <span className="text-[24px] font-bold">Sifatni tekshirish</span>
              <span className="text-[14px] font-normal">
                Barcha INTEX mahsulotlari originaldir
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sotuv;
