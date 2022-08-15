import Navbar from "../components/navbar"
import { fetchData } from "../config/fetchData";

function About({ data }) {
  return (
    <div>
      <Navbar title={'About'} />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <h1>
          About
        </h1>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchData()
  const data = await res.map((p) => {
    return p.fields
  })
  return {
    props: {
      data,
    },
  };
}

export default About;