
import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from 'next/legacy/image';

const Proitems = ({title, desc, techno, pink, rode, type, src}) => {
 
  return (
    <div className='pro  md:w-1/2 w-full px-5 py-5 flex flex-col items-center'>
        <div className='px-auto'>
            <Image
            layout='intrinsic'
            width={550}
            height={300}
            className=' rounded-lg'
            src={src}
            alt={'abhishek kumar'}
             />
        </div>

        <div className='text-center flex flex-col items-center'>
            <p className='text-2xl'>{title}</p>
            <p className='text-base sm:lg px-2'> {desc}</p>
            <p className='text-xs '> {type} made with {techno} </p>
            <div className='flex flex-row flex-wrap h-10 justify-center'>
              <p className='mx-2'>
              {/* <i className='text-xs md:text-base'>visit site here</i> */}
                <a href={pink}
               className='hover:text-blue-700 inline-block text-base md:text-3xl md:mt-1'
                target='blank'>
                    <CgWebsite/>
                </a>
               </p>
              <p className='mx-2'>
              {/* <i className='text-xs md:text-base'>source code here</i> */}
                <a href={rode}
                className='hover:text-blue-700 inline-block text-lg md:text-3xl md:mt-1'
                target='blank'>
                    <BsGithub/>
                </a>
               </p>
            </div>
        </div>
    </div>
  )
}

export default Proitems;