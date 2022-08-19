import Navbar from "../navbar"
import ProjectCard from "./projectCard"

export default function PortfolioPage({ category, work }) {
  return (
    <div>
      <Navbar title={category + ' Portfolio'} />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        {work.map((job) => (
          <ProjectCard key={job.company} project={job} />
        ))}
      </main>
    </div>
  )
}