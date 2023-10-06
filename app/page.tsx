import Hero from '@/components/Hero'
import ListBox from '@/components/ListBox'
import { fetchPlan } from '@/utils'
import { Listbox } from '@headlessui/react'
import Image from 'next/image'


export default async function Home() {
  const Plan = await fetchPlan({
    time: 30,
    equipment: "dumbbells",
    muscle: "biceps",
    fitness_level: "beginner",
    fitness_goals: "strength"
  })
  console.log(Plan)

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
  
  return (
    <main>
      <Hero/>

      <div className='flex flex-row justify-center gap-4 mt-12 padding-x padding-y max-width' id='discover'>
      <ListBox values={time}/>
      <ListBox values={equpment}/>
      <ListBox values={muscleGroup}/>
      <ListBox values={fitnessLevel}/>
      <ListBox values={fitnessGoals}/>

      </div>
    </main>
  )
}
