import React from 'react'
import { Project } from '../types'

interface ProjectsProps {
    projectsArr: Project[],
    selected: number
}

const Projects: React.FC<ProjectsProps> = ( { projectsArr, selected  }) => {

    return (
        <div className="w-full p-5 col-span-4 border-r border-neutral-700">
        <h2 className={`font-bold dark:text-neutral-400`}>PROJECTS</h2>
        <div className="mt-5 border-t border-neutral-700">
            {projectsArr.map((project, index) => {
                return (
                    <div key={project.name} className="border-b border-neutral-700 text-lg flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            {/* <StarIcon className="blur-[1px]"/> */}
                            <div className={`${index === selected && "underline"} py-6 text-2xl font-bold`}>{project.name}</div>
                        </div>
                        <div className="border border-neutral-700 px-3 rounded-full">{project.year}</div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Projects