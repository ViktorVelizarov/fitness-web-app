"use client"; //we handle button clicking so we need to use CLIENT comp

import Image from "next/image";
import React from 'react'
import CustomButton from "./CustomButton";

const Hero = () => {
    function handleScroll(){

    }
    return (
        <div className="hero">
          <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
              Fitness doesn't need to be complicated
            </h1>
    
            <p className="hero__subtitle">
              Find the perfect program for you, explore hundreds of excersises and more...
            </p>
    
            <CustomButton
              title="Generate Program"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
          </div>
          <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/ManPicture.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
      </div>
      );
}

export default Hero;
