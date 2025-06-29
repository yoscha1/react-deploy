'use client';

import React from 'react';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from '@/components/HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';


export const SocialButtons = () => {
  return (
    <div className="flex gap-4">
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/yoschanin-pulsirivong"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full hover:bg-blue-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.732-.786-1.732-1.732s.786-1.732 1.732-1.732 1.732.786 1.732 1.732-.786 1.732-1.732 1.732zm13.5 11.268h-3v-5.604c0-1.337-.025-3.062-1.868-3.062-1.868 0-2.155 1.459-2.155 2.963v5.703h-3v-10h2.884v1.367h.041c.402-.76 1.381-1.562 2.843-1.562 3.041 0 3.604 2.003 3.604 4.609v5.586z" />
        </svg>
      </a>

      {/* GitHub Button */}
      <a
        href="https://github.com/yoscha1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.478 2 2 6.477 2 12a10 10 0 006.84 9.5c.5.093.684-.217.684-.482v-1.674c-2.783.603-3.372-1.341-3.372-1.341-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.068-.606.068-.606 1.006.071 1.54 1.034 1.54 1.034.892 1.529 2.341 1.087 2.913.831.092-.647.35-1.088.637-1.338-2.22-.252-4.555-1.111-4.555-4.946 0-1.092.39-1.985 1.03-2.684-.103-.253-.447-1.272.099-2.65 0 0 .84-.27 2.75 1.027a9.563 9.563 0 015.002 0c1.91-1.297 2.748-1.027 2.748-1.027.548 1.379.204 2.398.1 2.65.641.699 1.029 1.592 1.029 2.684 0 3.843-2.336 4.69-4.566 4.938.36.308.68.919.68 1.852v2.742c0 .268.18.582.69.483A10.001 10.001 0 0012 2z" />
        </svg>
      </a>
    </div>
  );
};


export const HeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />
        {/* shouldOrbit = false,
        orbitDuration,
        shouldSpin = false,
        spinDuration, */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='34s' shouldSpin spinDuration='3s'> 
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='38s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='50s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='54s'>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='58s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='62s'>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='66s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>     
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 inset-0 size-2.5 rounded-full relative">
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className="text-sm font-medium text-white">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto mt-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-white">
            Yoschanin Pulsirivong
          </h1>
          <p className="mt-4 text-white/60 md:text-lg">
            Hello! I&apos;m Chae, a junior penetration tester with an interest in cybersecurity and artificial intelligence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={handleScroll}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl text-white hover:bg-white/10 transition"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <SocialButtons />

        </div>
      </div>
    </div>
  );
};
