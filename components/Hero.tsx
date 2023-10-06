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
              Doing Fitness doesn't need to be complicated
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
         
        </div>
      );
}

export default Hero;
