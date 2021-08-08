import React, {useState} from "react";
import Navbar from "./components/navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import {SliderDataOne} from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import {InfoDataOne} from "./data/InfoData";

function App() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
      <>
          <GlobalStyle />
          <Navbar toggle={toggle}/>
          <Dropdown isOpen={isOpen} toggle={toggle}/>
          <Hero slides={SliderDataOne}/>   {/*to tell Hero what slides means in Hero.js. SliderDataOne is from SliderData.js */}
          <InfoSection {...InfoDataOne}/>
      </>
  );
}

export default App;
