import Image from 'next/image'
import Header from "../components/header"
import { Accordion } from "flowbite-react";
import profile from '../public/profile.webp'
import data from '../data.json'
import Link from 'next/link';

function About() {
  const about = data.about;
  const work = data.work;
  const skills = data.skills;
  const student_film_projects = data.film_projects.filter((project) => project.student);
  const professional_film_projects = data.film_projects.filter((project) => !project.student);
  const cs_projects = data.cs_projects;

  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={"About"} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="m-5">
          <div className='flex'>
            <div style={{minHeight: '400px', minWidth: '400px'}} className='w-3/12 relative hidden md:block'>
              <Image src={profile} alt="Profile" layout="fill" objectFit="cover" />
            </div>
            <div className='md:w-9/12 w-full md:ml-10 space-y-3 flex flex-col items-center text-center justify-center'>
              <h1 className='text-6xl'>
                John D&apos;cruz
              </h1>
              <p className='text-lg'>
                {about.description}
              </p>
              <p className='text-xl mt-4'><span>Right now, John is </span>
              <span className='text-red-400'>{about.red}, </span>
              <span className='text-blue-400'>{about.blue}, </span>
              <span className='text-green-400'>{about.green}, </span>
              <span className='text-yellow-400'>and {about.yellow}.</span></p>
            </div>
          </div>
          <div className='mt-5'>
            <Accordion alwaysOpen={true} flush={true} collapseAll={true}>
              <Accordion.Panel>
                  <Accordion.Title className="text-2xl text-white">
                    Experience
                  </Accordion.Title>
                  <Accordion.Content className='space-y-4'>
                    {work.map((job) => (
                      <div key={job.company}>
                        <p className='font-bold'>{job.role} at {job.company}</p>
                        <p className='font-light'>{job.start} - {job.end} | {job.location}</p>
                        <p>{job.details}</p>
                      </div>
                    ))}
                  </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                  <Accordion.Title className="text-2xl text-white">
                    Films
                  </Accordion.Title>
                  <Accordion.Content className='space-y-4'>
                    <div className='space-y-1'>
                      <p className='font-bold'>Non-Student Films</p>
                      {professional_film_projects.map((film) => ( film.own_page ? 
                        (<Link key={film.id} href={`/film/${film.id}`}>
                          <p className='hover:underline cursor-pointer'>{film.title} (dir. {film.director}, {film.year}) - {film.role}</p>
                        </Link>) :
                        (<div key={film.id}>
                          <p>{film.title} (dir. {film.director}, {film.year}) - {film.role}</p>
                        </div>)
                      ))}
                    </div>
                    <div className='space-y-2'>
                      <p className='font-bold'>Student Films</p>
                      {student_film_projects.map((film) => ( film.own_page ?
                        (<Link key={film.id} href={`/film/${film.id}`}>
                          <p className='hover:underline cursor-pointer'>{film.title} (dir. {film.director}, {film.year}) - {film.role}</p>
                        </Link>) :
                        (<div key={film.id}>
                          <p>{film.title} (dir. {film.director}, {film.year}) - {film.role}</p>
                        </div>)
                      ))}
                    </div>
                  </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                  <Accordion.Title className="text-2xl text-white">
                    Development Projects
                  </Accordion.Title>
                  <Accordion.Content className='space-y-2'>
                    {cs_projects.map((project) => (
                      <Link key={project.id} href={`/dev/${project.id}`}>
                        <p className='font-bold hover:underline cursor-pointer'>{project.title} - {project.role}</p>
                      </Link>
                    ))}
                  </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                  <Accordion.Title className="text-2xl text-white">
                    Education
                  </Accordion.Title>
                  <Accordion.Content className='space-y-4'>
                    <div key="JHU">
                      <p className='font-bold text-2xl'>Johns Hopkins University</p>
                      <p>Film & Media Studies, Computer Science (B.S) | Aug 2020 - May 2024</p>
                      <p className="mt-2">Recipient of the Hudson Trust Scholarship, a merit award given to less than 20 students per year.</p>
                      <p>Achieved Dean&apos;s List for all semesters to date.</p>
                      <p className='font-bold mt-2'>Selected Film Coursework</p>
                      <p>Intro - Advanced Video Production, Intro - Advanced Film Production, Film Sound, Intermediality, Intro Screenwriting</p>
                      <p className='font-bold mt-2'>Selected C.S. Coursework</p>
                      <p>Data Structures, Computer System Fundamentals, Full-Stack JavaScript, User Interfaces & Mobile Applications, Object Oriented Software Engineering, Web Security</p>
                      <p className='font-bold mt-2'>Extracurriculars</p>
                      <p>The News-Letter - Graphics Editor</p>
                      <p>Studio North - Finance Chair, Grant Production Chair, Marketing Chair</p>
                      <p>Barnstormers - Assistant Stage Manager, Assistant Director of Photography, Sound Board Operator, Promotional Videographer</p>
                      <p>Witness Theater - Assistant Technical Director, Light Board Operator</p>
                      <p>Color of My Voice - Social Media Manager</p>
                    </div>
                    <div key="JHU">
                      <p className='font-bold text-2xl'>Regis High School</p>
                      <p>Aug 2016 - May 2020</p>
                      <p className="mt-2">Tuition-free scholarship recipient. National Merit Commended Student.</p>
                      <p className='font-bold mt-2'>Extracurriculars</p>
                      <p>Regis Repertory - Stage Manager</p>
                      <p>The OWL - Layout Editor</p>
                      <p>AFA CyberPatriot - Team Leader, 2020 Semifinalist</p>
                    </div>
                  </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel key="Skills" >
                <Accordion.Title className="text-2xl text-white">
                  Skills
                </Accordion.Title>
                <Accordion.Content className='space-y-2'>
                  <p>{skills}</p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About;