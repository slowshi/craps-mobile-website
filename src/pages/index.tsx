import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Craps Mobile</title>
        <meta name="description" content="Craps simulator for Android and iOS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="w-full p-4 h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-center w-full mb-4">Craps Mobile</h1>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 md:mr-4 flex justify-center md:justify-end">
              <Image
                className="border-8 border-black rounded-xl"
                src="/gameplay.png" // Path to the image in the public folder
                alt="Gameplay Image"
                width={300} // Set the desired width
                height={200} // Set the desired height
              />
            </div>
            <div className="w-full md:w-1/2 md:flex md:justify-start p-4">
              <span>
                Step into the world of craps with a single-player simulation game. Roll the dice, place bets, and track
                your roll history as you enjoy the craps experience right on your device.
              </span>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Need Support?</h2>
            <p className="mt-2">{`Contact us with any questions or concerns. We're here to help!`}</p>
            <div className="flex justify-center md:justify-start mt-4">
              <a href="mailto:lenster921@gmail.com" className="text-blue-500 hover:underline">
                lenster921@gmail.com
              </a>
            </div>
            <Link className="text-blue-500" href="/privacy">
              Privacy Policy
            </Link>
          </div>

          <footer className="text-center text-gray-500 p-4">
            Len Lester {new Date().getFullYear()}. All Rights Reserved.
          </footer>
        </div>
      </div>
    </>
  )
}
