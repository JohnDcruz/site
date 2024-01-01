import { useRouter } from 'next/router'

export default function FilmPage() {
  const router = useRouter()
  const { id } = router.query

  return <p>Film: {id}</p>
}