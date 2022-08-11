import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header title={'404'} />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <h1 className='font-serif tracking-wide text-4xl mb-10 text-center'>
          We couldn&apos;t find that page! But consider one of these:
        </h1>
        <span>
          <a href='about' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-white text-slate-800 hover:bg-slate-100'>
            <i className="fa-solid fa-info"></i>&nbsp;&nbsp;&nbsp;About
          </a>
          <a href='portfolio/media' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-white text-slate-800 hover:bg-slate-100'>
            <i className="fa-solid fa-film"></i>&nbsp;&nbsp;&nbsp;Media Portfolio
          </a>
          <a href='portfolio/dev' className='text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-white text-slate-800 hover:bg-slate-100'>
            <i className="fa-solid fa-code"></i>&nbsp;&nbsp;&nbsp;Development Portfolio
          </a>
        </span>
      </main>
    </div>
  )
}