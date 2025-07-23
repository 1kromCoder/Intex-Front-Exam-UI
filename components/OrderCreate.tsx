import { CloseIcon, MapIcon } from "@/assets/icons";
import { API } from "@/service/getEnv";
import { ProductType } from "@/types/ProductType";
import React, { FormEvent } from "react";
import { formatPrice } from "./Formatter";
import { useTranslations } from "next-intl";
import { postRequest } from "@/service/getRequest";
import toast from "react-hot-toast";

const OrderCreate = ({
  item,
  setCreate,
}: {
  item: ProductType;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations("orderModal");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.username as HTMLInputElement).value;
    const phone = (form.phone as HTMLInputElement).value;
    const address = (form.address as HTMLInputElement).value;
    const payload = {
      name,
      phone,
      address,
      productId: item.id,
      check: false,
    };

    try {
      const res = await postRequest("/order", payload);
      if (res) {
        toast.success("Sizning buyurtmangiz qabul qilindi");
        setCreate(false);
      }
    } catch (err) {
      toast.error("Xatolik yuz berdi");
    }
  };

  const productTitle =
    typeof window !== "undefined" && window.location.pathname === "/uz"
      ? item.frame_uz
      : item.frame_ru;

  return (
    <div className="fixed z-[999] inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-[1130px] max-h-[95vh] overflow-y-auto rounded-[30px] p-6 md:p-10 flex flex-col md:flex-row gap-6 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setCreate(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
          aria-label="Modalni yopish"
        >
          <CloseIcon />
        </button>

        {/* Left: Product Info */}
        <div className="md:w-1/2 w-full flex flex-col items-center text-center gap-4">
          <h2 className="text-[24px] md:text-[30px] font-bold text-[var(--clr-bg)]">
            {productTitle}
          </h2>
          <img
            className="w-[100%] max-w-[400px] h-auto rounded-xl object-cover"
            src={`${API}/file/${item.image}`}
            alt={productTitle}
          />
          <span className="text-[24px] md:text-[28px] mt-4 font-bold text-gray-800">
            {formatPrice(item.discountedPrice)} сум
          </span>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col justify-center items-center gap-5"
        >
          <input
            name="username"
            required
            className="w-full max-w-[360px] h-[55px] border border-[#CBCBCB] rounded-[17px] text-[18px] text-[#3d3c3c] font-medium px-4 shadow-md outline-none"
            type="text"
            placeholder={t("inputText1")}
          />
          <input
            name="phone"
            required
            className="w-full max-w-[360px] h-[55px] border border-[#CBCBCB] rounded-[17px] text-[18px] text-[#3d3c3c] font-medium px-4 shadow-md outline-none"
            type="text"
            placeholder={t("inputText2")}
          />
          <div className="flex w-full max-w-[360px] gap-3">
            <input
              name="address"
              required
              className="flex-1 h-[55px] border border-[#CBCBCB] rounded-[17px] text-[18px] text-[#3d3c3c] font-medium px-4 shadow-md outline-none"
              type="text"
              placeholder={t("inputText3")}
            />
            <div className="w-[60px] h-[55px] flex items-center justify-center border border-[#CBCBCB] rounded-[17px] shadow-md">
              <MapIcon />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#FFE600] hover:bg-gray-500 transition-colors w-[237px] h-[45px] text-[18px] font-bold rounded-[10px] mt-2"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderCreate;