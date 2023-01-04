import { fetchData } from "../config/fetchData";
import getFormattedDate from "../components/helpers/dateHelper";
import getListWithCommas from "../components/helpers/listHelper";
import Image from 'next/image'
import Header from "../components/header"
import BackButton from "../components/backButton";
import { Accordion } from "flowbite-react";

function About({ about, work, education, lists }) {
  return (
    <div className='bg-slate-800 min-h-screen'>
      <Header title={"About"} />
      <main className='mx-auto flex flex-col bg-slate-800 items-center text-white justify-center h-full'>
        <div className="w-4/5">
          <BackButton />
          <div className='flex'>
            <div className='w-3/12 relative'>
              <Image src={'https:' + about.profile.fields.file.url} alt="Profile" layout="fill" objectFit="cover" />
            </div>
            <div className='w-9/12 ml-10 space-y-3 flex flex-col items-center text-center justify-center'>
              <h1 className='text-6xl'>
                {about.author}
              </h1>
              <p className='text-lg'>
                {about.about}
              </p>
              <p className='text-xl mt-4'><span>Right now, John is </span>
              <span className='text-red-400'>{about.red}, </span>
              <span className='text-blue-400'>{about.blue}, </span>
              <span className='text-green-400'>{about.green}, </span>
              <span className='text-yellow-400'>and {about.yellow}.</span></p>
            </div>
          </div>
          <div className='mt-5
          '>
            <Accordion alwaysOpen={true} flush={true} title="Skills">
              <Accordion.Panel>
                  <Accordion.Title className="text-2xl text-white">
                    Experience
                  </Accordion.Title>
                  <Accordion.Content className='space-y-4'>
                    {work.map((job) => (
                      <div key={job.company}>
                        <p className='font-bold'>{job.role} at {job.company}</p>
                        <p className='font-light'>{getFormattedDate(job.start)} - {job.end ? getFormattedDate(job.end) : 'present'} | {job.location}</p>
                        <p>{job.details}</p>
                      </div>
                    ))}
                  </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                  <Accordion.Title className="text-2xl text-white">
                    Education
                  </Accordion.Title>
                  <Accordion.Content className='space-y-2'>
                    {education.map((school) => (
                      <div key={school.name}>
                        <p className='font-bold text-2xl'>{school.name}</p>
                        <p>{school.degree ? school.degree + ' | ' : ''}{getFormattedDate(school.start)} - {getFormattedDate(school.end)}</p>
                        <p className='font-bold mt-2'>{school.courses ? 'Relevant Coursework' : ''}</p>
                        {school.courses ? school.courses.map((course) => (
                          <div key={course.fields.title}>
                            <span>{course.fields.title}</span>
                          </div>
                        )) : ''}
                        <p className='font-bold mt-2'>Extracurriculars</p>
                        {school.extracurriculars ? school.extracurriculars.map((activity) => (
                          <div key={activity.fields.group}>
                            <span>{activity.fields.group} as {getListWithCommas(activity.fields.roles)}</span>
                          </div>
                        )): ''}
                      </div>
                    ))}
                  </Accordion.Content>
              </Accordion.Panel>
            {lists.map((list) => (
              <Accordion.Panel key={list.title} >
                  <Accordion.Title className="text-2xl text-white">
                    {list.title}
                  </Accordion.Title>
                  <Accordion.Content className='space-y-2'>
                    <p>
                      {getListWithCommas(list.name)}
                    </p>
                  </Accordion.Content>
              </Accordion.Panel>
            ))}
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() { 
  const aboutRes = await fetchData({ type: 'about', sort: '' });
  const about = await aboutRes.map((p) => {
    return p.fields
  })[0];
  const workRes = await fetchData({ type: 'work', sort: '-fields.start' });
  const work = await workRes.map((p) => {
    return p.fields
  });
  const educationRes = await fetchData({ type: 'school', sort: '' });
  const education = await educationRes.map((p) => {
    return p.fields
  });
  const listRes = await fetchData({ type: 'certifications', sort: '' });
  const lists = await listRes.map((p) => {
    return p.fields;
  });
  return {
    props: {
      about,
      work,
      education,
      lists,
    },
  };
}

export default About;