import React from 'react'
import { Link } from 'react-router-dom' 
export default function Header() {

    return (
        <>
            <header id="header" className="header header-layout-type-header-2rows">                
                <div className="header-nav tm-enable-navbar-hide-on-scroll">
                    <div className="header-nav-wrapper navbar-scrolltofixed">
                        <div className="menuzord-container header-nav-container">
                            <div className="container position-relative">
                                <div className="row header-nav-col-row">
                                    <div className="col-sm-auto align-self-center">
                                        <a className="menuzord-brand site-brand" href="index.html">
                                            <img className="logo-default logo-1x" src="assets/images/logo-wide.png" alt="Logo" />
                                            <img className="logo-default logo-2x retina" src="assets/images/logo-wide-2x.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <div className="col-sm-auto ms-auto pr-0 align-self-center">
                                        <nav id="top-primary-nav" className="menuzord theme-color2 menuzord-responsive" data-effect="fade" data-animation="none" data-align="right">
                                            <ul id="main-nav" className="menuzord-menu menuzord-right menuzord-indented scrollable" style={{ maxHeight: '100%' }}>
                                                <li className="active">
                                                    <Link to="/" style={{height:'47px'}}>Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about" style={{height:'47px'}}>About</Link>
                                                </li>
                                                <li>
                                                    <Link to="/approach" style={{height:'47px'}}>Approach</Link>
                                               </li>
                                                <li>
                                                    <Link to="/academic" style={{height:'47px'}}>Academic</Link>
                                                </li>
                                                <li>
                                                    <Link to="/admission" style={{height:'47px'}}>Admission</Link>
                                                </li>
                                                <li>
                                                    <Link to="/fee" style={{height:'47px'}}>Fee</Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact" style={{height:'47px'}}>Contact</Link></li>
                                                <li className="scrollable-fix"></li></ul>
                                        </nav>
                                    </div>
                                    <div className="col-sm-auto align-self-center nav-side-icon-parent">
                                        <ul className="list-inline nav-side-icon-list">

                                            <li className="hidden-mobile-mode">
                                                <div className="top-nav-mini-cart-icon-container">

                                                </div>
                                            </li>
                                            <li className="hidden-mobile-mode">
                                                <div id="side-panel-trigger" className="side-panel-trigger">
                                                    <a href="*">
                                                        <div className="hamburger-box">
                                                            <div className="hamburger-inner"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div id="top-nav-search-form" className="clearfix">
                                            <form action="#" method="GET">
                                                <input type="text" name="s" value="" placeholder="Type and Press Enter..." autocomplete="off" />
                                            </form>
                                            <a href="*" id="close-search-btn"><i className="fa fa-times"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-block d-xl-none">
                                    <div className="col-12">
                                        <nav id="top-primary-nav-clone" className="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right" >
                                            <ul id="main-nav-clone" className="menuzord-menu menuzord-right menuzord-indented scrollable">
                                            
                                                <ul id="main-nav" className="menuzord-menu menuzord-right menuzord-indented scrollable">
                                                    <li className="active">
                                                        <a href="index.html">Home<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                                                        <ul className="dropdown" style={{ right: 'auto' }}>
                                                            <li><a href="index.html">Multipage Layout1</a></li>
                                                            <li><a href="assets/index-mp-layout2.html">Multipage Layout2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="index.html">Pages<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                                                        <ul className="dropdown" style={{ right: 'auto' }}>
                                                            <li><a href="assets/page-about.html">About</a></li>
                                                            <li><a href="assets/page-event-grid.html">Event</a></li>
                                                            <li><a href="assets/page-event-details.html">Event Details</a></li>
                                                            <li><a href="assets/page-gallery.html">Gallery</a>
                                                            </li><li><a href="assets/page-testimonial.html">Testimonial</a>
                                                            </li><li><a href="assets/shop-products-sidebar.html">Shop</a>
                                                            </li><li><a href="assets/page-404.html">404</a>
                                                            </li></ul>
                                                    </li>
                                                    <li><a href="assets/page-courses1.html">Courses<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                                                        <ul className="dropdown" style={{ right: 'auto' }}>
                                                            <li><a href="assets/page-courses1.html">Course Grid</a></li>
                                                            <li><a href="assets/page-course-details.html">Course Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="assets/page-team-grid.html">Teachers<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                                                        <ul className="dropdown" style={{ right: 'auto' }}>
                                                            <li><a href="assets/page-team-grid.html">Teachers</a></li>
                                                            <li><a href="assets/page-team-details.html">Teachers Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="assets/news-grid.html">Blog<span className="indicator"><i className="fa fa-angle-down"></i></span></a>
                                                        <ul className="dropdown" style={{ right: 'auto' }}>
                                                            <li><a href="assets/news-grid.html">News Grid</a></li>
                                                            <li><a href="assets/news-details.html">News Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="assets/page-contact.html">Contact</a></li>
                                                    <li className="scrollable-fix"></li></ul><li className="scrollable-fix"></li></ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            
        </>
    )
}
