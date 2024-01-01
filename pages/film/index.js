import Header from "../../components/header";
import data from '../../data.json';
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

function Film() {
  const projects = data.film_projects.filter((project) => project.own_page === true);
  const router = useRouter();

  return (
    <div className='min-h-screen bg-center bg-cover bg-no-repeat bg-film-grain'>
      <Header title={"Film Work"} />
      <div className="items-left text-left justify-left text-white absolute top-0 left-0">
        <Link href='/' id='homeButton'>
          <button id='backButton' className='text-xl m-7 rounded-full border-0 font-semibold hover:text-slate-400'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
      </div>
      <main className='mx-auto p-10 flex flex-col items-center text-white justify-center h-full'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5 justify-center items-center">
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