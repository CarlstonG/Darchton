import React, {useState} from 'react'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import { homeObjOne } from '../InfoSection/Data'
import Navbar from '../Navbar'
import Services from '../Services'
import Sidebar from '../Sidebar'
import SubInfo from '../SubInfo'
import { homeObjTwo } from '../SubInfo/Data'


const Home = () => {
    const [ isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen}  toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <SubInfo {...homeObjTwo} />
            <Services/>
            <Footer/>
            
        </>
    )
}

export default Home
