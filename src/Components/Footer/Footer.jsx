import React from "react";
import { Input } from "@nextui-org/react";
import { useState } from "react";

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

  return (
    <> 
    <div className="flex py-16 px-20 bg-gray-100">

   
    <div className="w-[50%]">
      <h1 className="text-[40px]">Nos interesa saber tu opinion</h1>
      <p>Dejanos aquí tus sugerencias y comentarios...</p>
    </div>
    <div className="w-[50%] ">
      <form>
        <div className="mb-4 flex gap-10">
          <input
            type="text"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border rounded-[10px] focus:outline-none focus:border-green-500  "
            placeholder="Nombre Completo "
          />
          <input
            type="email"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border rounded-[10px] focus:outline-none focus:border-green-500"
            placeholder="Email"
          />
        </div>
        <div className="mb-4"></div>
        <div className="mb-4">
          <input
            type="text"
            id="input3"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border rounded-[10px] focus:outline-none focus:border-green-500"
            placeholder="Asunto"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full px-3 py-2 mt-1 border rounded-[10px] focus:outline-none focus:border-green-500"
            name="input4"
            id="input4"
            cols="30"
            rows="10"
            placeholder="Escribe tu mensaje..."
            value={formData.input4}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-500 rounded-[10px] hover:bg-green-600"
        >
          Enviar
        </button>
      </form>
    </div>
    </div>
    </>
  );
}
