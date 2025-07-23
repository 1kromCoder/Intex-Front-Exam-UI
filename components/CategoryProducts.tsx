"use client";

import { categoryType } from '@/types/CategoryType';
import { ProductType } from '@/types/ProductType';
import React from 'react';
import Card from './Card';
import { useParams } from 'next/navigation';

const CategoryProducts = ({
  category,
  products,
}: {
  products: ProductType[];
  category: categoryType[];
}) => {
  const { locale } = useParams();

  return (
    <>
      {category.map((item: categoryType) => (
        <div id={item.name_uz} key={item.id}>
          {/* Section Title */}
          <div className="bg-[var(--clr-bg)] text-center px-4 py-6 md:px-32 mt-[80px] md:rounded-2xl shadow-md">
            <h1 className="text-white text-[28px] md:text-[40px] lg:text-[50px] font-bold">
              {locale === 'uz' ? item.name_uz : item.name_ru}
            </h1>
          </div>

          {/* Product Cards */}
          <div className="bg-[var(--clr-mainBg)] px-4 py-10 md:px-16 lg:px-40 flex flex-wrap justify-center gap-6 md:gap-[44px] transition-all duration-300">
            {item.Product.map((item: ProductType) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryProducts;