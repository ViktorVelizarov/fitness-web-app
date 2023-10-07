"use client"; //we handle button clicking so we need to use CLIENT comp

import Image from "next/image";
import React, { createContext, useContext } from 'react'
import CustomButton from "./CustomButton";
import ListBox from '@/components/ListBox'
import { fetchPlan } from '@/utils'

export default function Hero(){ 

  const [listInput, SetListInput] = React.useState({ //state
    time: "",
    equipment: "",
    muscleGroup: "",
    fitnessLevel: {name: "",},
    fitnessGoals: "",})

    console.log(listInput.fitnessLevel.name)

    const time = [
      { name: 'Choose program time' },
      { name: '10min' },
      { name: '30min' },
      { name: '1h' },
      { name: '1.30h' },
    ]
  
    const equpment = [
      { name: 'Choose equpment' }, 
      { name: 'Gym' },
      { name: 'Home' },
    ]
  
    const muscleGroup = [
      { name: 'Choose muscle group' },
      { name: 'Chest' },
      { name: 'Back' },
      { name: 'biceps' },
      { name: 'Triceps' },
      { name: 'Abs' },
      { name: 'Legs' },
      { name: 'Shoulders' },
      { name: 'Full-body' },
    ]
  
    const fitnessLevel = [
      { name: 'Choose fitness level' },
      { name: 'beginner' },
      { name: 'intermediate' },
      { name: 'advanced' },
    ]
  
    const fitnessGoals = [
      { name: 'Choose fitness goals' },
      { name: 'weight_loss' },
      { name: 'muscle_gain' },
      { name: 'strength' },
      { name: 'cardiovascular_endurance' },
      { name: 'flexibility' },
      { name: 'general_fitness' },
    ]
  
    const updatelistInput = (fieldName : string, newValue: string) => {

      SetListInput((prevListInput) => ({
        ...prevListInput,
        [fieldName]: newValue, 
      }))
    }

  async function generateProgram(){
    const Plan = await fetchPlan({
      time: 40,
      equipment: "dumbbells",
      muscle: "biceps",
      fitness_level: "beginner",
      fitness_goals: "strength"
    })
    console.log("plan1:")
    console.log(Plan)

    
    }
    return (
      <>
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
              handleClick={generateProgram}
            />
          </div>
          <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/ManPicture.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
      </div>
      <div className='flex flex-row justify-center gap-4 mt-12 padding-x padding-y max-width' id='discover'>
        <ListBox values={time} onUpdate={updatelistInput} field= "time"/>
        <ListBox values={equpment} onUpdate={updatelistInput} field= "equpment"/>
        <ListBox values={muscleGroup} onUpdate={updatelistInput} field= "muscleGroup"/>
        <ListBox values={fitnessLevel} onUpdate={updatelistInput} field= "fitnessLevel"/>
        <ListBox values={fitnessGoals} onUpdate={updatelistInput} field= "fitnessGoals"/>
      </div>
      </>
      );
}


