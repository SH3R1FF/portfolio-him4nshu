"use client"

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Skeleton, Button, Chip, Avatar, Tooltip} from "@nextui-org/react";
import { projects } from "@/constants"
import { useEffect,useState } from "react";
import Modal from "@/components/Modal"
export default function Page() {

  const [isLoaded, setIsLoaded] = useState(false);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const damn = () => (

    window.scrollTo({top: 0, behavior: 'smooth'})

  )

  return (
    
    <main className="max-container ">
      <h1 className="heading sm:text-7xl text-3xl font-black text-center animate-slidein opacity-0 [--slidein-delay:300ms] text-neutral-100">
          PROJECTS
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-400 animate-slidein opacity-0 [--slidein-delay:300ms]">
          <p className="text-base text-justify sm:text-center">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
      </div>
      
      <div className="flex flex-wrap my-20 gap-16 sm:gap-[90px] sm:gap-y-[60px]">

          {projects.map( (project) => (
             <Card 
              // className="max-w-[400px] font-sans dark:bg-zinc-800/30 bg-gradient-to-b dark:from-inherit dark:border-neutral-800  border"
              className="max-w-[400px]  bg-zinc-800/30 bg-gradient-to-b from-inherit  border-neutral-800 border"
              key={project.name}
             >    
             <CardHeader className="flex gap-3">
               <Image
                 alt="nextui logo"
                 height={30}
                 radius="sm"
                 src={project.logo}
                 width={30}
                 />
               <div className="flex flex-col">
                 <p className="text-lg text-white">{project.name}</p>
                 <Link 
                   className="text-small cursor-pointer font-extralight text-lime-300"
                   href={project.live}
                   isExternal
                   >
                   {project.live_name}
                 </Link>
                 
               </div>
             </CardHeader>
             <Divider className="bg-slate-50/20"/>

            {/* <Skeleton className="bg-zinc-800 " isLoaded={isLoaded}> */}
              
             <CardBody>
               <p className="text-slate-400 py-2 text-sm">{project.description}</p>
             </CardBody>

             <CardBody className="flex flex-row gap-x-4 ">    
                
                  {project.tech.map((tech) => (
                    <Tooltip  className={`text-lime-100 bg-zinc-800/30 border-neutral-800 max-sm:text-xs mx-2 `} key={tech.name} content={tech.name}>

                      <Image
                        src={tech.link}
                        alt={tech.name}
                        className="h-[20px] w-[20px] lg:h-[26px] lg:w-[26px] "
                        />
                        
                  </Tooltip>
                  ))}
        
             </CardBody>

            {/* </Skeleton> */}

             <Divider className="bg-slate-50/20"/>

             <CardFooter>
               <Link
                 isExternal
                 showAnchorIcon
                 href={project.github}
                 className="text-blue-700"
                 >
                 Visit source code on GitHub.
               </Link>
             </CardFooter>
           </Card>
 
          ))}

      </div>

      <h2 className="lg:text-xl text-sm text-center flex gap-2 justify-center items-center animate-bounce text-neutral-200">
        <p className="animate-pulse">
          🚀
          {/* 🔴 */}
        
        </p>
        <p>
          Exciting Projects Launching Soon!
        </p>
      </h2>

      <div className='mt-32 mb-16 flex gap-2 justify-center items-center '>
        <Modal />
        <Button onClick={damn}>
            Back to Top ↑
        </Button>
      </div>
    </main>
  )
}