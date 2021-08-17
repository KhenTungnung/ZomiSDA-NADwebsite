import React, {useState} from 'react';
import {Button} from "../Button";
import {DirectoryData} from "../../data/MenuData";
import AboutDropdown from "../Dropdowns/AboutDropdown";
import {Nav, NavMenu, NavMenuLinks, Logo, MenuBars, NavBtn, SubmenuNav, NavMenuOverallBar, SubMenuLinks} from "../Style-Links";
import {Navbar} from './navbar';

const Directory = ({toggle}) => {
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
            <Navbar/>
            {/** The about submenu */}
            <SubmenuNav>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {DirectoryData.map((item, index) => (
                        <SubMenuLinks to={item.link} key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeMenu}>
                            {item.title}
                        </SubMenuLinks>
                    ))}
                    {dropdown && <AboutDropdown />}
                </NavMenu>
            </SubmenuNav>
        </NavMenuOverallBar>
    )
}
export default Directory