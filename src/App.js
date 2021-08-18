import React, {useState} from "react";
import Navbar from "./components/Pages/navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Pages/Hero";
import {SliderDataOne} from "./data/SliderData";
import Dropdown from "./components/Dropdowns/Dropdown";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/Pages/About";
import LessonandBibleStudy from "./components/Pages/Lesson&BibleStudy";
import BooksAndArticles from "./components/Pages/BooksAndArticles";
import Directory from "./components/Pages/Directory";
import Resources from "./components/Pages/Resources";
import Contact from "./components/Pages/Contact";
import {PawlpiUpnaGuipiData} from "./data/PawlpiUpnaGuipiData";
import PawlpiUpnaGuipi from "./components/Pages/PawlpiUpnaGuipi";


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
              <Route path='/about' exact component={() => <About toggle={toggle} {...PawlpiUpnaGuipiData} />}/>
              <Route path='/lessons&biblestudy' exact component={() => <LessonandBibleStudy toggle={toggle}/>}/>
              <Route path='/books&articles' exact component={() => <BooksAndArticles toggle={toggle}/>}/>
              <Route path='/directory' exact component={() => <Directory toggle={toggle}/>}/>
              <Route path='/resources' exact component={() => <Resources toggle={toggle}/>}/>
              <Route path='/contact' exact component={() => <Contact toggle={toggle}/>}/>
              <Route path='/about/pawlpiupna' exact component={() => <PawlpiUpnaGuipi {...PawlpiUpnaGuipiData} toggle={toggle} />}/>

          </Switch>
      </Router>
  );
}

export default App;
