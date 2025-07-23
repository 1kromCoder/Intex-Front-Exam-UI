import { useTranslations } from "next-intl";
import React from "react";

const Button = ({onClick}: {onClick: () => void}) => {
  const t = useTranslations("FramePoolsPart")
  return (
    <div className="mt-4 flex justify-center">
      <button onClick={onClick} className="bg-[#FFE600] cursor-pointer hover:bg-gray-500 transition-colors px-[8px] py-1 rounded-tr-[10px] rounded-bl-[10px] font-bold text-[12px]">
      {t("button")}
      </button>
    </div>
  );
};

export default Button;
