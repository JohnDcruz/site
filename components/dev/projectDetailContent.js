import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import RichTextResponse from "../helpers/richTextHelpers/response";

export default function ProjectDetailContent({ setIsOpen, project }) {
  let slideIndex = 0;
  let slideTitles = [];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-right place-self-end">
        <button
          type="button"
          className="inline-flex justify-center rounded-md p-2 text-grey-900 hover:text-red-900 focus:outline-none focus-visible:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className="container">
        <div className='invisible'>
          <Image src={'https:' + project.thumbnail.fields.file.url} alt={project.thumbnail.fields.title} layout='fill' objectFit='contain'/>
        </div>
        <div className='bg-blue'>
          <p className="text-3xl text-center my-2">{project.role} at {project.project}</p>
          {project.content ? (
            <>
              <hr className='my-4 h-px bg-slate-800 border-0 '/>
              <RichTextResponse content={project.content} />
            </>
          ) : ''}
        </div>
      </div>
    </div>
  )
}