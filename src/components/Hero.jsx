import React from 'react'
import { useState } from 'react'
import { smallHeroVideo,heroVideo } from '../utils'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import '../index.css'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p id="hero" className="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="px-5 py-2 rounded-3xl bg-blue-500 my-5 border border-transparent transition-all hover:bg-transparent hover:border-blue-500 hover:text-blue-500">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero