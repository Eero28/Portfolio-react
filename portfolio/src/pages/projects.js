import React from 'react'
import ProjectItem from '../components/ProjectItem'
import {projectList} from "../helpers/ProjectList"
function Projects() {
  return (
    <section className='projects'>
      <h1 className='projectsHeader'> My projects</h1>
      <div className='projectList'>
        {projectList.map((project, index) => {
          return <ProjectItem key={index} id={index} name={project.name} image={project.image} date={project.date}/>
        })}
      </div>
    </section>
  )
}

export default Projects