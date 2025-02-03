import React from 'react'
import Projects from './Projects'
import Gallery from './Gallery'
import { useState, useEffect } from 'react'
import {getProjects} from '../sanityHelpers.ts'
import { Project } from '../types'

const ProjectViewer = () => {
    const [projectsArr, setProjectsArr] = useState<Project[]>([])
    const [selected, setSelected] = useState(0)

    // get projects from Sanity
    useEffect(() => {
        getProjects().then(result => {
            setProjectsArr(result)
        })
    }, [])

    const handleProjectSelect = ( index:number ) => {
        setSelected(index)
    }

    return (
        <>
            <Projects projectsArr={projectsArr} selected={selected} handleProjectSelect={handleProjectSelect} />
            <div className="w-full overflow-y-auto col-span-6 px-5 pb-5 sm:p-4">
                <h2 className={`font-bold pb-5 dark:text-neutral-400`}>PROJECT DETAIL</h2>
                <Gallery selectedImgUrl={projectsArr[selected]?.image.asset.url} />
            </div>
        </>
    )
}

export default ProjectViewer