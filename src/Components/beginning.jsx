import { Button } from "@nextui-org/react";
import React from "react";
import search from "/search.svg";

export default function Beginning() {
  return (
    <section className="beginning-container w-[100%] max-sm:w-screen max-md:w-[100%]">
      <div className="my-8 w-[100%] border border-blue-500 relative px-6 p-5 max-sm:w-screen max-sm:px-5 max-md:w-[80%]">
        <h1 className="text-[32px] mb-2">¡Comienza a sembrar hoy!</h1>
        <div className="flex items-center w-[75%] border border-red-500 max-sm:w-[100%] ">
          <img src={search} alt="Search" className="mr-2" />
          <input
            className="w-[70%] h-[40px]  p-6 pl-[40px] "
            type="text"
            placeholder="¿Qué quieres sembrar?"
          />
          <Button color="success" className="ml-4 max-sm:ml-2">
            Button
          </Button>
        </div>
      </div>
    </section>
  );
}