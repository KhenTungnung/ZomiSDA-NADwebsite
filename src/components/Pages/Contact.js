import React, {useState} from 'react';
import {Button} from "../Button";
import AboutDropdown from "../Dropdowns/AboutDropdown";
import {NavLink, NavMenuOverallBar} from "../Style-Links";
import {Navbar} from './navbar'

const Contact = ({toggle}) => {
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

        </NavMenuOverallBar>
        

    )
}
export default Contact