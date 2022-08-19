export default function ProjectCard({ project }) {
  return (
    <div className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
    style={{
      backgroundImage: `url(${project.thumbnail ? 'https:' + project.thumbnail.fields.file.url : ''})`,
      height: `400px`,
    }}>
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
      <div className="flex justify-center items-center h-full">
        <div className="text-white">
          <p>{project.role} at {project.company} from {project.start} to {project.end ? project.end : 'present'} in {project.location}</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}