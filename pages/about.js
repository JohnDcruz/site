import Navbar from "../components/navbar"
import { fetchData } from "../config/fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import getFormattedDate from "../components/helpers/dateHelper";
import getListWithCommas from "../components/helpers/listHelper";

function About({ about, work, education, lists }) {

  return (
    <div>
      <Navbar title={'About'} />

      <main className='mx-auto flex flex-col bg-slate-800 items-center text-center text-white justify-center p-10'>
        <div className='w-4/5 space-y-2 my-4 flex flex-col items-center justify-center'>
          <h1 className='text-6xl'>
            {about.author}
          </h1>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />&ensp;{about.email}&ensp;|&ensp;
            <FontAwesomeIcon icon={faLocationDot} />&ensp;{about.location}
          </span>
        </div>
        <div className='w-4/5 space-y-2 my-4 text-left'>
          <h2 className='text-3xl'>
            Experience
          </h2>
          {work.map((job) => (
            <div key={job.company}>
              <p className='font-bold'>{job.role} at {job.company}</p>
              <p className='font-light'>{getFormattedDate(job.start)} - {job.end ? getFormattedDate(job.end) : 'present'} | {job.location}</p>
              <p>{job.details}</p>
            </div>
          ))}
        </div>
        <div className='w-4/5 space-y-2 my-4 text-left'>
          <h2 className='text-3xl'>
            Education
          </h2>
          {education.map((school) => (
            <div key={school.name}>
              <p className='font-bold text-xl'>{school.name}</p>
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
        </div>
        {lists.map((list) => (
          <div key={list.title} className='w-4/5 space-y-2 my-4 text-left'>
            <h2 className='text-3xl'>
              {list.title}
            </h2>
            <p>
              {getListWithCommas(list.name)}
            </p>
          </div>
        ))}
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