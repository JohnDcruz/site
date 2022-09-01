import getFormattedDate from "../helpers/dateHelper";
import { useState } from 'react'
import ProjectDetail from "./projectDetail";

export default function ProjectCard({ project }) {

  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto my-4 overflow-hidden bg-no-repeat bg-cover text-center rounded-lg text-white w-4/5" style={{
      backgroundImage: `url(${'https:' + project.thumbnail.fields.file.url})`,
      height: '500px',
      }} onClick={() => setIsOpen(true)}>
        <div className="space-y-2 bg-black bg-opacity-60 w-full h-full px-12 py-48 flex flex-col items-center justify-center">
          <p className="text-3xl bg-opacity-100">{project.role} at {project.company}</p>
          <p>{getFormattedDate(project.start)} - {project.end ? getFormattedDate(project.end) : 'present'} | {project.location}</p>
        </div>
      </div>

      <ProjectDetail isOpen={isOpen} setIsOpen={setIsOpen} project={project}/>
    </>
  )
}