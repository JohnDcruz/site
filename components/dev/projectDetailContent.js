import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import RichTextResponse from "../helpers/richTextHelpers/response";
import BuiltWithBar from "./builtwithbar";
import Link from "next/link";

export default function ProjectDetailContent({ setIsOpen, project }) {
  return (
    <div className="flex flex-col">
      <div className="text-right place-self-end">
        <button
          type="button"
          className="inline-flex justify-center rounded-md pb-5 text-grey-900 hover:text-red-900 focus:outline-none focus-visible:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <Image src={'https:' + project.thumbnail.fields.file.url} alt={project.thumbnail.fields.title} width={project.thumbnail.fields.file.details.image.width} height={project.thumbnail.fields.file.details.image.height} />
      <p className="text-3xl text-center m-6">{project.project}&nbsp;&nbsp;|&nbsp;&nbsp;{project.role}</p>
      <BuiltWithBar data={project.builtWith[0]} />
      {project.content ? (
        <>
          <RichTextResponse content={project.content} />
        </>
      ) : ''}
      {console.log(project.link)}
      <Link href={project.link}><span className='cursor-pointer text-left hover:text-slate-500'><FontAwesomeIcon icon={faUpRightFromSquare} />&nbsp;&nbsp;{project.linkText}</span></Link>
    </div>
  )
}