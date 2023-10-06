
import Hero from '@/components/Hero'
import ListBoxContainer from '@/components/ListBoxContainer'
import { fetchPlan } from '@/utils'
import { Listbox } from '@headlessui/react'
import Image from 'next/image'
import React from "react"

export default async function Home() {
  const Plan = await fetchPlan({
    time: 30,
    equipment: "dumbbells",
    muscle: "biceps",
    fitness_level: "beginner",
    fitness_goals: "strength"
  })
  console.log(Plan)

  return (
    <main>
      <Hero/>
      <ListBoxContainer/>
    </main>
  )
}
