import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Shish = () => {
  return (
    <div id="shish">
      <div className="bg-[#009398] text-center px-[416px] py-[23px]">
        <h1 className="text-white text-[50px] font-bold ">
          Shishiriladigan basseynlar
        </h1>
      </div>
      <div className="flex items-center gap-[44px] py-[98px] px-[166px]">
        <Card title="Tavsiya qilamiz" />
        <Card title="Tavsiya qilamiz" />
        <Card title="Tavsiya qilamiz" />
      </div>
    </div>
  );
};

export default Shish;
