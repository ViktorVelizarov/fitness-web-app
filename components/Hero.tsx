import Image from "next/image";
import React from 'react'

export default function Hero() {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Working out doesnt have to be complicated.
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
        Find the best fitness program for you, browse through hundreds of excersises and more...
        </p>
        
        </div>
    </div>

  )
}
