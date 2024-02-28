import {github, linkedin, twitter, discord, arrowicon } from "@/assets/index";
import {
    css,
    appwrite,
    git,
    html,
    javascript,
    cpp,
    motion,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    figma,
    shadcn,
    vite,
    threejs,
} from "@/assets/icons/index";


export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: appwrite,
        name: "Appwrite",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: cpp,
        name: "CPP",
        type: "Language",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
   
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: shadcn,
        name: "Shadcn",
        type: "UI Library",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Bundler",
    },
    {
        imageUrl: threejs,
        name: "Three JS",
        type: "UI Library" 
    },

   
];

export const projects = [
    {  
        name: 'zen-anime',
        description: 'Application which is One-stop hub for anime titles with ratings for effortless exploration.',
        live: 'https://zen-anime.vercel.app',
        live_name: 'zen-anime.vercel.app',
        github: 'https://github.com/SH3R1FF/zen_anime',
        tags: [
            {
              name: "Nextjs",
              
            },
            {
              name: "Typescript",
              
            },
            {
              name: "Server action",

            },
          ],
    },
    {  
        name: 'sumz-ai-summarizer',
        description: 'AI based Web application that condenses articles into concise summaries and saves time.',
        live: 'https://sumz-summarizer.netlify.app',
        live_name: 'sumz-summarizer.netlify.app',
        github: 'https://github.com/SH3R1FF/sumz-ai-summarizer',
        tags: [
            {
              name: "Reactjs",
              
            },
            {
              name: "Javascript",
              
            },
            {
              name: "Redux",
              
            },
          ],
    },
    {  
        name: 'hoobank-app',
        description: 'An Experience banking website with a sleek touch, offering a fully responsive design and modern UI/UX.',
        live: 'https://hoobank-sh.netlify.app',
        live_name: 'hoobank-sh.netlify.app',
        github: 'https://github.com/SH3R1FF/hooBank',
        tags: [
            {
              name: "Reactjs",
              
            },
            {
              name: "Javascript",
              
            },
            {
              name: "Tailwindcss",
              
            },
          ],
    },
    {  
        name: 'clime-app',
        description: 'Web Application which provides weather conditions for any city and to search for current weather.',
        live: 'https://clime-app.netlify.app',
        live_name: 'clime-app.netlify.app',
        github: 'https://github.com/SH3R1FF/clime',
        tags: [
            {
              name: "Reactjs",
              
            },
            {
              name: "Javascript",
              
            },
            {
              name: "WeatherApi",
              
            },
          ],
    },
    {  
        name: 'zenboard',
        description: 'Efficient Kanban board streamlining project management and tools for enhanced productivity.',
        live: 'https://zenboard-sh.netlify.app',
        live_name: 'zenboard-sh.netlify.app',
        github: 'https://github.com/SH3R1FF/zenboard',
        tags: [
            {
              name: "Nextjs",
              
            },
            {
              name: "Zustand",
              
            },
            {
              name: "Appwrite",
              
            },
          ],
    },
    {  
        name: 'dashboard',
        description: 'A user-friendly admin dashboard providing analytics,and management tools for administration.',
        live: 'https://dashboard-sh.netlify.app',
        live_name: 'dashboard-sh.netlify.app',
        github: 'https://github.com/SH3R1FF/dashboard-sh',
        tags: [
            {
              name: "Nextjs",
              
            },
            {
              name: "Javascript",
              
            },
            {
              name: "Chartjs",
              
            },
          ],
    },
 
];

export const socials = [

    {
        icon_url: twitter,
        link_name: "Twitter",
        link:"https://twitter.com/SheriffIgn",
        arrow: arrowicon
    },
    {
        icon_url: discord,
        link_name: "Discord",
        link:"https://discordapp.com/users/758311164618080316",
        arrow: arrowicon
    },
    {
        icon_url: github,
        link_name: "Github",
        link:"https://github.com/SH3R1FF",
        arrow: arrowicon
    },
    {
        icon_url: linkedin,
        link_name: "LinkedIn",
        link:"https://www.linkedin.com/in/himanshunageshwar",
        arrow: arrowicon
    }
]