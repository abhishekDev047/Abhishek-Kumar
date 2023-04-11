import Link from 'next/link';
import React from 'react';
import {} from "react-icons/fc";
import {SiGithub,SiLinkedin,SiInstagram,SiTwitter,SiIndeed,SiGmail} from "react-icons/si";

const Contact = () => {
  return (
    <div className='items-center p-5 flex flex-col '>
    <div className='flex flex-row justify-between items-center p-5 w-full h-full '>
      <Link className='' href={''}>  <SiGithub/></Link>
      <Link className='' href={''}> <SiLinkedin/>  </Link>
      <Link className='' href={''}> <SiInstagram/> </Link>
      <Link className='' href={''}> <SiTwitter/> </Link>
      <Link className='' href={''}> <SiIndeed/> </Link>
    </div>
 <div className='flex flex-row my-auto'>
   <p className='mt-1 mx-2'> <SiGmail/></p> <p>abhishekkumar.in47@gmail.com</p>
 </div>
    </div>
  )
}

export default Contact;