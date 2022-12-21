import { fetchWork } from "../config/fetchData";
import BackButton from "../components/backButton";
import ProjectCard from "../components/portfolio/projectCard";
import Header from "../components/header";
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}

function Dev({ work }) {
  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={"Dev Work"} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="w-4/5">
          <BackButton />
          <Terminal
            commands={commands}
            welcomeMessage={"Welcome to my dev work!"}
            promptLabel={"visitor:~$"}
          />
          {work.map((job) => (
            <ProjectCard key={job.company} project={job} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() { 
  const workRes = await fetchWork({ type: 'work', category: 'Development' });
  const work = await workRes.map((p) => {
    return p.fields
  });
  const id = await workRes.map((p) => {
    return p.sys.id
  });
  return {
    props: {
      work,
    },
  };

}

export default Dev;