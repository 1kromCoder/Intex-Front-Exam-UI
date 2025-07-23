import { CloseIcon, UserIcon } from '@/assets/icons'
import { postRequest } from '@/service/getRequest'
import { useTranslations } from 'next-intl'
import { FormEvent } from 'react'
import toast from 'react-hot-toast'

const KonsultationCreate = ({setCreate}: {setCreate: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const t = useTranslations("orderModal")
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const name = (form.username as HTMLInputElement).value
  const phone = (form.phone as HTMLInputElement).value
  const payload = { name, phone }
  
  try {
    const res = await postRequest('/consultation', payload).then(res => {
      toast.success('Siz konsultatsiyangiz qabul qilindi')
      setCreate(false)}).catch(err => toast.error(err.message))
    console.log(res);
  } catch (err) {
    toast.error('Xatolik yuz berdi')
  }
}
  return (
    <div className='fixed z-[11] inset-0 backdrop-filter bg-black/30 backdrop-blur-[4px] flex items-center justify-center'>
        <div className='w-[450px] justify-center h-[550px] bg-white flex rounded-[30px] gap-[50px] relative px-[40px] py-[22px]'>
            <div onClick={() => setCreate(false)} className='absolute cursor-pointer top-[20px] right-[30px]'>
                <CloseIcon/>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] items-center'>
                <UserIcon/>
                <span className='text-[25px] font-bold'>Konsultatsiya olish</span>
                <input aria-required name="username" required className="w-[360px] h-[60px] border-[1px] outline-none text-center text-[#3d3c3c] border-[#CBCBCB] rounded-[17px] text-[25px] !font-bold px-[20px] shadow-2xl" type="text" placeholder={t("inputText1")}/>
                <input aria-required name="phone" required className="w-[360px] h-[60px] border-[1px] outline-none text-center text-[#3d3c3c] border-[#CBCBCB] rounded-[17px] text-[25px] !font-bold px-[20px] shadow-2xl" type="text" placeholder={t("inputText2")}/>
            <button type='submit' className='bg-[#FFE600] w-[237px] h-[40px] mt-[30px] text-[20px] items-center  cursor-pointer hover:bg-gray-500 transition-colors px-[8px] py-1 rounded-tr-[10px] rounded-[10px] font-bold'>{t("button")}</button>
            </form>
        </div>
    </div>
  )
}

export default KonsultationCreate