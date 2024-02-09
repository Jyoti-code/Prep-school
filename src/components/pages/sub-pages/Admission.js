import React from 'react'
import SideToolbar from '../SideToolbar'
import Header from '../Header'
import Footer from '../Footer'

export default function Admission() {
  return (
    <div className="tm-container-1340px has-side-panel side-panel-right">      
            <SideToolbar/>
           <div id="wrapper" className="clearfix">
            <Header/>

            <div className='main-content-area'>
                <section class="page-title divider layer-overlay overlay-theme-colored1-8 section-typo-light bg-img-center" data-tm-bg-img="assets/images/bg/bg1.jpg" style={{ backgroundImage: `url('assets/images/bg/bg1.jpg')` }}>
                    <div class="container pt-90 pb-90">
                        <div class="section-content">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h2 class="title text-white">Admission</h2>
                                    <nav role="navigation" class="breadcrumb-trail breadcrumbs">
                                        {/* <div class="breadcrumbs">
                                            <span class="trail-item trail-begin">
                                                <a href="*"><span>Home</span></a>
                                            </span>
                                            <span><i class="fa fa-angle-right"></i></span>
                                            <span class="trail-item"><a href="*"><span>Pages</span></a></span>
                                            <span><i class="fa fa-angle-right"></i></span>
                                            <span class="trail-item trail-end text-dark">About Us</span>
                                        </div> */}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <h1>Comming Soon</h1>

            <Footer />
            </div>
        </div>
  )
}
