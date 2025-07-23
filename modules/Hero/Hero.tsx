import React from "react";
import Sotuv from "../Sotuv/Sotuv";
import Tekin from "../Tekin/Tekin";
import Mijoz from "../Mijozlar/Mijoz";
import Intex from "../Intex/Intex";
import { getRequest } from "@/service/getRequest";
import CategoryProducts from "@/components/CategoryProducts";
import { Toaster } from "react-hot-toast";

const Hero = async() => {
  const products = await getRequest("/product");
  const category = await getRequest("/category");
  return (
    <div className="bg-[--clr-mainBg]">
      <Toaster position="top-center" />
      <img src="/bg.svg" alt="Hero Img" width={1520} height={1200} />
      <Sotuv />
      <CategoryProducts products={products.data} category={category.data}/>
      <Tekin />
      <Mijoz />
      <Intex/>
    </div>
  );
};

export default Hero;
