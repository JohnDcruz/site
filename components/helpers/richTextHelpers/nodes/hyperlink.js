import Link from "next/link";

export default function Hyperlink({node, members}) {
  return (
    <Link href={node.data.uri}>
      <span className='text-left font-semibold text-slate-800 hover:text-slate-600 cursor-pointer'>
        {members}
      </span>
    </Link>
  )
}