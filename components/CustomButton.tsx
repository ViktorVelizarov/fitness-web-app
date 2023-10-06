"use client"; //we need to use CLIENT comp because of onClick()

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}  //submit or regular
    className={`custom-btn ${containerStyles}`}  //default btn class + additional classes
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
  </button>
);

export default Button;