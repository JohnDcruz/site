import { fetchWork } from "../config/fetchData";
import BackButton from "../components/backButton";
import Header from "../components/header";
import { useState } from 'react'
import ProjectDetail from "../components/dev/projectDetail";
import DevTerminal from "../components/dev/devTerminal";
  
function Dev({ projects }) {
  let [isOpen, setIsOpen] = useState(false);
  let [currentProject, setCurrentProject] = useState();
  const Terminal = DevTerminal;

  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={"Dev Work"} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="w-4/5 flex-none">
          <BackButton />
          <ProjectDetail isOpen={isOpen} setIsOpen={setIsOpen} project={currentProject} />
          <Terminal projects={projects} setIsOpen={setIsOpen} setCurrentProject={setCurrentProject} />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() { 
  const projectRes = await fetchWork({ type: 'devWork' });
  const projects = await projectRes.map((p) => {
    return p.fields
  });
  return {
    props: {
      projects,
    },
  };

}

export default Dev;