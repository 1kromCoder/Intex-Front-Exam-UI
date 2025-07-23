"use client"
import { categoryType } from '@/types/CategoryType'
import { ProductType } from '@/types/ProductType'
import React from 'react'
import Card from './Card'
import { useParams } from 'next/navigation'

const CategoryProducts = ({category, products}: {products: ProductType[], category: categoryType[]}) => {
   const {locale} = useParams()
  return (
    <>
        {category.map((item: categoryType) => (
            <div id={item.name_uz} key={item.id}>
                <div className="bg-[var(--clr-bg)] text-center px-[458px] py-[23px] mt-[98px]">
                    <h1 className="text-white text-[50px] font-bold ">
                        {locale === "uz" ? item.name_uz : item.name_ru}
                    </h1>
                </div>
                <div className="bg-[var(--clr-mainBg)] px-[166px] py-[96px] flex flex-wrap gap-[44px]">
                    {item.Product.map((item: ProductType) => (
                    <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        ))}
    </>

  )
}

export default CategoryProducts