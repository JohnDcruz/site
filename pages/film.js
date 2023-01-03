import { fetchWork } from "../config/fetchData";
import BackButton from "../components/backButton";
import Header from "../components/header";
import ProjectDetail from "../components/film/projectDetail";
import { useState } from "react";

function Film({ projects }) {
  let [isOpen, setIsOpen] = useState(false);
  let [currentProject, setCurrentProject] = useState();

  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={"Film Work"} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="w-4/5">
          <BackButton />
          {projects.map((project) => (
            <div className="container mx-auto mb-7 overflow-hidden bg-no-repeat bg-cover text-center rounded-lg text-white cursor-pointer" key={project.project} style={{
            backgroundImage: `url(${'https:' + project.thumbnail.fields.file.url})`,
            height: '500px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }} onClick={() => {
              setIsOpen(true);
              setCurrentProject(project)
            }}>
              <div className="space-y-2 bg-black bg-opacity-0 hover:bg-opacity-80 opacity-0 hover:opacity-100 opw-full h-full px-12 py-48 flex flex-col items-center justify-center">
                <p className="text-3xl">{project.project}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <ProjectDetail isOpen={isOpen} setIsOpen={setIsOpen} project={currentProject} />
    </div>
  )
}

export async function getStaticProps() { 
  const projectRes = await fetchWork({ type: 'filmWork' });
  const projects = await projectRes.map((p) => {
    return p.fields
  });
  return {
    props: {
      projects,
    },
  };

}

export default Film;