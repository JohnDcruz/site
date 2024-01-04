import { useRouter } from 'next/router';
import Header from '../../components/header';
import data from '../../data.json';

export default function DevPage() {
  const router = useRouter()
  const { id } = router.query
  const project = data.cs_projects.find((project) => project.id === id);

  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={project ? project.title : 'CS Project'} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="m-5">
          <p className='font-bold text-4xl text-center'>{project.title} coming soon...</p>
        </div>
      </main>
    </div>
  )
}