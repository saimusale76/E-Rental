import Head from "next/head"
import Image from "next/image"
import Header from "@/components/Header"
import Profile from "@/components/Profile"
import About from "@/components/About"
import CoolRide from "@/components/CoolRide"
import Base from "@/components/Base"
import Team from "@/components/Team"
import { Scan } from "@/components/Scan"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="h-screen bg-[#000B0C] z-0 overflow-y-scroll text-white">
      <Head>
        <title>Cool Ride</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <section id="profile" className="snap-start">
        <Profile />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="coolride" className="snap-center">
        <CoolRide />
      </section>

      <section id="programme" className="snap-center overflow-hidden">
        <Base />
      </section>

      <section id="scan" className="snap-center overflow-hidden">
        <Scan />
      </section>

      <section id="team" className="snap-center">
        <Team />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  )
}
