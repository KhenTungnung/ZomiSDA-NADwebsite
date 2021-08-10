import React, {useState} from "react";
import Navbar from "./components/Pages/navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Pages/Hero";
import {SliderDataOne} from "./data/SliderData";
import Dropdown from "./components/Dropdowns/Dropdown";
import InfoSection from "./components/InfoSection";
import {InfoDataOne} from "./data/InfoData";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/Pages/About";
import LessonandBibleStudy from "./components/Pages/Lesson&BibleStudy";


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
              <Route path='/lessons&biblestudy' exact component={() => <LessonandBibleStudy toggle={toggle}/>}/>
          </Switch>
      </Router>
  );
}

export default App;
