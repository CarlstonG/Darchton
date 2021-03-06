import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/all'
import {FooterContainer, FooterWrap, FooterLinksContainer, ImgBg, FooterLinksWrapper, FooterLinkItems,
FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink


} from './FooterElements'
import Darchtonlogo from '../images/Dlogo.png'

const Footer = () => {
    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>About</FooterLinkTitle>
                               <FooterLink to="/signin">Contact Us</FooterLink>
                               <FooterLink to="/signin">Services</FooterLink>
                               <FooterLink to="/signin">Terms of services</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>Services</FooterLinkTitle>
                               <FooterLink to="services">Web Development</FooterLink>
                               <FooterLink to="services">Branding</FooterLink>
                               <FooterLink to="services">VA Campaign</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to="/"> <ImgBg src={Darchtonlogo} alt="Logo"/> </SocialLogo>
                       <WebsiteRights>Darchton Services Corp. © {new Date().getFullYear()} All rights reserved.
                       </WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href="//www.facebook.com/Darchton-Solutions-Corporation-106030111483175" target="_blank" aria-label="Facebook">
                               <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href="//www.instagram.com/darchton_services/" target="_blank" aria-label="Intagram">
                               <FaInstagram/>
                           </SocialIconLink>
                           <SocialIconLink href="//twitter.com/DarchonServices" target="_blank" aria-label="Twitter">
                               <FaTwitter/>
                           </SocialIconLink>
                           <SocialIconLink href="//www.linkedin.com/company/darchton-services" target="_blank" aria-label="LinkedIn">
                               <FaLinkedin/>
                           </SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
       </FooterContainer>
    )
}

export default Footer
