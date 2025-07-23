import { CloseIcon, UserIcon } from "@/assets/icons";
import { postRequest } from "@/service/getRequest";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const KonsultationCreate = ({
  setCreate,
}: {
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations("orderModal");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.username as HTMLInputElement).value;
    const phone = (form.phone as HTMLInputElement).value;
    const payload = { name, phone };

    try {
      await postRequest("/consultation", payload)
        .then(() => {
          toast.success("Sizning konsultatsiyangiz qabul qilindi");
          setCreate(false);
        })
        .catch((err) => toast.error(err.message));
    } catch (err) {
      toast.error("Xatolik yuz berdi");
    }
  };

  return (
    <div className="fixed z-[999] inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-[450px] bg-white rounded-[30px] relative px-6 py-8 shadow-2xl">
        <button
          onClick={() => setCreate(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
          aria-label="Yopish"
        >
          <CloseIcon />
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          <UserIcon />
          <h2 className="text-[22px] md:text-[25px] font-bold text-center">
            {t("title") || "Konsultatsiya olish"}
          </h2>

          <input
            name="username"
            required
            className="w-full h-[55px] border border-[#CBCBCB] rounded-[17px] text-center text-[18px] md:text-[20px] font-medium px-4 shadow-md"
            type="text"
            placeholder={t("inputText1")}
          />
          <input
            name="phone"
            required
            className="w-full h-[55px] border border-[#CBCBCB] rounded-[17px] text-center text-[18px] md:text-[20px] font-medium px-4 shadow-md"
            type="text"
            placeholder={t("inputText2")}
          />
          <button
            type="submit"
            className="bg-[#FFE600] hover:bg-gray-500 transition-colors w-[220px] h-[45px] rounded-[10px] font-bold text-[16px] md:text-[18px] mt-4"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default KonsultationCreate;
