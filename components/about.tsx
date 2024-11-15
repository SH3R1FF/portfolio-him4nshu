import React from 'react'
import Skills from "@/components/skills"


const about = () => {
  return (
    <>
        <section className="relative flex-col max-w-5xl mx-auto sm:p-16 pb-12 lg:block px-8 sm:min-h-[calc(100vh-80px)] md:min-h-[100vh] min-h-[100vh] flex  opaaaaa">
            <div>
                <h1 className="heading sm:text-7xl text-3xl font-black text-center animate-slidein opacity-0 [--slidein-delay:300ms] text-neutral-100">
                    ABOUT
                </h1>
                <div className="mt-5 flex flex-col gap-3 text-slate-400 animate-slidein opacity-0 [--slidein-delay:300ms]">
                    <p className="text-base text-justify sm:text-center">Passionate and detail-oriented Web Developer with a strong foundation in programming and a passion for
                    creating user-friendly, scalable, and efficient web applications. I am eager to apply my technical skills and
                    knowledge to contribute to a dynamic development team.</p>
                </div>
            </div>
            
            <div className='grid mt-8 sm:grid-cols-2 grid-cols-1  text-black gap-4 h-[400px] sm:mx-32 heading'>
              <div className='rounded-xl flex flex-col items-center justify-center border backdrop-blur-2xl bg-zinc-800/30 border-neutral-800 text-lime-300 '>
                <span className='text-3xl mb-2'>  
                  🚀
                </span>
               <h3>
                Web Development
               </h3>
              </div>
              <div className='rounded-xl flex flex-col items-center justify-center border backdrop-blur-2xl bg-zinc-800/30 border-neutral-800 text-lime-300'>
              <span className='text-3xl mb-2'>  
                💻  
              </span>
                Web Design
              </div>
              <div className='rounded-xl flex flex-col items-center justify-center border backdrop-blur-2xl bg-zinc-800/30 border-neutral-800 text-lime-300'>
              <span className='text-3xl mb-2'>    
                📈
              </span>
                10+ PROJECTS
              </div>
              <div className='rounded-xl flex flex-col items-center justify-center border backdrop-blur-2xl bg-zinc-800/30 border-neutral-800 text-lime-300'>
              <span className='text-3xl mb-2'>  
                📊    
              </span>
              SCALABLITY
              </div>
            </div>

            <Skills/>
            </section>   
             
    </>
  )
}

export default about