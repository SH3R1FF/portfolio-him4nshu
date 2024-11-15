import { Button } from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image"
import { socials } from '@/constants'

export default function Page() {
  return (
    <main className="max-container ">
      <h1 className="heading sm:text-7xl text-3xl font-black text-center animate-slidein opacity-0 [--slidein-delay:300ms] text-neutral-100">
        CONTACT
      </h1>
      <div className="mt-6 flex flex-col gap-3 text-slate-400 animate-slidein opacity-0 [--slidein-delay:400ms]">
          <p className=" text-center ">Let's connect and build something cool together!</p>
      </div>

        <div className="max-w-4xl flex flex-col sm:gap-8 gap-4 my-14 items-center justify-center animate-slidein opacity-0 [--slidein-delay:500ms]">        
            <Link 
             href='mailto:himanshunageshwar444@gmail.com' rel="noreferrer noopener" target="_blank"
            >  
              <Button className="flex flex-col relative overflow-hidden h-16 w-56 text-foreground box-border outline-none shadow-medium rounded-large cursor-pointer bg-white/5 dark:bg-default-400/10 border-neutral-800 border pText" type="button" role="button">
              {/* <Button className="flex flex-col relative overflow-hidden h-16 w-56 text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] border-neutral-800 border pText" type="button" role="button"> */}
                <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0 pt-2">
                <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                      <path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"></path><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"></path><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"></path><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"></path><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"></path><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"></path><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"></path>
                </svg>
                  </div>
                      <p className="text-base font-medium pText text-lime-300 ">Gmail</p>
                      <svg aria-hidden="true" fill="none" focusable="false" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18" className="text-white">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                </div>

              </Button>
            </Link>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">      
                  {socials.map((social) => (
                    <Link 
                     target="_blank"
                      href={social.link} 
                      key={social.link} 
                      >
                      <Button className="flex flex-col relative overflow-hidden h-16 w-56 text-foreground box-border outline-none shadow-medium rounded-large cursor-pointer bg-white/5 dark:bg-default-400/10 border-neutral-800 border pText" type="button" role="button" >
                      {/* <Button className="flex flex-col relative overflow-hidden h-16 w-56 text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] border-neutral-800 border pText" type="button" role="button" > */}
                        <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0 pt-2">
                          <div className="flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent">
    
                          <Image
                            src={social.icon_url}
                            alt={social.link_name}
                          />
                          
                          </div>
                          <p className="text-base font-medium text-lime-300">{social.link_name}</p>           
                            <Image
                            src={social.arrow}
                            alt={social.link_name}
                            className="text-white"
                          />
                          </div>    
                      </Button>
                    </Link>
                  ))}
                            
                </div>
          </div>
    </main>
  )
}