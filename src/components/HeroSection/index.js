import React, {useState} from 'react'
import Video from '../video/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent,
    HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight
} from './HeroElements'  
import {Button} from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)


    const onHover = () => {
        setHover(!hover)
    }


    return (
       <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Professional Virtual Solutions Made Easy
                </HeroH1>
                <HeroP>
                    We Offer Expert Technical Virtual Solutions For your Business Needs...
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signin" onMouseEnter={onHover}>Get Started{hover ? <ArrowForward />: <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
       </HeroContainer>
    )
}

export default HeroSection
