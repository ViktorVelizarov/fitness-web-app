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

  export interface CustomListProps {
    values: any[]
  }

  export interface FilterProps {
    time: number;
    equipment:string;
    muscle: string;
    fitness_level: string;
    fitness_goals: string;
}