import React from 'react'
import Icon1 from '../images/services1.svg'
import Icon2 from '../images/services2.svg'
import Icon3 from '../images/services3.svg'
import {RiShieldCheckLine} from 'react-icons/all'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
    ServicesIcon, ServicesH2, ServicesP, NavBtnLink
} from './ServicesElements'

const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
              <ServicesH1>Our Services</ServicesH1>
              <ServicesWrapper>
                  <ServicesCard>
                      <ServicesIcon src={Icon1}/>
                      <ServicesH2>Web Development</ServicesH2>
                      <ServicesP><RiShieldCheckLine/> Responsive Websites</ServicesP>
                      <ServicesP><RiShieldCheckLine/> E-commerce Platform</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Full Stack Development</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Professional Support Team</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Mobile App Development</ServicesP>
                      <ServicesP><RiShieldCheckLine/> From Design to Deployment</ServicesP>
                      <NavBtnLink to="/signin">Contact Us</NavBtnLink>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon2}/>
                      <ServicesH2>Branding</ServicesH2>
                      <ServicesP><RiShieldCheckLine/> Market Research</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Product Research</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Brand Creation</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Brand Logo and Design</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Professional Support Team</ServicesP>
                      <ServicesP><RiShieldCheckLine/> 24/7 365 Tech Support</ServicesP>
                      <NavBtnLink to="/signin">Contact Us</NavBtnLink>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon3}/>
                      <ServicesH2>VA Campaign</ServicesH2>
                      <ServicesP><RiShieldCheckLine/> Multimedia Marketing</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Admin Support</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Lead Generation</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Cold and Warm Calling Support</ServicesP>
                      <ServicesP><RiShieldCheckLine/> Affordable Fees</ServicesP>
                      <NavBtnLink to="/signin">Contact Us</NavBtnLink>
                  </ServicesCard>
              </ServicesWrapper>
              </ServicesContainer>  
        </>
    )
}

export default Services
