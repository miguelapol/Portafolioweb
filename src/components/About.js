import React from "react";
import "../css/styles.css"
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Miguel
            <br className="hidden lg:inline-block" />Me encanta construir aplicaciones web.
          </h1>
          <p className="mb-8 leading-relaxed">
          Soy un desarrollador junior con experiencia en el desarrollo web en la parte front-end y backend. A través de mi participación en un bootcamp de LaunchX adquirí habilidades en el desarrollo full-stack, utilizando herramientas como Node.js. Además, cuento con una certificación en Azure, lo que me permite aplicar mis conocimientos en una plataforma de alto rendimiento y escalabilidad. Estoy motivado para seguir aprendiendo y creciendo en el campo de desarrollo de software y estoy seguro de que mi experiencia y habilidades serán un gran valor para cualquier empresa que busque un desarrollador junior con potencial.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg md:flex items-center">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}