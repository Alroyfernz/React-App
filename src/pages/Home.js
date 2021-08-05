import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroSection/Hero'
import { homeObjOne,homeObjThree,homeObjTwo} from '../components/InfoSection/Data'
import Info from '../components/InfoSection/Info'
import Navbar from '../components/Navbar/Navbar'
import Service from '../components/Services/Service'
import SideBar from '../components/SideBar/SideBar'

const Home = () => {
    const [isOpen,setIsOpen]=useState(false)


const toggle=()=>{
    setIsOpen(!isOpen)
}

const id='footer';
    return (
        <>
            
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Service/>
            <Info {...homeObjThree}/>
            <Footer />
            
        </>
    )
}

export default Home
