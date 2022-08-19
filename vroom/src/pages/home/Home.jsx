import React from 'react'
// import "./home.scss";
import Navbar1 from "../../components/navbar1/Navbar1"
import Location from '../../components/location/Location'
import AfterLocation from "../../components/afterLocation/AfterLocation"
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <div className='home'>
       <Navbar1/>
       <Location />
       <AfterLocation/>
        <Footer/>
         

    </div>
  ) 
}

export default Home