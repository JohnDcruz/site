import ProjectCard from "./projectCard";

export default function PortfolioPage({ category, work }) {
  return (
    <div>
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-center text-white justify-center p-10'>
        <h1 className='text-6xl my-4 mb-8'>
          {category} Portfolio
        </h1>
        {work.map((job) => (
          <ProjectCard key={job.company} project={job} />
        ))}
      </main>
    </div>
  )
}