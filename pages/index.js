import Header from "../components/header"
import NavButtons from "../components/navbuttons"

export default function Home() {
  return (
    <div>
      <Header title={'Home'}/>

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <a href='about' className='font-serif tracking-wide text-7xl mb-10 text-center'>
          John D&apos;cruz
        </a>
        <NavButtons showText={false}/>
      </main>
    </div>
  )
}