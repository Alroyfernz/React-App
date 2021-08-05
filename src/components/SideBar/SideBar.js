import React from "react";
import {
  SideBarContainer,

  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarRoute,
  SideBtn,
  SideBarMenu,
  SideBarLink,
} from "./SideEle";

function SideBar({isOpen,toggle}) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>Discover</SideBarLink>
          <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>Sign Up</SideBarLink>
        </SideBarMenu>
        <SideBtn>
          <SideBarRoute to="/signin">Sign in</SideBarRoute>
        </SideBtn>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
