import React from 'react'
import { skills } from "@/constants";
import Image from 'next/image';
// import Modal from "@/components/Modal"
import {Popover, PopoverTrigger, PopoverContent, Button, Tooltip } from '@nextui-org/react';
import Link from 'next/link';

const skill = () => {

    const content = (
        <PopoverContent className='border border-neutral-700 bg-transparent p-2'>

                <Link href="https://www.hitwebcounter.com" target="_blank">
                    <img
                    src="https://hitwebcounter.com/counter/counter.php?page=11563803&style=0001&nbdigits=5&type=ip&initCount=0"
                    title="Counter Widget"
                    alt="Visit counter For Websites"
                    width={100}
                    height={40}
                    className='h-6 w-50'
                    />
                </Link>
        </PopoverContent>
    )

    const damn = () => (

        window.scrollTo({top: 0, behavior: 'smooth'})

      )
    
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
                        <div className="block-container w-20 h-20" key={skills.name}>
                            <div className="rounded-xl "/>
                            <Tooltip content={skills.name}  className='border border-neutral-700 bg-transparent text-lime-300'>
                                <Button className="border backdrop-blur-2xl bg-zinc-800/30 border-neutral-800 rounded-xl flex justify-center items-center h-20 w-20" >
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

            <div className='mt-36 flex gap-2 justify-center items-center '>
                {/* <Modal /> */}
               
                <Popover placement="top" offset={10}>
                    <PopoverTrigger>
                        <Button  variant="flat" className="capitalize font-medium bg-lime-400 ">
                            Website Visits ↑
                        </Button>
                    </PopoverTrigger>
                    {content}
                </Popover>

                <Button onClick={damn}>
                    Back to Top ↑
                </Button>
            </div>
            
        </section>
   </>
  )
}

export default skill