import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../NavBar";
import Verduras from "../../assets/agricultura/verduras1.jpg";
import ProductGrid from "./ProductGrid";
import Pepino from "../../../public/pepino.webp";
import Tomate from "../../../public/tomate.webp";
import cebolla from "../../../public/cebolla.webp";
import lechuga from "../../../public/lechuga.webp";

const products = [
  {
    id: 1,
    name: "Tomate",
    price: 10,
    image: Tomate,
  },
  {
    id: 2,
    name: "Cebolla",
    price: 8,
    image: cebolla,
  },
  {
    id: 3,
    name: "Pepino",
    price: 12,
    image: Pepino,
  },
  {
    id: 4,
    name: "Lechuga",
    price: 12,
    image: lechuga,
  },
  {
    id: 1,
    name: "Tomate",
    price: 10,
    image: Tomate,
  },
  {
    id: 2,
    name: "Cebolla",
    price: 8,
    image: cebolla,
  },
  {
    id: 3,
    name: "Pepino",
    price: 12,
    image: Pepino,
  },
  {
    id: 4,
    name: "Lechuga",
    price: 12,
    image: lechuga,
  },
];

export default function PagesCards() {
  return (
    <>
      <NextUIProvider>
        <NavBar />
        <section className="mt-28  w-[90%] mx-auto relative flex justify-center items-center">
          <img
            className="bg-slate-700 rounded-2xl  md:h-[420px] md:w-full"
            src={Verduras}
            alt=""
          />
          <div className="absolute text-white font-extrabold text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] ">
            VERDURAS
          </div>
        </section>
        <div className="container mx-auto p-4 w-[92%]">
          <h1 className="text-3xl font-semibold my-10">Verduras</h1>
          <ProductGrid products={products} />
        </div>
      </NextUIProvider>
    </>
  );
}
