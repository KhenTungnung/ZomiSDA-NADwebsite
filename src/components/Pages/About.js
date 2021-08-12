import React, {useState} from 'react';
import {Button} from "../Button";
import {AboutData, menuData} from "../../data/MenuData";
import AboutDropdown from "../Dropdowns/AboutDropdown";
import {Nav, NavLink, NavMenu, NavMenuLinks, Logo, MenuBars, NavBtn, AboutNav, NavMenuOverallBar} from "./Style-Links";

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