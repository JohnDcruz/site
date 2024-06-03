import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faImdb } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
    <div>
      <Header title={'Home'}/>
      <GoogleAnalytics gaId='G-GHQ9WRFG4H' />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center relative space-y-5'>
        <p className='font-serif tracking-wide text-7xl text-center mb-2 hover:text-red-400'>
          <Link href='about'>
            john d&apos;cruz
          </Link>
        </p>
        <p className='text-3xl font-serif tracking-wide'>
          <span className='hover:text-blue-400'><Link href='/film'>filmmaker</Link></span>
          <span className='mx-2'>|</span>
          <span className='hover:text-green-400'><Link href='/terminal'>developer</Link></span>
        </p>
        <div className="flex gap-4 text-2xl">
          <Link href='mailto:johndcruz@johndcruz.com' rel="noopener noreferrer" target="_blank">
            <button id='emailButton' className='mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </Link>
          <Link href='https://www.imdb.com/name/nm14679028' rel="noopener noreferrer" target="_blank">
            <button id='imdbButton' className='mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
              <FontAwesomeIcon icon={faClapperboard} />
            </button>
          </Link>
          <Link href='https://github.com/johndcruz' rel="noopener noreferrer" target="_blank">
            <button id='githubButton' className='mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </Link>
          <Link href='https://www.linkedin.com/in/john-d-cruz-1225011b0/' rel="noopener noreferrer" target="_blank">
            <button id='linkedinButton' className='mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}