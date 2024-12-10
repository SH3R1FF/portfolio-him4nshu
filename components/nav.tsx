"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {AnimatePresence, MotionValue, motion, useMotionValue, useTransform} from "framer-motion"
// import {Avatar} from "@nextui-org/react";

const nav = () => {

    const links = [
        {
          path: "/",
          name: "HOME"
        },
        {
          path: "/projects",
          name: "PROJECTS"
        },
        {
          path: "/contact",
          name: "CONTACT"
        },
    ]

    const pathname = usePathname();
    const MotionLink = motion(Link)

    const mapRange = (
        inputLower: number,
        inputUpper: number,
        outputLower: number,
        outputUpper: number
      ) => {
        const INPUT_RANGE = inputUpper - inputLower
        const OUTPUT_RANGE = outputUpper - outputLower
    
        return (value: number) =>
          outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
      }

      const setTransform = (
        item: HTMLElement & EventTarget,
        event: React.PointerEvent,
        x: MotionValue,
        y: MotionValue
      ) => {
        const bounds = item.getBoundingClientRect()
        const relativeX = event.clientX - bounds.left
        const relativeY = event.clientY - bounds.top
        const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
        const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)
        x.set(xRange * 10)
        y.set(yRange * 10)
      }
    
    
  return (
    <nav className=" w-full items-center justify-center text-sm lg:flex sticky top-0 z-50 ">
        {/* <ul className="fixed left-0 top-0 flex w-full max-w-5xl justify-center border-b  bg-gradient-to-b from-zinc-200 pb-4 pt-4 lg:pb-3 lg:pt-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 lg:mt-12 gap-x-10 text-lime-400  pText">    */}
        <ul className="z-50 rounded-lg left-0 top-0 flex w-full max-w-5xl justify-center border-b  bg-gradient-to-b pb-4 pt-4 lg:pb-3 lg:pt-3 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 lg:mt-12 sm:gap-x-10 gap-x-2  text-lime-400 ">   
        {/* <ul className="fixed z-50 flex max-w-5xl justify-center bg-gradient-to-b backdrop-blur-2xl border-neutral-800 from-inherit rounded-xl border p-4 bg-zinc-800/30 w-auto top-2 mt-12 gap-x-6 text-lime-400 ">    */}
  
            <AnimatePresence> 
            {links.map((link) => {
                const x = useMotionValue(0);
                const y = useMotionValue(0);
                const textX = useTransform(x, latest => latest * 0.5)
                const textY = useTransform(x, latest => latest * 0.5)
                return (
                    <motion.li 
                    onPointerMove={(event) => {
                        const item = event.currentTarget;
                        setTransform(item,event,x,y)
                    }} 
                    onPointerLeave={(event) => {
                    x.set(0)
                    y.set(0)
                }}
                key={link.path}
                style={{x, y}} >
                    <MotionLink
                        animate 
                        href={link.path}
                        className= {`relative font-medium sm:text-sm text-xs py-2 px-4 transition-all duration-500 ease-out hover:bg-zinc-900 rounded-md  
                        ${pathname === link.path ?" bg-zinc-900" : ""}
                        `}
                        >
                      <motion.span  style={{x: textX, y:textY}} className="z-10 relative heading" >{link.name}</motion.span>

                      {pathname === link.path ? (
                        <motion.div 
                            className="absolute w-full h-full rounded-md left-0 bottom-0 bg-zinc-900 "
                            transition={{type:"spring"}}
                            layout
                            layoutId="underline"
                            >
                        </motion.div>
                      ) : null }

                    </MotionLink>
                  </motion.li>
                )
            })}
          

            </AnimatePresence>
        </ul>
    </nav>
  )
}

export default nav