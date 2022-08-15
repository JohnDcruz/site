import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faInfo, faFilm } from "@fortawesome/free-solid-svg-icons";

export default function NavButtons({ showText }) {
  let text = { about: '', media: '', dev: '' };
  if (showText) {
    text = { about: '\u2002About', media: '\u2002Media Portfolio', dev: '\u2002Development Portfolio' };
  }
  return (
    <span>
      <a href='/about' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-100'>
        <FontAwesomeIcon icon={faInfo} />{text.about}
      </a>
      <a href='/portfolio/media' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-100'>
        <FontAwesomeIcon icon={faFilm} />{text.media}
      </a>
      <a href='/portfolio/dev' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-100'>
        <FontAwesomeIcon icon={faCode} />{text.dev}
      </a>
    </span>
  )
}