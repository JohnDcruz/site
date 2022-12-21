import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function BackButton() {
  return (
    <div className="items-left text-left justify-left text-white">
    <Link href='/' id='homeButton'>
      <button id='backButton' className='text-xl my-7 rounded-full border-0 font-semibold hover:text-slate-400'>
        <FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;&nbsp;Home
      </button>
    </Link>
  </div>
  )
}