import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./Navele";
import { FaBars } from "react-icons/fa";
const Navbar = (prop) => {

  const [scrollNav,setNav]=useState(false);

const changeNav=()=>{
  if(window.scrollY>=80){
    setNav(true)
  }else{
    setNav(false)
  }
}


useEffect(()=>{
  window.addEventListener('scroll',changeNav)
},[]);

const toggleHome=()=>{
  scroll.scrollToTop();
}
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}> Dolla </NavLogo>
          <MobileIcon onClick={prop.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}> Home </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover"
              smooth={true} duration={500}  exact='true' offset={-80}> Discover </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              smooth={true} duration={500}  exact='true' offset={-80}
              to="services"> Services </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500}  exact='true' offset={-80}> About </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
