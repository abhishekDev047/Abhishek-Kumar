import Head from 'next/head';
import React from 'react'
import Contact from './contact';
import { SlPhone } from "react-icons/sl";
import { SiWhatsapp,SiHtml5,SiCss3,SiJavascript,SiNodedotjs,SiNpm,SiYarn,SiBootstrap,SiTailwindcss,SiReact,SiNextdotjs,SiGit,SiGithub } from "react-icons/si";

const About = () => {
  return (
    <div className='pro'>
    <Head><title>About Me</title></Head>
    <div className='flex flex-col md:px-20 md:text-lg sm:px-10 lg:px-32 lg:text-xl flex-wrap items-center p-3'>

      <div >
          <img 
          className=' rounded-r-3xl rounded-bl-full rounded-tl-3xl'
            src='/images/meriphoto.jpg'
          />
      </div>

      <div className='text-center  mt-5'>
      Hello, my name is Abhishek Kumar, and I'm a self-taught frontend web developer. Despite graduating in Commerce, I found my true passion in programming and computers. Over the past year, I have been learning and practicing web development, and I've developed proficiency in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Next.js, Git, GitHub, Node.js, NPM, and Yarn. I'm constantly learning new technologies and tools to stay current with the latest trends in web development.<br/>

I want to share my love of programming and technology with the world, but I do have a unique challenge that I face in my communication skills. I have a stutter that sometimes affects my speech, but I don't let that hold me back from pursuing my dreams. Despite this challenge, I'm determined to build beautiful and functional websites that create engaging user experiences.<br/>

I am a hard-working and dedicated individual, and I believe that my passion for programming and technology is what sets me apart from others in my field. I approach every project with enthusiasm and creativity, and I'm always looking for new opportunities to challenge myself and grow as a developer. I'm excited about the prospect of working with others who share my passion for technology and want to create amazing web experiences. If you're interested in working with me or want to learn more about my skills and experience, please don't hesitate to get in touch! My contact details are :
      </div>
      <div className='mt-10 flex flex-col items-center foot'>
          <div className='text-lg'>
              <p className='font-medium text-lime-700'> contact/social media  info*</p>
              <Contact/>
              <p className='mx-auto text-center'>  <span className='inline-block mx-2'><SiWhatsapp/></span><span className='inline-block mx-2'><SlPhone/></span>  +91 7876534290</p>
          </div>
          <div className='text-lg '>
          <p className='font-medium mt-5 relative left-3 text-blue-700'> Skills*</p>
          <p className='flex flex-row flex-wrap'>
          <span className="m-2 text-lg"><SiHtml5 /></span>
          <span className="m-2 text-lg"><SiCss3 /></span>
          <span className="m-2 text-lg"><SiJavascript /></span>
          <span className="m-2 text-lg"><SiNodedotjs /></span>
          <span className="m-2 text-lg"><SiNpm /></span>
          <span className="m-2 text-lg"><SiYarn /></span>
          <span className="m-2 text-lg"><SiBootstrap /></span>
          <span className="m-2 text-lg"><SiTailwindcss /></span>
          <span className="m-2 text-lg"><SiReact /></span>
          <span className="m-2 text-lg"><SiNextdotjs /></span>
          <span className="m-2 text-lg"><SiGit /></span>
          <span className="m-2 text-lg"><SiGithub /></span>


          </p>
          </div>
      </div>


    </div>
    </div>
  )
}

export default About;