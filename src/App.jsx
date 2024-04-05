import "./App.css";
import { Categorias } from "./Components/CatalogoSemillas";
import NavBar from "./Components/NavBar";
import SliderImg from "./Components/Slider";
import { NextUIProvider } from "@nextui-org/react";
import Beginning from "./Components/beginning";

function App() {
  
  return (
    <NextUIProvider>
      <div className="">
        <NavBar />

     
       

        <div className="relative h-full">
          <SliderImg />
          <div className="absolute inset-0 flex w-[70%]">
            <Beginning />
          </div>
        </div>

      </div>
      <Categorias/>
      
    </NextUIProvider>
  );
}

export default App;
