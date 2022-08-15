import Header from "../components/header"
import NavButtons from "../components/navbuttons"

export default function Home() {
  return (
    <div>
      <Header title={'404'} />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <h1 className='font-serif tracking-wide text-4xl mb-10 text-center'>
          We couldn&apos;t find that page! But consider one of these:
        </h1>
        <NavButtons showText={true}/>
      </main>
    </div>
  )
}