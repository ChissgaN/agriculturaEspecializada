import React from "react";

export const Cards = ({ imgProyect, tituloCategoria }) => {
  return (
    <>
      <div className="2xl:w-[520px] 2xl:h-[490px] xl:w-[420px] xl:h-[400px] lg:w-[320px] lg:h-[280px]  md:w-[390px] md:h-[300px] sm:w-[550px] sm:h-[400px] max-sm:w-[380px] max-sm:h-[300px]  relative my-4 rounded-[10px] overflow-hidden ">
        <img src={imgProyect} alt="" className="w-full h-full absolute" />
        <button className="absolute bg-green-300 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded text-white hover:pointer hover:bg-green-700 transition-[5s]  hover:scale-110  duration-300 ease-in-out">
          {tituloCategoria}
        </button>
      </div>
    </>
  );
};
