import { fetchWork } from "../config/fetchData";
import BackButton from "../components/backButton";
import Header from "../components/header";
import { Tooltip } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ProjectDetail from "../components/dev/projectDetail";
import { useState } from "react";

function Dev({ projects }) {
  let [isOpen, setIsOpen] = useState(false);
  let [currentProject, setCurrentProject] = useState();

  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={"Dev Work"} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="w-4/5">
          <BackButton />
          {projects.map((project) => (
            <div className="container mx-auto mb-7 overflow-hidden bg-no-repeat bg-cover text-center rounded-lg text-white" key={project.project} style={{
            backgroundImage: `url(${'https:' + project.thumbnail.fields.file.url})`,
            height: '500px',
            }} onClick={() => {
              setIsOpen(true);
              setCurrentProject(project)
            }}>
              <div className="space-y-2 bg-black bg-opacity-0 hover:bg-opacity-60 opacity-0 hover:opacity-100 opw-full h-full px-12 py-48 flex flex-col items-center justify-center">
                <p className="text-3xl">{project.project}</p>
              </div>
            </div>
          ))}
          <div className='fixed bottom-0 right-0 m-8'>
            <Tooltip content='Click to use the terminal' placement="left" className='w-max'>
              <Link href='/devTerminal'>
                <button id='infoButton' className='text-xl font-semibold text-slate-100'>
                  <FontAwesomeIcon icon={faTerminal} />
                </button>
              </Link>
            </Tooltip>
          </div>
        </div>
      </main>
      <ProjectDetail isOpen={isOpen} setIsOpen={setIsOpen} project={currentProject} />
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