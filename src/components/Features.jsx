import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  /* @layer utilities {
    .flex-center {
      @apply flex items-center justify-center;
    }
  
    .nav-height {
      @apply h-[calc(100vh-60px)];
    }
  
    .btn {
      @apply px-5 py-2 rounded-3xl bg-blue-500 my-5 border border-transparent transition-all hover:bg-transparent hover:border-blue-500 hover:text-blue-500;
    }
  
    
  
   
  
 
  
    .common-padding {
      @apply py-20 sm:py-32 px-5 sm:px-10;
    }
  
   
  
    .feature-text {
      @apply text-gray-300 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px];
    }
  
    .feature-text-container {
      @apply w-full flex-center flex-col md:flex-row mt-10 md:mt-16 gap-5;
    }
  
    .feature-video {
      @apply w-full h-full object-cover object-center scale-150 opacity-0;
    }
  
    .feature-video-container {
      @apply w-full flex flex-col md:flex-row gap-5 items-center;
    }
  
    .link {
      @apply text-blue-500 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20;
    }
  
    .hero-title {
      @apply text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10;
    }
  
    .hiw-title {
      @apply text-4xl md:text-7xl font-semibold text-center;
    }
  
    .hiw-subtitle {
      @apply text-gray-300 font-semibold text-xl md:text-2xl py-10 text-center;
    }
  
    .hiw-video {
      @apply absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden;
    }
  
    .hiw-text-container {
      @apply flex flex-col md:flex-row justify-between items-start gap-24;
    }
  
    .hiw-text {
      @apply text-gray-300 text-xl font-normal md:font-semibold;
    }
  
    .hiw-bigtext {
      @apply text-white text-3xl md:text-5xl font-normal md:font-semibold my-2;
    }
  
    .video-carousel_container {
      @apply relative w-[88vw] sm:w-[70vw] h-[35vh] sm:h-[50vh] md:h-[70vh];
    }
  
    .g_fadeIn {
      @apply opacity-0 translate-y-[100px];
    }
  }
     */
     /* .section-heading {
      @apply text-gray-300 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20;
    }
    .size-btn-container {
      @apply p-1 ml-3 gap-1;
    }
    .size-btn {
      @apply w-10 h-10 text-sm flex-center bg-white text-black rounded-full transition-all;
    }
    .color-container, .size-btn-container, .control-btn {
      @apply flex-center bg-gray-300 backdrop-blur rounded-full;
    } */

  return (
    <section className='h-full py-20 sm:py-32 px-5 sm:px-10 bg-zinc-900 relative overflow-hidden'>
      <div className='screen-max-wdith'>
        <div className='mb-12 w-full'>
          <h1 id='features_title' className='text-gray-300 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>
            Explore the full story.
          </h1>
        </div>

        <div className='flex flex-col justify-center items-center overflow-hidden'>
          <div className='mt-32 mb-24 pl-24'>
            <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
            <h2 className='text-5xl lg:text-7xl font-semibold'>
              Forged in titanium.
            </h2>
          </div>

          <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
              <video
                playsInline
                id='exploreVideo'
                className='w-full h-full object-cover object-center'
                preload='none'
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type='video/mp4' />
              </video>
            </div>

            <div className='flex flex-col w-full relative'>
              <div className='w-full flex flex-col md:flex-row gap-5 items-center'>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img
                    src={explore1Img}
                    alt='titanium'
                    className='w-full h-full object-cover object-center scale-150 opacity-0 g_grow'
                  />
                </div>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img
                    src={explore2Img}
                    alt='titanium 2'
                    className=' w-full h-full object-cover object-center scale-150 opacity-0 g_grow'
                  />
                </div>
              </div>

              <div className='w-full flex-center flex-col md:flex-row mt-10 md:mt-16 gap-5'>
                <div className='flex-1 flex-center'>
                  <p className='text-gray-300 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text'>
                    iPhone 15 Pro is{" "}
                    <span className='text-white'>
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className='flex-1 flex-center'>
                  <p className='text-gray-300 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text'>
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className='text-white'>
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
