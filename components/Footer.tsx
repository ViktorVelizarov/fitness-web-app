import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=' flex  justify-center flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col justify-center gap-5 sm:px-16 px-6 py-10'>
     
      <div className='flex flex-col justify-center  items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-2 py-10'>
      <p>@2023 FitnessApp. All rights reserved</p>

      <div className=" ml-3 flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
    </div>
  </footer>
  )
}
