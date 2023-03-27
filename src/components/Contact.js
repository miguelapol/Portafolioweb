import React from 'react';
export default function Contact(){
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
    return (
<section id="contact" className="relative">
  <div className="container px-10 py-10 mx-auto my-auto">
    <form
      data-netfly="true"
      name="contact"
      onSubmit={handleSubmit}
      className="mx-auto  lg:w-full md:w-full flex flex-col md:ml-auto w-2/5 md:py-8 mt-8 md:mt-0">
      <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
       Contacto
      </h2>
      <p className="leading-relaxed mb-5 text-center">
      Si estás interesado en conocer más sobre mi trabajo en el mundo del desarrollo web y cómo puedo contribuir a tu equipo, por favor completa el siguiente formulario de contacto. 
      </p>
      <div className="relative mb-4 lg:mx-">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Nombre
        </label>
        <br/>
        <input
          type="text"
          id="name"
          name="name"
          className="md:w-full lg:w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Correo electrónico
        </label>
        <br/>
        <input
          type="email"
          id="email"
          name="email"
          className="md:w-full lg:w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-400">
          Mensaje
        </label>
        <br/>
        <textarea
          id="message"
          name="message"
          className="md:w-full lg:w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg md:w-full lg:w-1/2">
        Enviar
      </button>
    </form>
  </div>
</section>

      );
}