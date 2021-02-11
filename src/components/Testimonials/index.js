import React from 'react'
import {FaStar} from 'react-icons/all'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'

import './testi.css';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'



function Testimonial() {
  
    return (
  
           <div id="testimonials">
            <div className="container">
                <h2>"Testimonials"</h2>
                <OwlCarousel
                className="owl-carousel owl-theme"
                     items="1"
                     autoplay="true"
                     nav
                     dots
                     loop
                >
                    <div className="testimonials-box item">
                        <div className="testimonial-photo">
                            <img src={image2} alt="client Profile"/>
                        </div>
                        <h3>Jessica Thompson <span>CEO Butler Realty</span></h3>
                        <p className="ratings"><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></p>
                        <p>Wow , I have my own website now, and Don't have to worry about paying monthly for leasing website.</p>
                    </div>
                    <div className="testimonials-box item">
                        <div className="testimonial-photo">
                            <img src={image1} alt="client Profile"/>
                        </div>
                        <h3>Tyler Morris <span>Real Estate Agent</span></h3>
                        <p className="ratings"><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></p>
                        <p>My VA is superb, he gives me more free time to focus on my clients</p>
                    </div>
                    <div className="testimonials-box item">
                        <div className="testimonial-photo">
                            <img src={image3} alt="client Profile"/>
                        </div>
                        <h3>Andrew Micheals <span>CTO Digital Market Point</span></h3>
                        <p className="ratings"><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></p>
                        <p>Did a an amazing job, whole process was easy and communications are very professional</p>
                    </div>
                </OwlCarousel>
    
            </div>
        </div>
     
       
    )
}

export default Testimonial
