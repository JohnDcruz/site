import Header from "../components/header"
import LinkIcons from "../components/linkIcons"

export default function Home() {
  return (
    <div>
      <Header title={'Home'}/>

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <a href='about' className='font-serif tracking-wide text-7xl mb-5 text-center'>
          john d&apos;cruz
        </a>
        <p className='text-2xl font-serif tracking-wide mb-5'>filmmaker. designer. developer.</p>
        <LinkIcons />
      </main>
    </div>
  )
}