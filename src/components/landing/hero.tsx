import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { CoupleIcon } from '../icons/couple'
import bg from "../../../public/assets/on-fire-logo-2.jpg"
export default function Hero() {
  return (
    <section className='relative h-[calc(100vh-7rem)]'>
        <div className="absolute inset-0">
          <Image src={bg} alt="" className='ml-auto h-full object-contain' />
        </div>
        <div className="absolute inset-0 bg-background/90" />
        <div className='relative h-full'>
          <div className="container flex items-center justify-center h-full mx-auto">
            <div className='relative -top-20 space-y-4 text-center'>
              <span className='block font-semibold text-white w-fit mx-auto px-6 py-2 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full'>ON FIRE DANCE STUDIO</span>
              <h1 className='text-5xl lg:text-7xl text-amber-500 font-black uppercase'>Aprende a bailar</h1>
              <p className='max-w-xl mx-auto text-xl font-medium text-white/70'>Nuestra academia te ofrece el mejor servicio con la mejor atencion. Estamos comprometidos a llevarte a ser la <span className="italic text-orange-500">mejor</span> version de ti.</p>
              
              <div className='flex items-center justify-center gap-x-4'>
                <Button className='gap-x-2'><CoupleIcon className='size-6'/>Book a class</Button>
                <Button variant={"secondary"} className='gap-x-2'><CalendarIcon className='size-6'/>View Calendar</Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
  )
}
