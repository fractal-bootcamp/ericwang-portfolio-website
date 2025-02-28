import React from 'react'
import { Project } from '../types'
import '../App.css'
import { useTheme } from '../components/theme/ThemeProvider'

interface ProjectsProps {
    projectsArr: Project[],
    selected: number,
    handleProjectSelect: (index:number) => void
}

const Projects: React.FC<ProjectsProps> = ( { projectsArr, selected, handleProjectSelect  }) => {
    const { theme } = useTheme()

    const description = (
        <div className='text-left pb-5'>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
    )

    return (
        <div className="w-full col-span-4 border-r border-neutral-700 h-full overflow-y-auto">
            <div className={`sticky top-0 p-5 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}>
                <div className='overlay absolute top-0 left-0 w-full h-full'></div>
                <h2 className={`font-bold dark:text-neutral-400`}>PROJECTS</h2>
            </div>
            <div className="border-neutral-700 px-5 pb-5 overflow-y-auto">
                {projectsArr?.map((project, index) => {
                    return (
                        <button 
                            key={project.name} 
                            className={`w-full border-b ${index === 0 ? 'border-t' : ''} border-neutral-700 text-lg flex flex-col cursor-pointer`}
                            onClick={() => handleProjectSelect(index)}
                        >
                            <div className='w-full flex gap-4 justify-between items-center'>
                                <div className="flex gap-4">
                                    {/* <StarIcon className="blur-[1px]"/> */}
                                    <div className={`${index === selected && "underline"} py-6 text-2xl font-bold text-left`}>{project.name}</div>
                                </div>
                                <div className="border border-neutral-700 px-3 rounded-full">{project.year}</div>
                            </div>
                            {index === selected && description}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects