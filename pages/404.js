import Header from "../components/header"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  });

  return (
    <div>
      <Header title={'404'} />
      <GoogleAnalytics gaId='G-GHQ9WRFG4H' />

      <main className='mx-auto h-screen flex flex-col bg-slate-800 items-center text-center text-white justify-center'>
        <h1 className='text-4xl m-5 text-center'>
          We couldn&apos;t find that page! Let&apos;s get you home...
        </h1>
      </main>
    </div>
  )
}