
import Link from 'next/link';
import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from 'next/legacy/image';

const Proitems = ({title, desc, techno, pink, rode, type, src}) => {
 
  return (
    <div className='pro text-lg md:w-1/2 px-5 py-5 flex flex-col'>
        <div>
            <Image
            layout='intrinsic'
            width={550}
            height={300}
            className=' rounded-lg'
            src={src}
            alt={'abhishek kumar'}
             />
        </div>

        <div className='text-center flex flex-col'>
            <p className='text-2xl'>{title}</p>
            <p> {desc}</p>
            <p className='text-sm '> {type} made with {techno} </p>
            <div className='flex flex-row flex-wrap h-10'>
              <p className='mx-2'>
              <i className='text-xs md:text-base'>visit site here</i>
                <Link href={pink}
               className='hover:text-blue-700 inline-block text-base md:text-3xl md:mt-1'
                target='blank'>
                    <CgWebsite/>
                </Link>
               </p>
              <p className='mx-2'>
              <i className='text-xs md:text-base'>source code here</i>
                <Link href={rode}
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