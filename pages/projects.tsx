import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import Project from '../components/Project'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Benjamin - projects</title>
        <meta name="description" content="Information about Benjamin Simms. UCF Computer engineering alumnus currently seeking a role in software development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-fit bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white font-firacode w-full">
          <nav className="h-20 flex justify-center gap-20 items-center text-3xl border-b-2">
            <Link href='/' className={`flex items-center justify-center hover:font-bold`}>Home</Link>
            <Link href='/projects' className={`flex rounded-lg items-center justify-center hover:font-bold w-40 h-12 bg-gray-200 text-black`}>Projects</Link>
            <Link href='/resume' className={`flex items-center justify-center hover:font-bold w-32 h-12`}>Resume</Link>
          </nav>
          <hr className="mb-10 mx-auto w-96"/>
          <Project 
            name="Yacked Fitness Tracker" 
            description='A weightlifting tracking web app built with React, Express/Node.js, and MongoDB. Users create template workouts and start workout sessions to track their lifts and monitor progress over time. Also features weight tracking allowing the user to download a weight history .csv file to perform analytics themselves.' 
            repository='https://www.github.com/bjexe/yacked' 
            website='http://www.yacked.net'
            startDate='November 2022'
            endDate='January 2023'
          />
          <Project
            name="Articulight Hand Gesture Controlled Lighting System"
            description = "A UCF ECE senior design project consisting of myself and 3 colleagues. Utilized Python on a Jetson Nano to perform hand gesture classification. Wrote scripts for capturing image datasets, training a support vector machine interfaced with a convolutional neural network, and for controlling the system via trained support vector machine. Connected Jetson Nano to ATMEGA328 microcontroller by serial to control motors via pulse width modulation."
            youtube="https://www.youtube.com/embed/quFn5EGTglw"
            startDate='January 2022'
            endDate='August 2022'
          />
        </div>
      </main>
    </>
  )
}
