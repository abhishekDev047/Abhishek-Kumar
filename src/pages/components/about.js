import Head from 'next/head';
import React from 'react'
import Contact from './contact';
import { FaCertificate } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";
import { SiWhatsapp,SiHtml5,SiCss3,SiJavascript,SiNodedotjs,SiNpm,SiYarn,SiBootstrap,SiTailwindcss,SiReact,SiNextdotjs,SiGit,SiGithub,SiRedux,SiTypescript } from "react-icons/si";
import Image from 'next/legacy/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const About = () => {
  const mode =useSelector(state=>state.Mode.value);
  const myString1 = " Hello, my name is Abhishek Kumar, and I am a self-taught frontend web developer. Despite graduating in Commerce, I found my true passion in programming and computers. Over the past year, I have been learning and practicing web development, and I've developed proficiency in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Next.js, Git, GitHub, Node.js, NPM,Yarn, React-Redux and Typescript. I am constantly learning new technologies and tools to stay current with the latest trends in web development. ";

  const myString2 = " I want to share my love of programming and technology with the world, but I do have a unique challenge that I face in my communication skills. I have a stutter that sometimes affects my speech, but I don't let that hold me back from pursuing my dreams. Despite this challenge, I am determined to build beautiful and functional websites that create engaging user experiences. ";
  const myString3 = " I am a hard-working and dedicated individual, and I believe that my passion for programming and technology is what sets me apart from others in my field. I approach every project with enthusiasm and creativity, and I am always looking for new opportunities to challenge myself and grow as a developer. I am excited about the prospect of working with others who share my passion for technology and want to create amazing web experiences. If you're interested in working with me or want to learn more about my skills and experience, please don't hesitate to get in touch! My contact details are ";

  return (
    <div className={mode}>
    <div className='pro dark:bg-zinc-900 dark:text-white w-full'>
    <Head><title>About Me</title></Head>
    <div className='flex flex-col md:px-20 md:text-lg sm:px-10 lg:px-32 lg:text-xl flex-wrap items-center p-3 w-full'>
          
      <div >
          <Image
          layout='intrinsic'
          width={1000}
          height={750}
          className=' rounded-r-3xl rounded-bl-full rounded-tl-3xl'
            src='/images/meriphoto.jpg'
            alt={'abhishek-kumar'}
          />
      </div>

      <div className='text-center  mt-5 w-full'>
        {myString1} <br /> {myString2} <br /> {myString3}
      </div>
      <div className='mt-10 flex flex-col items-center foot w-full'>
          <div className='text-lg'>
              <p className='font-medium text-lime-700'> contact/social media  info*</p>
              <Contact/>
              <p className='mx-auto text-center'>  <span className='inline-block mx-2'><SiWhatsapp/></span><span className='inline-block mx-2'><SlPhone/></span>  +91 7876534290</p>
          </div>
          <div className='text-lg '>
          <p className='font-medium mt-5 relative left-3 text-blue-700'> Skills*</p>
          <p className='flex flex-row flex-wrap'>
          <span className="m-2 text-lg lg:text-2xl"><SiHtml5 /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiCss3 /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiJavascript /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiNodedotjs /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiNpm /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiYarn /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiBootstrap /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiTailwindcss /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiReact /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiNextdotjs /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiGit /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiGithub /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiRedux /></span>
          <span className="m-2 text-lg lg:text-2xl"><SiTypescript /></span>


          </p>
          </div>
      <div className={mode}>
        <div className='flex flex-col items-center justify-center p-6'>
        <p className='text-3xl flex flex-row '>
         Certificates <span className='"m-2 text-lg lg:text-2xl"'><FaCertificate/></span>
        </p>
        <p className='text-blue-800'>
          <Link target='blank' href={'https://www.freecodecamp.org/certification/Abhishek-Kumar-047/front-end-development-libraries'}> Verify at FCCs official site </Link>
        </p>
        <div >
          <Image
          layout='intrinsic'
          width={858}
          height={646}
          className='rounded-lg'
            src='/images/certificate1.png'
            alt={'abhishek-kumar'}
          />
      </div>
        </div>
      </div>
      </div>


    </div>
    </div>
    </div>
  )
}

export default About;