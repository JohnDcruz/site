import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faInfo, faFilm } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NavButtons({ showText, title }) {
  return (
    <span>
      <Link href='/about'>
        <button id='aboutButton' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
          <FontAwesomeIcon icon={faInfo} />{showText ? '\u2002About' : ''}
        </button>
      </Link>
      {/* LEAVE OUT FOR GIT PUSH
      <Link href='/portfolio/media'>
        <button id='mediaButton' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
          <FontAwesomeIcon icon={faFilm} />{showText ? '\u2002Media Portfolio' : ''}
        </button>
      </Link>
      <Link href='/portfolio/dev'>
        <button id='devButton' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
          <FontAwesomeIcon icon={faCode} />{showText ? '\u2002Development Portfolio' : ''}
        </button>
      </Link> */}
    </span>
  )
}