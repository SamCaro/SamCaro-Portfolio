import { Header } from "./Header";

import React from 'react'

export const AboutMe = () => {
  return (
    <>
       <Header />
      <div className="flex ml-[15px] p-4 sm:ml-[400px] transition-transform duration-500 hover:scale-125 hover:text-GrayishBlue">
        <p className="text-4xl font-bold">ACERCA</p>
        <p className="text-4xl font-bold ml-2">DE MI</p>
      </div>

      <div className="flex space-x-3 p-6 justify-between  sm:p-[500px] sm:mt-[-400px] sm:ml-[-300px]">
        <div className='flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
          <p>React</p>
          <p>Javascript</p>
          <p>PostgreSQL</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Tailwind</p>
        </div>

        <div className=" text-[20px]  text-Roboto flex flex-col space-x-1 transform rotate-180 font-bold perspective-1 hover:scale-75 hover:text-zinc-300 transition-transform duration-1000 ease-in-out">
          <span className="transform rotate-90">S</span>
          <span className="transform rotate-90">K</span>
          <span className="transform rotate-90">I</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">S</span>
        </div>

        <div className='flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
          <p>Atencion al Detalle</p>
          <p>Continuo</p>
          <p>Aprendizaje</p>
          <p>Resilencia</p>
          <p>Trabajo</p>
          <p>Colaborativo</p>

        </div>
      </div>
      <div className="sm:ml-[850px] sm:mt-[-900px] sm:h-[600px] sm:w-[250px] bg-black  w-full h-[350px] p-10   sm:rounded-lg text-white
      ">        
        <p className=" text-Roboto">
        Hola mi nombre es {' '}
        <span className="font-bold text-[18px] text-GrayishBlue hover:text-white">
        SANDRA CARO
        </span> {' '}
        y uso {' '}
        <span className="font-bold text-[18px] text-GrayishBlue hover:text-white ">
        SAMCARO
        </span> {' '}
         como apodo en mis redes sociales. Soy una Desarrolladora Web de Colombia. Me apasiona el emprendimiento, la creación de nuevos proyectos útiles, tengo curiosidad por aprender {' '}
        <span className="font-bold text-[18px] text-GrayishBlue hover:text-white ">
        nuevas tecnologías
           </span> {' '}
           y {' '}
           <span className="font-bold text-[18px] text-GrayishBlue hover:text-white ">
           codificación creativa 
           </span> 
            . {' '} Disfruto mi vida afrontando retos y evolucionando día a día. Me encanta el campo, nadar y pasar tiempo con mi familia.
        </p>
      </div>
    </>
  )
}