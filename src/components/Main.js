import React from 'react'
import SideToolbar from './pages/SideToolbar'
import Header from './pages/Header'
import Home from './pages/Home'
import Features from './pages/Features'
import BabyCareSection from './pages/BabyCareSection'
import Programms from './pages/Programms'
import ChooseUs from './pages/ChooseUs'
import Gallery from './pages/Gallery'
import VideoSection from './pages/VideoSection'
import Events from './pages/Events'
import Teachers from './pages/Teachers'
import Blogs from './pages/Blogs'
import Footer from './pages/Footer'

export default function Main() {
  return (
     <div className="tm-container-1340px has-side-panel side-panel-right"> 
      <SideToolbar/>
      <div id="wrapper" className="clearfix">
        <Header/>
        <div className="main-content-area">
        <Home/>
        <Features/>
        <BabyCareSection/>
        <Programms/>
        <ChooseUs/>
        <Gallery/>
       
        <VideoSection/>
        <Events/>
        <Teachers/>
        <Blogs/>
        </div>
        <Footer/>
       <a className="scrollToTop" href="*"><i className="fa fa-angle-up"></i></a>  
      </div>           
    </div>
  )
}
