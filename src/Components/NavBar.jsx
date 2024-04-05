import React, { useState } from "react";
import menuT from "/menuToggle.svg";
import logo from "/logo.png";
import car from "/icon-cart.svg";
import iconMenu from "/icon-menu.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [carBuy, setCarBuy] = useState(false);

  const toggleCar = () => {
    setCarBuy(!carBuy);
  };

  const menuItems = ["Productos", "Contacto", "Acerca de nosotros"];

  return (
    <div className="">
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white">
        <NavbarContent className="mt-4 ">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden mt-5"
          />
          <NavbarBrand>
            <img src={logo} alt="Logo" className="w-[120px] h-[55px]  " />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10 mt-7 " justify="center">
          <NavbarItem>
            <Link href="#">Productos</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Contacto
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Acerca de nosotros
            </Link>
          </NavbarItem>
        </NavbarContent>
        {
          <NavbarContent justify="end" className="mt-5">
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                onClick={toggleCar}
                className="relative flex items-center"
              >
                <div className="flex items-center mt-4">
                  <img src={car} alt="LogoC" className="w-[25px] h-[23px]" />
                  <span className="rounded-xl text-xs px-2 py-1 text-black ml-1">
                    0
                  </span>
                </div>
              </Button>
            </NavbarItem>
          </NavbarContent>
        }
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        {carBuy && (
          <div className=" rounded-md bg-white shadow-md absolute right-9 top-28 z-40">
            <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
            <hr />

            <p className=" text-center py-8">Your cart is empty</p>

            <article className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-4 py-4">
              <div>
                <h6>asdas</h6>
                <p>
                  <span>$asdf x a</span>{" "}
                  <span className="font-bold">$asdfasd</span>
                </p>
              </div>
            </article>
          </div>
        )}
      </Navbar>
    </div>
  );
}