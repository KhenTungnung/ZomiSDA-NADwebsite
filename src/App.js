import React, {useState} from "react";
import Navbar from "./components/navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import {SliderDataOne} from "./data/SliderData";
import Dropdown from "./components/Dropdowns/Dropdown";
import InfoSection from "./components/InfoSection";
import {InfoDataOne} from "./data/InfoData";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";

function App() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
      <Router>
          <GlobalStyle />
          <Navbar toggle={toggle}/>
          <Dropdown isOpen={isOpen} toggle={toggle}/>

          <Switch>
              <Route path='/' exact component={() => <Hero slides={SliderDataOne}/>}/>   {/*to tell Hero what slides means in Hero.js. SliderDataOne is from SliderData.js */}
              {/**<InfoSection {...InfoDataOne}/>*/}
              <Route path='/about' exact component={() => <About toggle={toggle}/>}/>
          </Switch>
      </Router>
  );
}

export default App;
