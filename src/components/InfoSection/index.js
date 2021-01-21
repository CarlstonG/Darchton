import React from 'react'
import { InfoContainer, InfoRow, InfoWwrapper, 
    Column1, TextWrapper,
    TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Column2, Img } from './InfoElements'
    import image from '../images/img1.png'
    import {Button} from '../ButtonElements'

const InfoSection = ({lightBg, id, imgStart, topLine, headLine, darkText, description,
    buttonLabel, alt
}) => {
    return (
        <div>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWwrapper imgStart={imgStart}>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='/signin'>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={image} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWwrapper>
            </InfoContainer>
        </div>
    )
}

export default InfoSection
