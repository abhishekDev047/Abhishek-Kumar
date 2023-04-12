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
 
  return (<>
        <Head> <title>My Projects </title></Head>
    <div className='flex flex-col sm:flex-row flex-wrap w-full '>
      {data.map((project)=>(
        <Proitems title={project.name} desc={project.description} techno={project.technologies} link={project.link} code={project.source} type={project.type} src={project.img} key={project.name}/>
      ))}
    </div>
  </>
  )
}

export default Projects;