import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Contact from './contact';
import { useSelector } from 'react-redux';


const HomePage = () => {
    const mode =useSelector(state=>state.Mode.value);
    return (
        <div className={mode}>
        <div className='dark:text-white dark:bg-zinc-900'>
            <Head> <title>abhishek-kumar</title></Head>
            <div className='h-[550px] bg-slate-200 dark:bg-zinc-800 text-center flex flex-col topsection'>
                <div className='mx-auto md:my-auto mt-60 flex flex-col items-center text-2xl'>
                    <p>Hi I am</p>
                    <p className='text-red-900'> Abhishek Kumar</p>
                    <p className=''> Frontend Web Developer </p>
                </div>
                <div className=' mx-auto  items-center justify-center flex flex-row flex-wrap mt-10 pb-5'>
                    <p className='mx-2 my-2 '>
                        <Image
                            className='rounded-xl'
                            src={'/images/js.png'}
                            alt=''
                            width={60}
                            height={60}
                        />
                    </p>
                    <p className='mx-2 my-2 '>
                        <Image
                            className='rounded-xl'
                            src={'/images/react.png'}
                            alt=''
                            width={60}
                            height={60}
                        />
                    </p>
                    <p className='mx-2 my-2 '>
                        <Image
                            className='rounded-xl'
                            src={'/images/tailwind.png'}
                            alt=''
                            width={120}
                            height={120}
                        />
                    </p>
                </div>
            </div>

            <div className='h-[300px] px-4 flex flex-col text-left midsection pt-3'>

                <div className='my-auto'>
                        Welcome , i have created so many projects  and <Link href={'/components/projects'} className='text-blue-700 hover:text-blue-400' >here</Link> you can find some of them. Please do not forgot to give me feedback about them . <Link className='text-blue-700 hover:text-blue-400' href={'/components/about'}>Here</Link>  are my contact details  And also check my <Link className='text-blue-700 hover:text-blue-400 even:' href={'/'}> Github</Link> profile for source code and check out other  repositories. <i>Thank You</i>  
                </div>
            </div>
            <div className='footer text-sm flex flex-col h-[150px] bg-black text-white'>

                <div className='pt-2'>
                        <div>
                                        Thank you for visiting 
                                    </div>

                                    <div>
                                        <Contact/>
                                    </div>
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default HomePage;