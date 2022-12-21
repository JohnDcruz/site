import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Tooltip } from "flowbite-react";

export default function LinkIcons() {
  return (
    <div className="flex gap-2">
      <Tooltip content='New York Metropolitan Area' placement="bottom">
        <button id='locationButton' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
          <FontAwesomeIcon icon={faLocationDot} />
        </button>
      </Tooltip>
      <Tooltip content='johndcruz@johndcruz.com' placement="bottom">
        <Link href='mailto:johndcruz@johndcruz.com'>
          <button id='emailButton' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
            <FontAwesomeIcon icon={faEnvelope} />
        </button>
        </Link>
      </Tooltip>
      <Tooltip content='Github' placement="bottom">
        <Link href='https://github.com/johndcruz'>
          <button id='githubButton' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </Link>
      </Tooltip>
      <Tooltip content='LinkedIn' placement="bottom">
        <Link href='https://www.linkedin.com/in/john-d-cruz-1225011b0/'>
          <button id='linkedinButton' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-300'>
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </Link>
      </Tooltip>
    </div>
  )
}