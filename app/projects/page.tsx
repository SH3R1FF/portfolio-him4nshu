"use client"

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Skeleton, Button, Chip, Avatar} from "@nextui-org/react";
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
      <h1 className="heading sm:text-7xl text-3xl font-black text-center animate-slidein opacity-0 [--slidein-delay:300ms]">
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
                 height={40}
                 radius="sm"
                 src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                 width={40}
                 />
               <div className="flex flex-col">
                 <p className="text-md text-white">{project.name}</p>
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
            <Skeleton className="rounded-lg dark:bg-zinc-800/30 dark bg-zinc-800/30 " isLoaded={isLoaded}>
              
             <CardBody>
               <p className="text-slate-400 py-2 text-sm">{project.description}</p>
             </CardBody>

             <CardBody className="flex flex-row gap-x-2">      
                {project.tags.map((tags) => (
                  <Chip  className={`text-white bg-zinc-800/30 border-neutral-800 max-sm:text-xs`} key={tags.name}>
                      {tags.name}
                  </Chip>
                ))}
             </CardBody>

            </Skeleton>
             <Divider className="bg-slate-50/20"/>
             <CardFooter>
               <Link
                 isExternal
                 showAnchorIcon
                 href={project.github}
                 >
                 Visit source code on GitHub.
               </Link>
             </CardFooter>
           </Card>
 
          ))}

      </div>

      <div className='mt-32 mb-16 flex gap-2 justify-center items-center '>
                <Modal />
                <Button onClick={damn}>
                    Back to Top ↑
                </Button>
            </div>
    </main>
  )
}