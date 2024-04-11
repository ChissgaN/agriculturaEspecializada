import React from "react";

export const Index = ({ procesoImg, tituloProceso, descripcionProceso }) => {
  return (
    <>
    <div className="">
        <img src={procesoImg} alt="" className="rounded-[10px] w-[400px] h-[270px]"/>
        <h2 className="text-[23px] py-4 px-2" > <strong>{tituloProceso}</strong></h2>
        <p className="mx-2 text-pretty  max-w-[630px] h-[120px] truncate">{descripcionProceso}</p>
        </div>
       
      
    </>
  );
};
