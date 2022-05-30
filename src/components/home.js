import React from 'react'
import Footer from '../common/homeNav/Footer';
import HomeNavbar from '../common/homeNav/HomeNavbar';
import Slider from '../common/homeNav/Slider';


export const Home = () => {
  return (
    <div>
    <div className="shadow p-3 mb-3 bg-white rounded" >
     <HomeNavbar/>
    </div>
    <Slider/>
    <Footer/>
    </div>
  )
}
export default Home;