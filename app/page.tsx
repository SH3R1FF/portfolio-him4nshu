"use client"

import Image from "next/image";
import "./globals.css";
import { Button } from "@nextui-org/react";
import About from "@/components/about";
import Modalular from "@/components/Modal"
import Link from "next/link";
import BlurIn from "@/components/ui/blur-in";

export default function Home() {

  const damn = () => (
    window.scroll({top: 800, behavior: 'smooth'})
  )

  return (
    <>

      <div className="max-w-5xl mx-auto sm:p-16 pb-12 lg:block lg:pt-[8rem] px-16 sm:min-h-[calc(100vh-80px)] md:min-h-[100vh] min-h-[100vh] flex items-center justify-center">  
        <div className="heading animate-slidein opacity-0 [--slidein-delay:300ms]">
          <h4 className="self-start text-left text-3xl font-medium text-white">Hi👋🏼, I am</h4>
          <h1 className="flex flex-col text-[6rem] font-bold leading-[1] lg:flex-row lg:text-[12rem]   ">
  
            <span className="text-neutral-100">
              HIMA
            </span>

              <span className="text-lime-300">
                NSHU 
              </span>
          </h1>


          <div className="mt-6 flex flex-col items-start sm:gap-3 gap-6 text-5xl lg:flex-row ">
            <h4 className="leading-1 text-left font-medium leading-[0.5] lg:text-[5rem]">
              {/* <span className="text-lime-300">FRONTEND</span> */}
              <span className="text-lime-300">
                FULLSTACK
              </span>
            </h4>
            <div className="hidden h-1 w-16 bg-white lg:flex"></div>
            <h4 className="leading-1 text-left font-medium leading-[0.5] lg:text-[5rem] text-neutral-100">
              <span>DEVELOPER</span>
            </h4>
          </div>

            <div className="lg:mt-16 mt-12 flex gap-x-6  max-sm:flex-col pText font-medium  max-sm:gap-y-3 ">
              <Modalular />
              
              {/* <Link> */}
                <Button 
                  
                  onClick={damn} 
                  className=" pText font-medium"  endContent={<Image width="30" height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1ElEQVR4nO3WQUoDQRCF4W+vSx3Fy0SPoOQWyVayNh5I8R6iCzHJLZLRbRIZKCG4cnrCNAz9Qy+r3uvqruqmUBgYE1zmEp9ij0UuExU+wsQKV8WEUgkDuBMVHvGG70jUZX1Gzn8xRn0E0SQDY+wi6AkjnLQtXwykRdsBVR3s/D5BtJO4OPPfnfcu3vAegU3Zexdv+IrgU+25OGi7ZWrv14kGjiIuer5Jci3TczyPRM+5PiTn2ISJmUzcYRsmXnCTeCk7cYv1n1HaO2d4wGu0Z6EwPH4AMJtvAS2XOHoAAAAASUVORK5CYII=" alt="explore" className="hover:translate-x-2  duration-500"/>}>
                      Explore
                </Button>
              {/* </Link> */}

            </div>
          </div>
      </div> 
      
          <About/>
          
    </>
  );

}

