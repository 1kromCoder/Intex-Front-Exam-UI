import React from "react";
import Sotuv from "../Sotuv/Sotuv";
import Ramca from "../Ramca/Ramca";
import Shish from "../Shishiriladigan/Shish";
import Tekin from "../Tekin/Tekin";
import Mijoz from "../Mijozlar/Mijoz";
import Intex from "../Intex/Intex";

const Hero = () => {
  return (
    <div>
      <img src="/bg.svg" alt="Hero Img" width={1520} height={1200} />
      <Sotuv />
      <Ramca />
      <Shish />
      <Tekin />
      <Mijoz />
      <Intex/>
    </div>
  );
};

export default Hero;
