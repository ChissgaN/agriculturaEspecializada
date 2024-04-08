import React, { useState } from "react";
import "./Botones.css";

export const Cards = ({ imgProyect, tituloCategoria }) => {
  return (
    <>
      <div className="2xl:w-[520px] 2xl:h-[490px] xl:w-[420px] xl:h-[400px] lg:w-[320px] lg:h-[280px]  md:w-[390px] md:h-[300px] sm:w-[550px] sm:h-[400px] max-sm:w-[380px] max-sm:h-[300px]  relative my-4 rounded-[10px] overflow-hidden contenedor flex justify-center items-center">
        <img
          src={imgProyect}
          alt=""
          className="w-full h-full absolute transition duration-500 ease-in-out transform hover:scale-[1.2] "
        />
        <button className="absolute bg-green-300   px-4 py-2 rounded text-white boton">
          {tituloCategoria}
        </button>
      </div>
    </>
  );
};
