import { Divider } from '@nextui-org/react'
import Link from 'next/link'
import {Avatar} from "@nextui-org/react";

const footer = () => {
  return (
    <>
      <section className='h-12 max-w-5xl mx-auto flex flex-col justify-center items-center pb-4 gap-x-2 gap-y-4 text-sm'>

        <Divider className='bg-slate-50/20 ' />
          
          <div className='flex justify-center items-center gap-x-2 '>
              Designed and Developed By 
              
              <Link target="_blank" href="https://twitter.com/sheriffign" rel="noreferrer">
                  <div className='text-sm flex gap-x-2 text-lime-300 font-medium justify-center items-center 
                  outline-none transition-transform duration-400 ease-in-out hover:-translate-y-1 focus:ring-2 focus:ring-white/20 focus:ring-offset-4
                  focus:ring-offset-black 
                  '>
                      <Avatar  src="https://pbs.twimg.com/profile_images/1757030393558061056/GVDD2GeM_400x400.jpg" className='h-5 w-5 ' />
                      Himanshu
                  </div>
              </Link>
          </div>
      </section>
    </>
  )
}

export default footer