import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import getFormattedDate from "../helpers/dateHelper";
import ReactPlayer from "react-player";
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import RichTextResponse from "../helpers/richTextHelpers/response";
import HR from "../helpers/richTextHelpers/nodes/hr";

export default function ProjectDetailContent({ setIsOpen, project }) {
  let slideIndex = 0;
  let slideTitles = [];
  return (
    <>
      <div className="text-right place-self-end">
        <button
          type="button"
          className="inline-flex justify-center rounded-md p-2 text-grey-900 hover:text-red-900 focus:outline-none focus-visible:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className="w-4/5">
        <p className="text-3xl text-center my-2">{project.role} at {project.company}</p>
        <p className="text-center my-2">{getFormattedDate(project.start)} - {project.end ? getFormattedDate(project.end) : 'present'} | {project.location}</p>
        <p className="text-center my-2">{project.details}</p>
        {project.media ? (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          infinite={true}
          totalSlides={1 + (project.media ? project.media.length : 0) + (project.youTubeVideos ? project.youTubeVideos.length : 0)}
        >
          <HR />
          <Slider>
            {project.media.map((asset) => {
              slideTitles.push(asset.fields.title);
              if (asset.fields.file.contentType === 'image/jpeg') {
                return (
                  <Slide key={asset.fields.title} index={slideIndex++}>
                    <Image src={'https:' + asset.fields.file.url} alt={asset.fields.title} layout='fill' objectFit='contain'/>
                  </Slide>
                )
              } else if (asset.fields.file.contentType === 'video/mp4') {
                return (
                  <Slide key={asset.fields.title} index={slideIndex++}>
                    <ReactPlayer url={'https:' + asset.fields.file.url} controls={true} width={'100%'} height={'100%'} />
                  </Slide>
                )
              }
            })}
            {project.youTubeVideos ? project.youTubeVideos.map((video) => {
              slideTitles.push(video.fields.name);
              return (
              <Slide key={video.fields.name} index={slideIndex++}><ReactPlayer url={video.fields.URL} controls={true} width={'100%'} height={'100%'} /></Slide>
              )
            }) : ''}
          </Slider>
          <p className='mt-2'>{slideTitles.map((slide, index) => (
            <Dot key={index} slide={index}>{slide}{index !== slideTitles.length - 1 ? String.fromCharCode(160)+ '|' + String.fromCharCode(160) : ''}</Dot>
          ))}</p>
        </CarouselProvider>
        ) : ''}
        {project.content ? (
          <>
            <hr className='my-4 h-px bg-slate-800 border-0 '/>
            <RichTextResponse content={project.content} />
          </>
        ) : ''}
      </div>
    </>
  )
}