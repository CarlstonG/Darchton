import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/all'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    ImgBg,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink
} from './NavbarElements'

import Darchtonlogo from '../images/Dlogo.png'

const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 90) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    


    return (
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to="home"><ImgBg src={Darchtonlogo} alt="Logo"/></NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="about" 
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      
                      >About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="discover"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                      >Discover</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="services"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                      >Services</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="testimonials"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                      >Testimonials</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/signin">Contact Us</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
    )
}

export default Navbar;
