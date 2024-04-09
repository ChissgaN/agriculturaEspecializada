import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../NavBar";
import SliderImg from "../Slider";

import Beginning from "../beginning";
import Footer from "../Footer/Footer";
import { Categorias } from "../CatalogoSemillas";

export default function Main() {
  return (
    <NextUIProvider>
      <div className="md:w-full">
        <NavBar />

        <div className="relative h-auto">
          <SliderImg />
          <div className="absolute inset-0 flex w-[100%]">
            <Beginning />
          </div>
        </div>
      </div>

      <div className="flex justify-center  my-10 ">
        <div className=" grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-6 w-[90%] ">
          <Categorias />
        </div>
      </div>
      <section className="h-[20vh]">
        <Footer />
      </section>
    </NextUIProvider>
  );
}
