
import Link from 'next/link';
import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const Proitems = ({title, desc, techno, link, code, type, src, key}) => {
 
  return (
    <div className='pro text-lg md:w-1/2 px-5 py-5 flex flex-col' key={key}>
        <div>
            <img
            className=' rounded-lg'
            src={src}
            alt={title}
             />
        </div>

        <div className='text-center flex flex-col'>
            <p className='text-2xl'>{title}</p>
            <p> {desc}</p>
            <p className='text-sm '> {type} made with {techno} </p>
            <div className='flex flex-row flex-wrap h-10'>
              <p className='mx-2'>
              <i className='text-xs md:text-base'>visit site here</i>
                <Link href={link}
               className='hover:text-blue-700 inline-block text-base md:text-3xl md:mt-1'
                target='blank'>
                    <CgWebsite/>
                </Link>
               </p>
              <p className='mx-2'>
              <i className='text-xs md:text-base'>source code here</i>
                <Link href={code}
                className='hover:text-blue-700 inline-block text-base md:text-3xl md:mt-1'
                target='blank'>
                    <BsGithub/>
                </Link>
               </p>
            </div>
        </div>
    </div>
  )
}

export default Proitems;