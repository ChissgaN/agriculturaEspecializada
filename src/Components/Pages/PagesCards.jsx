import React, { useState } from "react";
import NavBar from "../NavBar";
import Verduras from "../../assets/agricultura/verduras1.jpg";
import ProductGrid from "./ProductGrid";
import { Button } from "@nextui-org/react";
import categorias from "../../../public/categorias.json";

import Pepino from "../../../public/pepino.webp";
import Tomate from "../../../public/tomate.webp";
import Cebolla from "../../../public/perejil.jpeg";
import Lechuga from "../../../public/lechuga.webp";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Tomate",
    price: 10,
    image: Tomate,
    descripcion: "hola estoy aquí",
  },
  {
    id: 2,
    name: "Cebolla",
    price: 8,
    image: Cebolla,
    descripcion: "hola estoy aquí",
  },
  {
    id: 3,
    name: "Pepino",
    price: 12,
    image: Pepino,
    descripcion: "hola estoy aquí",
  },
  {
    id: 4,
    name: "Lechuga",
    price: 12,
    image: Lechuga,
    descripcion: "hola estoy aquí",
  },
  {
    id: 5,
    name: "Tomate",
    price: 10,
    image: Tomate,
    descripcion: "hola estoy aquíasdaddddddddddddddddddddddddd",
  },
  {
    id: 6,
    name: "Cebolla",
    price: 8,
    image: Cebolla,
    descripcion:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  },
  {
    id: 7,
    name: "Pepino",
    price: 12,
    image: Pepino,
    descripcion:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
  },
  {
    id: 8,
    name: "Lechuga",
    price: 12,
    image: Lechuga,
    descripcion: "hola estoy aquíadasdasdasdasdadsasd",
  },
];

const PagesCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleModalClick = (event) => {
    if (event.target.classList.contains("modal-background")) {
      closeModal();
    }
  };

  return (
    <>
      <NavBar />
      <section className="mt-28 w-[90%] mx-auto relative flex justify-center items-center">
        <img
          className="bg-slate-700 rounded-2xl md:h-[420px] md:w-full"
          src={Verduras}
          alt=""
        />
        <div className="absolute text-white font-extrabold text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] ">
          VERDURAS
        </div>
      </section>
      <section className="container mx-auto p-4 w-[85%]">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold my-10">Verduras</h1>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Buscar verduras..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-fit px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <select className="h-[30%] px-2 py-2 border border-gray-300 rounded-md focus:outline-none">
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.tituloCategoria}>
                  {categoria.tituloCategoria}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4 w-[85%] flex">
        <div className=" container w-[20%] bg-white h-screen p-4 ">
          <h2 className="text-xl font-semibold mb-4">Categorías</h2>
          <ul className="space-y-2">
            {categorias.map((categoria) => (
              <li key={categoria.id} className="flex items-center">
                <img
                  src={categoria.imgProyect}
                  alt={categoria.tituloCategoria}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{categoria.tituloCategoria}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full py-4 ml-[10%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 w-fit">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                openModal={openModal}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center modal-background"
          onClick={handleModalClick}
        >
          <div className="bg-white py-8 px-6 rounded-lg w-[50%] h-[70%] flex gap-6 max-sm:w-[95%] max-sm:px-3 sm:w-[80%] sm:h-[70%] ">
            <div className="h-[100%] w-[50%] max-sm:w-[224px]  max-sm:h-[304px] sm:w-[60%]  sm:h-[80%] md:w-[276px] max-md:h-[390px] max-md:w-[276px] md:h-[390px] ">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full  object-cover rounded-md mb-4  max-sm:w-[224px]  max-sm:h-[304px] max-md:h-[390px] max-md:w-[276px]"
              />
              <div className="flex">
                <button className="w-[80%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto sm:hidden">
                  Agregar al carrito
                </button>
              </div>
            </div>
            <div className="h-[100%] w-[50%] flex flex-col max-sm:w-[40%] max-sm:h-full lg:w-[60%]">
              <div className="py-4 flex flex-col justify-between h-full w-full  ">
                <h2 className="text-xl font-semibold mb-2 ">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 ">
                  Precio: ${selectedProduct.price}
                </p>
                <p className="text-gray-600  w-full h-full overflow-hidden text-pretty mb-4">
                  Descripción: {selectedProduct.descripcion}
                </p>

                <div className="flex">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto max-sm:hidden">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PagesCards;
