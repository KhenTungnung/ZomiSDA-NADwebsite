import React, {useState} from 'react'
import styled, {css} from 'styled-components/macro' /*added the macro to include the {css} */
import {menuData} from "../../data/MenuData";
import {Button} from "../Button";
import AboutDropdown from "../Dropdowns/AboutDropdown"; /* imports the bars */
import {Nav, NavMenu, NavMenuLinks, Logo, NavBtn, MenuBars, AboutNav} from './Style-Links';

const Navbar = ({toggle}) => {
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
    )
}

export default Navbar