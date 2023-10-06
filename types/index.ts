import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;   //the ? means its optional
    btnType?: "button" | "submit"; //it can be either "button" or "submit"
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }