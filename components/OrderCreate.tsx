import { CloseIcon, MapIcon } from '@/assets/icons'
import { API } from '@/service/getEnv'
import { ProductType } from '@/types/ProductType'
import React, { FormEvent, useState } from 'react'
import { formatPrice } from './Formatter'
import { useTranslations } from 'next-intl'
import Post from './Post'
import { postRequest } from '@/service/getRequest'
import toast from 'react-hot-toast'

const OrderCreate = ({item, setCreate}: {item: ProductType, setCreate: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const t = useTranslations("orderModal")
    const [payload, setPayload] = useState<any>(null)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const name = (form.username as HTMLInputElement).value
  const phone = (form.phone as HTMLInputElement).value
  const address = (form.address as HTMLInputElement).value
  const payload = { name, phone, address, productId: item.id, check: false }
  
  try {
    const res = await postRequest('/order', payload)
    console.log(res);
    
    if (res) {
      toast.success('Sizning buyurtmangiz qabul qilindi')
      setCreate(false)
    }
  } catch (err) {
    toast.error('Xatolik yuz berdi')
  }
}

  return (
    <div className='fixed z-[11] inset-0 backdrop-filter bg-black/40 backdrop-blur-[4px] flex items-center justify-center'>
        <div className='w-[1130px] h-[500px] bg-white flex rounded-[30px] gap-[50px] relative px-[40px] py-[22px]'>
            <div onClick={() => setCreate(false)} className='absolute cursor-pointer top-[20px] right-[30px]'>
                <CloseIcon/>
            </div>
            <div className='shadow-2xl text-center rounded-[20px] items-center flex flex-col py-[55px] w-[50%]'>
                <span className='text-[30px] font-bold text-[var(--clr-bg)]'>{window.location.pathname === '/uz' ? item.frame_uz : item.frame_ru}</span>
                <img className='w-[400px] h-[200px]' src={`${API}/file/${item.image}`} alt="" />
                <span className='text-[30px] mt-[40px] font-bold'>{formatPrice(item.discountedPrice)} сум</span>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-[17px]'>
                <input aria-required name="username" required className="w-[360px] h-[60px] border-[1px] outline-none text-[#3d3c3c] border-[#CBCBCB] rounded-[17px] text-[25px] !font-bold px-[20px] shadow-md" type="text" placeholder={t("inputText1")}/>
                <input aria-required name="phone" required className="w-[360px] h-[60px] border-[1px] outline-none text-[#3d3c3c] border-[#CBCBCB] rounded-[17px] text-[25px] !font-bold px-[20px] shadow-md" type="text" placeholder={t("inputText2")}/>
                <div className='cursor-pointer flex gap-[10px] w-[360px]'>
                    <input name="address" required className="w-[280px] h-[60px] border-[1px] outline-none text-[#3d3c3c] border-[#CBCBCB] rounded-[17px] text-[25px] !font-bold px-[20px] shadow-md" type="text" placeholder={t("inputText3")}/>
                    <div className='shadow-2xl rounded-[20px] border-[1px] w-[71px] h-[62px] p-[14px] flex items-center justify-center border-[#CBCBCB]'>
                        <MapIcon/>
                    </div>
                </div>
            <button type='submit' className='bg-[#FFE600] w-[237px] h-[40px] text-[20px] items-center  cursor-pointer hover:bg-gray-500 transition-colors px-[8px] py-1 rounded-tr-[10px] rounded-bl-[10px] font-bold'>{t("button")}</button>
            </form>
        </div>
        {/* {payload && <Post payload={payload}/>} */}
    </div>
  )
}

export default OrderCreate