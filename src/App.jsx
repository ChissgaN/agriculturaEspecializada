import "./App.css";
import { Categorias } from "./Components/CatalogoSemillas";
import NavBar from "./Components/NavBar";
import SliderImg from "./Components/Slider";
import { NextUIProvider } from "@nextui-org/react";
function App() {
  
  return (
    <NextUIProvider>
      <div className="">
        <NavBar />
        <SliderImg />
       
      </div>
      <Categorias/>
      
    </NextUIProvider>
  );
}

export default App;
