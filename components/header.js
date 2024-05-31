import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Header({ title }) {
  return (
    <Head>
      <title>{title ? title + " | John D'cruz" : "John D'cruz"}</title>
      <link rel="icon" href="/favicon.ico" />
      <GoogleAnalytics gaId='G-GHQ9WRFG4H' />
    </Head>
  )
}