import React from "react";

export const Cards = ({imgProyect,
  tituloCategoria,
  her}) => {

  return (
    <>
      
        <div className="w-[500px] h-[400px] transform hover:scale-110 transition duration-300 ease-in-out  rounded-[10px] my-4 overflow-hidden relative">
          <img src={imgProyect} alt=""  className="w-full"/>
          <button className="absolute bg-green-300">{tituloCategoria}</button>
          
        </div>
      
    </>
  );
};
