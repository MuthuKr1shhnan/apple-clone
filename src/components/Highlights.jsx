import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";

import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id='highlights'
      className='w-screen overflow-hidden h-full py-20 sm:py-32 px-5 sm:px-10 bg-zinc-900'
    >
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='text-gray-300 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>
            Get the highlights.
          </h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='text-blue-500 hover:underline cursor-pointer flex items-center text-xl opacity-1 translate-y-20 link'>
              Watch the film
              <img src={watchImg} alt='watch' className='ml-2' />
            </p>
            <p className='text-blue-500 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20 link'>
              Watch the event
              <img src={rightImg} alt='right' className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
