import React from 'react'
import { useParams } from "react-router-dom"
import { projectList } from "../helpers/ProjectList"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom"

function ProjectDisplay() {
  // useParams to get unique id
  const { id } = useParams();
  const project = projectList[id]

  return (
    <section className='project'>
      <h1>{project.name}</h1>
      {project.video ? (
        <iframe
          className='videoframe'
          src={project.video}
          title="Video"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true">
        </iframe>
      ) : (
        <p>No video available yet!</p>
      )}
      <h1>Used techologies</h1>
      <p>{project.skills}</p>
      <h1>About</h1>
      <p>{project.about}</p>
      <div>
        <a href={project.link}><GitHubIcon /><label>source code</label></a>
      </div>
      <Link className='link' to={"/projects"}><button>Back to Projects</button></Link>
    </section>
  )
}

export default ProjectDisplay