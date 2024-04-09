import "./App.css";
import { Categorias } from "./Components/CatalogoSemillas";
import NavBar from "./Components/NavBar";
import SliderImg from "./Components/Slider";
import { NextUIProvider } from "@nextui-org/react";
import Beginning from "./Components/beginning";

function App() {
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
    </NextUIProvider>
  );
}

export default App;
