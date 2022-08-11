import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  return (
    <div>
      <Header title={'Home'}/>

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <a href='about' className='font-serif tracking-wide text-7xl mb-10 text-center'>
          John D&apos;cruz
        </a>
        <span>
          <a href='about' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-white text-slate-800 hover:bg-slate-100'>
            <i className="fa-solid fa-info"></i>
          </a>
          <a href='portfolio/media' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-white text-slate-800 hover:bg-slate-100'>
            <i className="fa-solid fa-film"></i>
          </a>
          <a href='portfolio/dev' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-white text-slate-800 hover:bg-slate-100'>
            <i className="fa-solid fa-code"></i>
          </a>
        </span>
      </main>
    </div>
  )
}