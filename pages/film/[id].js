import { useRouter } from 'next/router'
import Header from '../../components/header'
import data from '../../data.json'
import { Carousel } from 'flowbite-react'

export default function FilmPage() {
  const router = useRouter()
  const { id } = router.query;
  const project = data.film_projects.find((project) => project.id === id);

  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={project ? project.title : 'Film Project'} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="m-5">
          
        </div>
      </main>
    </div>
  )
}