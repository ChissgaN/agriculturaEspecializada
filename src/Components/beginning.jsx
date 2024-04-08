import { Button } from "@nextui-org/react";
import React from "react";
import search from "/search.svg";

export default function Beginning() {
  return (
    <section className="beginning-container w-[100%] max-sm:w-screen max-md:w-[100%]">
      <div className="my-8 w-[100%]  relative px-10 p-5 max-sm:w-screen max-sm:px-5 max-md:w-[80%]">
        <h1 className="text-[35px] mb-2 text-white xl-">
          ¡Comienza a sembrar hoy!
        </h1>
        <div className="flex gap-5">
          <div className="flex items-center w-[50%]  max-sm:w-[100%] bg-white px-3 rounded-[10px] transition-[5s] hover:scale-105  duration-200 ease-in-out">
            <img
              src={search}
              alt="Search"
              className="mr-2   p-2   hover:scale-105  duration-200 ease-in-out"
            />
            <input
              className="w-[100%] h-full bg-transparent focus:outline-none flex items-center justify-center content-center pt-0 mt-0 pb-1"
              type="text"
              placeholder="¿Qué quieres sembrar hoy?"
            />
          </div>
          <Button
            color="success"
            className="ml-4 max-sm:ml-2 bg-green-100 hover:bg-green-200 transition-[5s]  hover:scale-110  duration-300 ease-in-out rounded-[10px] py-[13px] px-6 text-gray-500"
          >
            Buscar
          </Button>
        </div>
      </div>
    </section>
  );
}
