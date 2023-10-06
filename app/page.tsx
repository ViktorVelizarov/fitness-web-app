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
  
  return (
    <main>
      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <ListBox values={time}/>
      </div>
    </main>
  )
}
