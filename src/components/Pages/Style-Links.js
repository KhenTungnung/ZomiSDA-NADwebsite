import React from 'react';
import styled, {css} from 'styled-components/macro' /*added the macro to include the {css} */
import {Button} from "../Button";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

/** NAV STYLES **/
export const Nav = styled.nav`
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
export const Logo = styled(Link)`
  ${NavLink}; /* taken from the NavLink above. just adds the style onto here*/
  font-style: italic;
  font-size: 30px;
`
export const MenuBars = styled(FaBars)`
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
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const NavMenuLinks = styled(Link)`
  ${NavLink};

  &:hover{color: #000d1a;}
`
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`
export const AboutNav = styled.div`
  ${NavLink};
  padding: 5rem 10rem;
  align-content: center;
  margin-right: -48px;
`
export const NavMenuOverallBar = styled.nav`
  ${Nav};
  background-color: lightskyblue;
  height: 100px;
`

/**     */