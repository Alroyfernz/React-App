import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,WebsiteRights,SocialMediaWrap,SocialLogo,SocialIconLinks,SocialIcons,
} from "./FooterEle";

import {BiCopyright} from 'react-icons/bi'

import{
    FaFacebook,
    FaInstagram,
    FaTwitter
} from "react-icons/fa"
function Footer({id}) {
  return (
    <FooterContainer id={id}>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>

              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Carrers</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

         

          

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Contact us</FooterLinkTitle>

              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Carrers</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo>
                    dolla
                </SocialLogo>
                <WebsiteRights>
                    dolla <BiCopyright/> {new Date().getFullYear()} All rights reversed
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLinks href="/" target="_blank">
<FaFacebook/>
                    </SocialIconLinks>
                    <SocialIconLinks href="/" target="_blank">
<FaInstagram/>
                    </SocialIconLinks>
                    <SocialIconLinks href="/" target="_blank">
<FaTwitter/>
                    </SocialIconLinks>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}
//justtocheckcheckoutingit
export default Footer;
