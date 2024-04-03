import React, { useState } from "react";
import logo from "/logoP.jpg";
import menuT from "/menuToggle.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="flex items-center justify-center bg-red-800 h-[100px] gap-5 max-md:justify-around md:justify-around">
      <div className="max-sm:w-[125px] cursor-pointer">
        <img src={logo} alt="Logo" />
      </div>

      <div className="relative">
        <div
          className="w-[50px] h-auto md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <img src={menuT} alt="" />
        </div>

        {menuOpen && (
          <div className=" border border-gray-300 rounded-tr-none rounded-lg shadow-md p-2 md:hidden   
          
          flex bg-red-500 w-[175px] h-[250px] absolute top-[106px] left-[] right-0 mx-auto z-10 flex-col place-content-between py-[39px] items-center text-Dark-grayish-blue max-md:text-[22px] 
      
      after:content-[&quot;&quot;] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-red-500 after:border-t-transparent after:border-l-transparent 
      
      tablet:after:hidden tablet:bg-transparent tablet:relative tablet:flex tablet:flex-row tablet:h-full tablet:top-0 tablet:w-[400px] tablet:py-0 sm:text-White 
      
      lg:w-[490px] ">
            
            <a href="" className="block mb-2 ">
              Productos
            </a>
            <a href="" className="block mb-2">
              Contacto
            </a>
            <a href="" className="block text-center">
              Acerca de nosotros
            </a>
          </div>
        )}

        <div className=" max-sm:hidden sm:hidden md:flex md:w-[450px] md:justify-around lg:w-[525px] xl:w-[650px]">
          <a href="">Productos</a>
          <a href="">Contacto</a>
          <a href="">Acerca de nosotros</a>
                
        </div>
      </div>
    </section>
  );
}
