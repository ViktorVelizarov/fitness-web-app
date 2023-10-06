"use client"
import React from 'react'
import ListBox from '@/components/ListBox'

export default function ListBoxContainer() {
    const [listInput, SetListInput] = React.useState({
        time: "",
        equpment: "",
        muscleGroup: "",
        fitnessLevel: "",
        fitnessGoals: "",})
    
      console.log(listInput)

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
        { name: 'Biceps' },
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
        { name: 'strength_training' },
        { name: 'cardiovascular_endurance' },
        { name: 'flexibility' },
        { name: 'general_fitness' },
      ]

    const updatelistInput = (fieldName : string, newValue: string) => {
        console.log("field name:")
        console.log(fieldName)
        console.log("new value:")
        console.log(newValue)

        SetListInput((prevListInput) => ({
          ...prevListInput,
          [fieldName]: newValue, 
        }))
      }

  return (
    <div className='flex flex-row justify-center gap-4 mt-12 padding-x padding-y max-width' id='discover'>
      <ListBox values={time} onUpdate={updatelistInput} field= "time"/>
      <ListBox values={equpment} onUpdate={updatelistInput} field= "equpment"/>
      <ListBox values={muscleGroup} onUpdate={updatelistInput} field= "muscleGroup"/>
      <ListBox values={fitnessLevel} onUpdate={updatelistInput} field= "fitnessLevel"/>
      <ListBox values={fitnessGoals} onUpdate={updatelistInput} field= "fitnessGoals"/>

      </div>
  )
}
