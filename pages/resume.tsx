import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Resume() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Benjamin - resume</title>
        <meta name="description" content="Information about Benjamin Simms. UCF Computer engineering alumnus currently seeking a role in software development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white">
          <nav className="h-20 flex justify-center gap-20 items-center font-firacode text-3xl border-b-2">
            <Link href='/' className={`flex items-center justify-center hover:font-bold`}>Home</Link>
            <Link href='/projects' className={`flex items-center justify-center hover:font-bold`}>Projects</Link>
            <Link href='/resume' className={`flex rounded-lg items-center justify-center hover:font-bold w-32 h-12 bg-gray-200 text-black`}>Resume</Link>
          </nav>
          <object data="/simms_resume.pdf" type="application/pdf" width="100%" height="100%"/>
        </div>
      </main>
    </>
  )
}