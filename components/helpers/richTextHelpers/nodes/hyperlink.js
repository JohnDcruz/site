import Link from "next/link";

export default function Hyperlink({node, members}) {
  return (
    <Link href={node.data.uri}>
      <button className='text-left text-xl mt-4 py-2 px-4 mx-4 rounded-full border-0 font-semibold bg-slate-800 text-slate-100 hover:bg-slate-600'>
        {members}
      </button>
    </Link>
  )
}