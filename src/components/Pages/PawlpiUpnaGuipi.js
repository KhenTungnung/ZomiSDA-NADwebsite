import React, {useState} from 'react';
import {Button} from "../Button";
import {AboutData, menuData} from "../../data/MenuData";
import AboutDropdown from "../Dropdowns/AboutDropdown";
import {Nav, NavLink, NavMenu, SubmenuNav, NavMenuOverallBar, SubMenuLinks, Section, Container, ColumnRight, ColumnLeft} from "../Style-Links";
import {Navbar} from './navbar'
import parse from 'html-react-parser'

const PawlpiUpnaGuipi = ({content, toggle}) => {
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
    content = content.replace(/([A-Z]{2,})/g, "$1".bold());
    return (
        <>
            <NavMenuOverallBar>
                {/** The main nav menu */}
                <Navbar/>
                {/** The about submenu */}
                <SubmenuNav>
                    <NavMenu>
                        {AboutData.map((item, index) => (
                            <SubMenuLinks to={item.link} key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeMenu}>
                                {item.title}
                            </SubMenuLinks>
                        ))}
                        {dropdown && <AboutDropdown />}
                    </NavMenu>
                </SubmenuNav>
            </NavMenuOverallBar>
            <p style={{padding: '5rem', whiteSpace: 'pre-wrap'}}>
                {parse(content)}     {/**The stupid freaking paragraph*/}
            </p>
        </>
    )
}
export default PawlpiUpnaGuipi