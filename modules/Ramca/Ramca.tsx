import Card from "@/components/Card";
import React from "react";

const Ramca = () => {
  return (
    <div id="ramkali">
      <div className="bg-[#009398] text-center px-[458px] py-[23px] mt-[98px]">
        <h1 className="text-white text-[50px] font-bold ">
          Ramkali basseynlar
        </h1>
      </div>
      <div className="bg-[#f8f8f8] px-[166px] py-[96px] flex flex-wrap gap-[44px]">
        <Card title="Tavsiya qilamiz" />
        <Card title="Chegirma"/>
        <Card title="Sotuvda yo'q"/>
      </div>
    </div>
  );
};

export default Ramca;
