import React from 'react'
import { skills } from "@/constants";
import Image from 'next/image';
import Modalular from "@/components/Modal"
import { Button, Tooltip } from '@nextui-org/react';

const skill = () => {
  return (
   <>
        <section className="relative mt-20 flex-col  max-w-5xl mx-auto sm:p-16 pb-12 lg:block  sm:min-h-[calc(100vh-80px)] md:min-h-[100vh] min-h-[100vh] flex opaaaaa ">
    
            <h1 className='heading sm:text-7xl text-3xl font-black text-center animate-slidein opacity-0 [--slidein-delay:300ms]'>
                SKILLS
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-400 animate-slidein opacity-0 [--slidein-delay:300ms]">
                    <p className="text-base text-justify sm:text-center">Skilled in creating responsive and user-friendly web interfaces. Proficient in Reactjs , Nextjs and modern web technologies, dedicated to crafting visually appealing and performant digital experiences.</p>
            </div>

            <div className="mt-16 flex flex-wrap sm:gap-12 gap-4 justify-center items-center">

            
                    {skills.map((skills) => (
                        <div className="block-container w-20 h-20 ">
                            <div className="rounded-xl "/>
                            <Tooltip content={skills.name} className='border border-neutral-700 bg-transparent text-lime-300'>
                                <Button className="border backdrop-blur-2xl bg-zinc-800/30 border-neutral-800 rounded-xl flex justify-center items-center h-20 w-20">
                                    <Image 
                                        src={skills.imageUrl}
                                        alt={skills.name} 
                                        // className="w-1/2 h-1/2 object-contain"
                                        className="w-16 h-16 object-contain"
                                        />
                                </Button>
                            </Tooltip>
                            
                        </div>
                    ))}
              </div>

            <div className='mt-36 flex flex-col justify-center items-center '>
                <Modalular />
                {/* <Divider className='bg-slate-50/20 mt-20' /> */}
            </div>
            
        </section>
   </>
  )
}

export default skill