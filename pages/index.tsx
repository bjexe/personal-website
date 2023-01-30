import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Benjamin - home</title>
        <meta name="description" content="Information about Benjamin Simms. UCF Computer engineering alumnus currently seeking a role in software development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white">
          <nav className="h-20 flex justify-center gap-20 items-center font-firacode text-3xl border-b-2">
            <Link href='/' className={`flex rounded-lg items-center justify-center hover:font-bold w-24 h-12 bg-gray-200 text-black`}>Home</Link>
            <Link href='/projects' className={`flex items-center justify-center hover:font-bold`}>Projects</Link>
            <Link href='/resume' className={`flex items-center justify-center hover:font-bold`}>Resume</Link>
          </nav>
          <div className="flex">
            <div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-firacode text-6xl mt-10">
                  Hello,
                </h1>
                <h1 className="font-firacode text-6xl pt-8 tracking-wide mb-16">
                  I&apos;m Benjamin Simms
                </h1>
                <Image src='/me-square.png' width={350} height={1} alt="a picture of me" className="rounded-full border-4 mb-10 bg-gradient-to-r from-sky-500 to-indigo-500"/>
              </div>
              <div className="w-2/3">
                <p className="flex justify-center items-center text-center font-firacode text-xl mx-40">
                  I am a UCF computer engineering alumnus with a passion for technology. 
                  I am seeking a role where I can develop skills associated with writing software and apply the skills I&apos;ve obtained pursuing my degree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
