import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header title={'Coming Soon'} />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <h1 className='font-serif tracking-wide text-4xl mb-10 text-center'>
          Please excuse our appearance while we renovate.
        </h1>
        <meta httpEquiv="refresh" content="2;URL='/'" />    
      </main>
    </div>
  )
}