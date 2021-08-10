import React, {useState} from 'react';
import styled from 'styled-components'
import {Button} from "./Button";
import {AboutData, menuData} from "../data/MenuData";
import AboutDropdown from "./Dropdowns/AboutDropdown";
import {css} from "styled-components/macro";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  //background-color: lightskyblue;
`
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`
const Logo = styled(Link)`
  ${NavLink}; /* taken from the NavLink above. just adds the style onto here*/
  font-style: italic;
  font-size: 30px;
`
const MenuBars = styled(FaBars)`
  display: none;
  
  @media screen and (max-width: 768px){
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-10%, 10%);
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`
const NavMenuLinks = styled(Link)`
  ${NavLink};

  &:hover{color: #000d1a;}
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`
const AboutNav = styled.div`
  ${NavLink};
  padding: 2rem 3rem;
  align-content: center;
  margin-right: -48px;
`
const NavMenuOverallBar = styled.nav`
  ${Nav};
  background-color: blue;
  height: 100px;
`
const About = ({toggle}) => {
    const [dropdown, setDropdown] = useState(false);
    const closeMenu = () => setDropdown(false)
    const onMouseEnter = () => {
        if(window.innerWidth < 960){setDropdown(true)}
        else(setDropdown(true))
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){setDropdown(false)}
        else(setDropdown(false))
    }

    return (
        <NavMenuOverallBar>
            {/** The main nav menu */}
            <Nav>
                <Logo to="/">ZOMI SDA NAD</Logo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeMenu}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                    {dropdown && <AboutDropdown />}
                </NavMenu>
                <NavBtn>
                    <Button to="/contact" primary='true'>
                        Contact Us
                    </Button>
                </NavBtn>

            </Nav>
            {/** The about submenu */}
            <AboutNav>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {AboutData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeMenu}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                    {dropdown && <AboutDropdown />}
                </NavMenu>
            </AboutNav>
        </NavMenuOverallBar>

    )
}
export default About