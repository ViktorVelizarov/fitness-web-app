import Hero from '@/components/Hero'
import { fetchPlan } from '@/utils'
import Image from 'next/image'


export default async function Home() {
  const Plan = await fetchPlan()
  console.log(Plan)
  return (
    <main>
      <Hero/>
    </main>
  )
}
