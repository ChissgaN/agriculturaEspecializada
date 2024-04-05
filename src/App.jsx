import "./App.css";
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
    </NextUIProvider>
  );
}

export default App;
