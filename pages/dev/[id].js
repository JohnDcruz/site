import { useRouter } from 'next/router'

export default function DevPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <p>CS: {id}</p>
  )
}