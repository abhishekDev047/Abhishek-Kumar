import React from 'react';
import Head from 'next/head';
import Proitems from './proitems';
import { useState, useEffect } from 'react';
import proData from "../../files/data.js";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      setData(proData);
  }, []);
 
  return (
   <div className='flex flex-col px-auto'>
        <Head> <title>My Projects </title></Head>
    <div className='flex flex-col sm:flex-row flex-wrap w-full px-2'>
      {data.map((project,index)=>(
        <Proitems title={project.name} desc={project.description} techno={project.technologies} pink={project.link} rode={project.source} type={project.type} src={project.img} key={index}/>
      ))}
    </div>
    <div className='pro text-center'>
      I am still working on some projects so when you visit here next time , you will spot some new projects. 
    </div>
  </div>
  )
}

export default Projects;