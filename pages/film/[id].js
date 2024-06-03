import { useRouter } from 'next/router'
import Header from '../../components/header'
import data from '../../data.json'
import { Carousel, Modal } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function FilmPage() {
  const router = useRouter()
  const { id } = router.query;
  const film = data.film_projects.find((project) => project.id === id);

  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={film ? film.title : 'Film Project'} />
      <GoogleAnalytics gaId='G-GHQ9WRFG4H' />
      
      <main className='mx-auto flex bg-slate-800 items-center text-white justify-center h-full'>
        {film ? (
          <div className='w-full'>
            {film.images && film.images.length > 0 ? (
              <Carousel slide={false} className='mb-10'>
                {film.images.map((image, index) => (
                  <div key={index} className='flex justify-center items-center relative' style={{height: '500px'}}>
                    <Image src={'/film_images/' + film.id + '/' + image} alt={film.title} fill={true} className='object-cover' />
                  </div>
                ))}
              </Carousel>
            ) : null}
            <div className='flex flex-col items-center justify-center space-y-2 m-5'>
              <p className='font-bold text-4xl text-center'>{film.title}</p>
              <p className='text-2xl text-center italic'>dir. {film.director}, {film.year} | {film.status}</p>
              <p className='text-xl text-center'>{film.role}</p>
            </div>
            <hr />
            <div className='flex flex-col justify-start text-left space-y-2 m-5'>
              {film.details ? (
                <div className='space-y-2 mb-2'>
                  <p className='font-bold text-lg'>About the Film</p>
                  <div className='space-y-2'>
                    {film.logline ? (<p>Logline: {film.logline}</p> ) : null}
                    {film.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              ) : null}
              {film.responsibilities ? (
                <div className='space-y-2'>
                  <p className='font-bold text-lg'>Responsibilities</p>
                  <div className='space-y-1'>{film.responsibilities.map((responsibility) => (
                    <p key={responsibility}>- {responsibility}</p>
                  ))}</div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </main>
    </div>
  )
}