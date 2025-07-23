import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  const t = useTranslations("modalSuccess");

  // Modalni avtomatik yopish (ixtiyoriy)
  useEffect(() => {
    const timer = setTimeout(onClose, 4000); // 4 soniyadan keyin yopiladi
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="bg-white max-w-sm w-full rounded-2xl p-6 text-center shadow-xl relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
          aria-label="Yopish"
        >
          &times;
        </button>

        {/* Success Icon */}
        <div className="flex justify-center items-center mb-5">
          <div className="bg-green-100 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7.36 7.36a1 1 0 01-1.414 0l-3.36-3.36a1 1 0 011.414-1.414L8.5 11.086l6.647-6.647a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('title')}</h2>
        <p className="text-gray-600 text-[16px]">
          {t("desc")}
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;
