import React, { useState } from "react";
import logo from "/public/LOGO_AGRICULTURA-edit.png";
import form from "/public/footer/form.png";
import instagram from "/public/footer/instagram.svg";
import facebook from "/public/footer/facebook.svg";
import whatssap from "/public/footer/whatssap.svg";
export default function Footer() {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Obtén solo el ID del formulario de Google Forms
    const formId = "1FAIpQLSfsiNmTI6q736lgmMA1wWcHKHXDjZToX2uDNV-lj1FTowIEeA";
    const baseUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?usp=sf_link`;
    const queryParams = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      queryParams.append(`entry.${key}`, value);
    }

    const googleFormUrl = baseUrl + queryParams.toString();

    // Redirige al usuario a la URL del formulario de Google
    window.open(googleFormUrl);
  };

  return (
    <>
      <div className=" px-20 bg-gray-200 w-full">
        <div className="flex justify-between items-center py-14">
          <img src={logo} alt="" className="w-32" />

          <div className="flex gap-4 cursor-pointer">
            <img
              src={instagram}
              alt=""
              className="w-10 transform hover:scale-[1.2] transition duration-300 ease-in-out h-full filter hover:invert hover:red "
            />
            <img
              src={facebook}
              alt=""
              className="w-10 transform hover:scale-[1.2] transition duration-300 ease-in-out h-full filter hover:invert hover:red "
            />
            <img
              src={whatssap}
              alt=""
              className="w-10 transform hover:scale-[1.2] transition duration-300 ease-in-out h-full filter hover:invert hover:red "
            />
          </div>
        </div>
        <div className="flex justify-around">
          <div>
            <ul className="cursor-pointer">
              <h4 class="mb-2 ">
                <strong>Comprar Productos </strong>
              </h4>

              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Frutas
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300  ">
                Ipot
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300  ">
                Flores
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300  ">
                Arbol
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300  ">
                Productos
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300  ">
                Hortalizas
              </li>
            </ul>
          </div>

          <div>
            <ul className="cursor-pointer">
              <h4 class="mb-2">
                <strong>Comprar Productos </strong>
              </h4>

              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Todos
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Frutas
              </li>

              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Productos
              </li>
            </ul>
          </div>

          <div>
            <ul className="cursor-pointer">
              <h4 class="mb-2">
                <strong>Comprar Productos </strong>
              </h4>

              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Todos
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Frutas
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Ipot
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Flores
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Arbol
              </li>
              <li class="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Productos
              </li>
            </ul>
          </div>
        </div>

      <div className="flex justify-end">
        <div className="py-10 flex flex-col text-right">
          <h1 className="text-[40px]">Comentarios o Preguntas</h1>
         
       
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className=" transform hover:scale-[1.2] transition duration-300 ease-in-out h-full "
            >
              <img src={form} alt="" className="w-[80px] " />
            </button>
          </form>
        </div>
        </div>
       
        <p className="py-10 ">©2024 Distribuidora Agricultura Especializada</p>
      </div>
     
    </>
  );
}
