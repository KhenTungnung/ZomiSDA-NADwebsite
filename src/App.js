import React from "react"
import Navbar from "./components/navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import {SliderDataOne} from "./data/SliderData";

function App() {
  return (
      <>
          <GlobalStyle />
          <Navbar />
          <Hero slides={SliderDataOne}/>   {/*to tell Hero what slides means in Hero.js. SliderDataOne is from SliderData.js */}
      </>
  );
}

export default App;
