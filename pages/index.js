import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Tooltip } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <Header title={'Home'}/>

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center relative'>
        <p className='font-serif tracking-wide text-7xl mb-6 text-center hover:text-red-400'>
          {/* <Link href='about'> */}
            john d&apos;cruz
          {/* </Link> */}
        </p>
        <p className='text-2xl font-serif tracking-wide mb-5'>
          {/* <span className='hover:text-blue-400'><Link href='/film'>filmmaker.</Link>&nbsp;</span>
          <span className='hover:text-green-400'><Link href='/dev'>developer.</Link>&nbsp;</span>
          <span className='hover:text-yellow-400'><Link href='/about'>student.</Link></span> */}
          <span className='hover:text-blue-400'>filmmaker.&nbsp;</span>
          <span className='hover:text-green-400'>developer.&nbsp;</span>
          <span className='hover:text-yellow-400'>student.</span>
        </p>
        <div className="flex gap-2 mb-5">
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
        {/* <div className='absolute bottom-0 left-0 m-5'>
          <Tooltip content='Click on anything to learn more!' placement="right" className='w-max'>
            <button id='infoButton' className='text-xl font-semibold text-slate-100'>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </button>
          </Tooltip>
        </div> */}
      </main>
    </div>
  )
}