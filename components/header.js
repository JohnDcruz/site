import Head from 'next/head'

export default function Header({ title }) {
  return (
    <Head>
      <title>{title ? title + " - John D'cruz" : "John D'cruz"}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}