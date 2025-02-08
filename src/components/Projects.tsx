import React from 'react'
import { Project } from '../types'

interface ProjectsProps {
    projectsArr: Project[],
    selected: number,
    handleProjectSelect: (index:number) => void
}

const Projects: React.FC<ProjectsProps> = ( { projectsArr, selected, handleProjectSelect  }) => {
    const description = (
        <div className='text-left pb-5'>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
    )

    return (
        <div className="w-full p-5 col-span-4 border-r border-neutral-700">
        <h2 className={`font-bold dark:text-neutral-400`}>PROJECTS</h2>
        <div className="mt-5 border-t border-neutral-700">
            {projectsArr.map((project, index) => {
                return (
                    <button 
                        key={project.name} 
                        className="w-full border-b border-neutral-700 text-lg flex flex-col cursor-pointer"
                        onClick={() => handleProjectSelect(index)}
                    >
                        <div className='w-full flex justify-between items-center'>
                            <div className="flex gap-4 items-center">
                                {/* <StarIcon className="blur-[1px]"/> */}
                                <div className={`${index === selected && "underline"} py-6 text-2xl font-bold`}>{project.name}</div>
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