import React from 'react';
import Head from 'next/head';
import Proitems from './proitems';
import { useState, useEffect } from 'react';
import projects from "../../files/data.js";
import Contact from './contact';
import { useSelector } from 'react-redux';

const Projects = () => {
  const [data, setData] = useState([]);
  const mode =useSelector(state=>state.Mode.value);

  useEffect(() => {
      setData(projects);
  }, []);
 
  return (
    <div className={mode}>
   <div className='flex flex-col px-2 items-center sm:text-base w-full dark:bg-zinc-900 dark:text-white'>
        <Head> <title>My Projects </title></Head>
    <div className='flex flex-col sm:flex-row flex-wrap w-full px-2'>
      {data.map((project,index)=>(
        <Proitems title={project.name} desc={project.description} techno={project.technologies} pink={project.link} rode={project.source} type={project.type} src={project.img} key={index}/>
      ))}
    </div>
    <div className='footer text-sm flex flex-col h-[150px] bg-black text-white w-screen'>

<div className='pt-2 text-center'>
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

export default Projects;