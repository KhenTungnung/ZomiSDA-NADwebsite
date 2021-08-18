import React from 'react';
import styled, {css} from 'styled-components/macro' /*added the macro to include the {css} */
import {Button} from "./Button";
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
  
  @media screen and (max-width: 1350px){
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
  
  @media screen and (max-width: 1350px){
    display: none;
  }
`
export const NavMenuLinks = styled(Link)`
  ${NavLink};

  &:hover{color: #000d1a;}
`
export const SubMenuLinks = styled(Link)`
  ${NavLink};
  
  &:hover{color: #000d1a; border: 2px solid black; padding: 1rem 1rem;}
`
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`
export const SubmenuNav = styled.div`
  ${NavLink};
  padding: 5rem 10rem;
  align-content: center;
  margin-left: 12.5rem;
`
export const NavMenuOverallBar = styled.nav`
  ${Nav};
  background-color: lightskyblue;
  height: 100px;
`

/** CONTENT STYLES     */
export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`
export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px)/2);
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};
  
  h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p{
    margin-bottom: 2rem;
  }
`
export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px){
    order: ${({reverse}) => (reverse ? '2' : '1')};
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    @media screen and (max-width: 768px){
      width:90%;
      height:90%;
    }
  }
`