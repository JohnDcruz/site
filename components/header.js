import Head from 'next/head'

export default function Header({ title }) {
  let titleText = '';
  if (title) {
    titleText = title + " - John D'cruz";
  } else {
    titleText = title;
  }
  return (
    <Head>
      <title>{titleText}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}