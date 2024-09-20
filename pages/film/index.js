import Header from "../../components/header";
import data from '../../data.json';
import { useRouter } from "next/router";
import Image from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google'

function Film() {
  const stormy = data.film_projects.filter((project) => project.id === 'stormy')[0];
  const projects = data.film_projects.filter((project) => project.own_page === true).sort((a, b) => (a.year < b.year) ? 1 : -1).filter((project) => project.id !== 'stormy');
  const router = useRouter();

  return (
    <div className='min-h-screen bg-center bg-cover bg-no-repeat bg-film-grain'>
      <Header title={"Film Work"} />
      <GoogleAnalytics gaId='G-GHQ9WRFG4H' />

      <main className='mx-auto p-10 flex flex-col items-center text-white justify-center h-full w-full'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5 justify-center items-center">
          <div className="cursor-pointer grayscale-0 md:grayscale md:hover:grayscale-0 col-span-3" key={stormy.id} onClick={() => router.push('/film/' + stormy.id)}>
            <Image src={'/film_images/' + stormy.id + '/thumb.jpg'} alt={stormy.title} width={1920} height={500} className="rounded-lg" />
          </div>
          {projects.map((film) => (
            <div className="cursor-pointer grayscale-0 md:grayscale md:hover:grayscale-0" key={film.id} onClick={() => router.push('/film/' + film.id)}>
              <Image src={'/film_images/' + film.id + '/thumb.jpg'} alt={film.title} height={1000} width={1000} className="rounded-lg" />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Film;