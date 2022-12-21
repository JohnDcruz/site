import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header title={'Coming Soon'} />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <h1 className='font-serif tracking-wide text-4xl mb-10 text-center'>
          I&apos;m still working on this page, but it&apos;ll be here soon. In the meantime, let&apos;s get you home...
        </h1>
        <meta httpEquiv="refresh" content="2;URL='/'" />    
      </main>
    </div>
  )
}