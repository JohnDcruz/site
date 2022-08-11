import Header from "../components/header"

export default function About() {
  return (
    <div>
      <Header title={'About'} />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <h1>
          About
        </h1>
      </main>
    </div>
  )
}