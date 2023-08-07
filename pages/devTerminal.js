import { fetchWork } from "../config/fetchData";
import BackButton from "../components/backButton";
import Header from "../components/header";
import { useState } from 'react'
import ProjectDetail from "../components/dev/projectDetail";
import DevTerminal from "../components/dev/terminal";
import TerminalPopup from "../components/dev/terminalPopup";

function Dev({ projects }) {
  let [isOpenProject, setIsOpenProject] = useState(false);
  let [isOpenPopup, setIsOpenPopup] = useState(true);
  let [currentProject, setCurrentProject] = useState();
  const Terminal = DevTerminal;

  return (
    <div className='min-h-screen min-w-screen'>
      <Header title={"Dev Work"} />
      <ProjectDetail isOpen={isOpenProject} setIsOpen={setIsOpenProject} project={currentProject} />
      <Terminal projects={projects} setIsOpen={setIsOpenProject} setCurrentProject={setCurrentProject} />
      <TerminalPopup isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} />
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