import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function MainPrep() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

    return (

        <div class="tm-container-1340px has-side-panel side-panel-right">

            <div id="side-panel-container" class="dark" data-tm-bg-img="../assets/images/side-push-bg.jpg">
                <div class="side-panel-wrap">
                    <div id="side-panel-trigger-close" class="side-panel-trigger"><a href="*"><i
                        class="fa fa-times side-panel-trigger-icon"></i></a></div>
                    <img class="logo mb-50" src="../assets/images/logo-wide.png" alt="Logo" />
                    <p>Our motive is to help the poor, helpless and orphan children all over the world.</p>
                    <div class="widget">
                        <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Latest News</h4>
                        <div class="latest-posts">
                            <article class="post clearfix pb-0 mb-10">
                                <a class="post-thumb" href="../assets/news-details.html"><img
                                    src="../assets/images/shop/portfolio-sq1.jpg" alt="Portfolio" /></a>
                                <div class="post-right">
                                    <h5 class="post-title mt-0"><a href="../assets/news-details.html">Sustainable
                                        Construction</a></h5>
                                    <p>Lorem ipsum dolor...</p>
                                </div>
                            </article>
                            <article class="post clearfix pb-0 mb-10">
                                <a class="post-thumb" href="../assets/news-details.html">
                                    <img src="../assets/images/shop/portfolio-sq2.jpg" alt="Portfolio" /></a>
                                <div class="post-right">
                                    <h5 class="post-title mt-0"><a href="../assets/news-details.html">Industrial Coatings</a>
                                    </h5>
                                    <p>Lorem ipsum dolor...</p>
                                </div>
                            </article>
                            <article class="post clearfix pb-0 mb-10">
                                <a class="post-thumb" href="../assets/news-details.html"><img
                                    src="../assets/images/shop/portfolio-sq3.jpg" alt="Portfolio" /></a>
                                <div class="post-right">
                                    <h5 class="post-title mt-0"><a href="../assets/news-details.html">Storefront
                                        Installations</a></h5>
                                    <p>Lorem ipsum dolor...</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="widget">
                        <h5 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Contact Info</h5>
                        <div class="tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
                            <ul>
                                <li class="contact-name">
                                    <div class="icon"><i class="flaticon-contact-037-address"></i></div>
                                    <div class="text">John Doe</div>
                                </li>
                                <li class="contact-phone">
                                    <div class="icon"><i class="flaticon-contact-042-phone-1"></i></div>
                                    <div class="text"><a href="tel:+510-455-6735">+510-455-6735</a></div>
                                </li>
                                <li class="contact-email">
                                    <div class="icon"><i class="flaticon-contact-043-email-1"></i></div>
                                    <div class="text"><a href="../../index.html#ee87808881ae97819b9c8a81838f8780c08d8183"><span
                                        class="__cf_email__"
                                        data-cfemail="acc5c2cac3ecd5c3d9dec8c3c1cdc5c282cfc3c1">[email&#160;protected]</span></a></div>
                                </li>
                                <li class="contact-address">
                                    <div class="icon"><i class="flaticon-contact-047-location"></i></div>
                                    <div class="text">3982 Browning Lane Carolyns Circle, California</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="wrapper" class="clearfix">

                <header id="header" class="header header-layout-type-header-2rows">

                    <div class="header-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-auto header-top-left align-self-center text-center text-xl-start">
                                    <ul class="element contact-info">
                                        <li class="contact-phone"><i class="fa fa-phone font-icon sm-display-block"></i> Tel: +440-98-5298</li>
                                        <li class="contact-email"><i class="fa fa-envelope font-icon sm-display-block"></i> <a
                                            href="../../index.html" class="__cf_email__"
                                            data-cfemail="fc95929a93bc99849d918c9099d29f9391">[email&#160;protected]</a></li>
                                        <li class="contact-address"><i class="fa fa-map font-icon sm-display-block"></i> 121 King Street,
                                            Melbourne</li>
                                    </ul>
                                </div>
                                <div class="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
                                    <div class="element pt-0 pb-0">
                                        <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                                            <li><a class="social-link" href="*"><i class="fab fa-facebook"></i></a></li>
                                            <li><a class="social-link" href="*"><i class="fab fa-twitter"></i></a></li>
                                            <li><a class="social-link" href="*"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="element pt-0 pt-lg-10 pb-0">
                                        <a href="../assets/ajax-load/form-appointment.html"
                                            class="btn btn-theme-colored2 btn-sm ajaxload-popup">Make an Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="header-nav tm-enable-navbar-hide-on-scroll">

                        <div class="header-nav-wrapper navbar-scrolltofixed">
                            <div class="menuzord-container header-nav-container">
                                <div class="container position-relative">
                                    <div class="row header-nav-col-row">
                                        <div class="col-sm-auto align-self-center">
                                            <a class="menuzord-brand site-brand" href="*">
                                                <img class="logo-default logo-1x" src="../assets/images/logo-wide.png" alt="Logo" />
                                                <img class="logo-default logo-2x retina" src="../assets/images/logo-wide-2x.png"
                                                    alt="Logo" />
                                            </a>
                                        </div>
                                        <div class="col-sm-auto ms-auto pr-0 align-self-center">
                                            <nav id="top-primary-nav" class="menuzord theme-color2" data-effect="fade" data-animation="none"
                                                data-align="right">
                                                <ul id="main-nav" class="menuzord-menu">
                                                    <li class="active">
                                                        <a href="../../index.html">Home</a>
                                                        <ul class="dropdown">
                                                            <li><a href="../../index.html">Multipage Layout1</a></li>
                                                            <li><a href="../assets/index-mp-layout2.html">Multipage Layout2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="*">Pages</a>
                                                        <ul class="dropdown">
                                                            <li><a href="*">About</a></li>
                                                            <li><a href="*">Event</a></li>
                                                            <li><a href="*">Event Details</a></li>
                                                            <li><a href="*">Gallery</a></li>
                                                            <li><a href="*">Testimonial</a></li>
                                                            <li><a href="*">Shop</a></li>
                                                            <li><a href="*">404</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="*">Courses</a>
                                                        <ul class="dropdown">
                                                            <li><a href="*">Course Grid</a></li>
                                                            <li><a href="*">Course Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="*">Teachers</a>
                                                        <ul class="dropdown">
                                                            <li><a href="*">Teachers</a></li>
                                                            <li><a href="*">Teachers Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="*">Blog</a>
                                                        <ul class="dropdown">
                                                            <li><a href="*">News Grid</a></li>
                                                            <li><a href="*l">News Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="*">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div class="col-sm-auto align-self-center nav-side-icon-parent">
                                            <ul class="list-inline nav-side-icon-list">
                                                <li class="hidden-mobile-mode"><a href="*" id="top-nav-search-btn"><i
                                                    class="search-icon fa fa-search"></i></a></li>
                                                <li class="hidden-mobile-mode">
                                                    <div class="top-nav-mini-cart-icon-container">
                                                        <div class="top-nav-mini-cart-icon-contents">
                                                            <a class="mini-cart-icon" href="../assets/shop-cart.html"
                                                                title="View your shopping cart">
                                                                <img src="../assets/images/shopping-cart.png" width="25" alt="cart" /><span
                                                                    class="items-count">1</span> <span class="cart-quick-info">1 item - <span
                                                                        class="amount"><span class="currencySymbol">&pound;</span>18.00</span></span>
                                                            </a>
                                                            <div class="dropdown-content">
                                                                <ul class="cart_list product_list_widget">
                                                                    <li class="mini_cart_item">
                                                                        <a href="*" class="remove remove_from_cart_button" aria-label="Remove this item"
                                                                            data-product_id="18832" data-cart_item_key="#"
                                                                            data-product_sku="woo-beanie">&times;</a>
                                                                        <a href="*"> <img class="attachment-thumbnail"
                                                                            src="../assets/images/shop/product.jpg" width="300" height="300"
                                                                            alt="Product" />Beanie</a>
                                                                        <span class="quantity">1 &times; <span class="amount">
                                                                            <span class="currencySymbol">&pound;</span>18.00</span></span>
                                                                    </li>
                                                                </ul>
                                                                <p class="total"> <strong>Subtotal:</strong> <span
                                                                    class="woocommerce-Price-amount amount"><span
                                                                        class="currencySymbol">&pound;</span>18.00</span> </p>
                                                                <div class="buttons cart-action-buttons">
                                                                    <div class="row">
                                                                        <div class="col-6 pe-0"><a href="../assets/shop-cart.html"
                                                                            class="btn btn-theme-colored2 btn-block btn-sm wc-forward">View Cart</a></div>
                                                                        <div class="col-6 ps-1"><a href="../assets/shop-checkout.html"
                                                                            class="btn btn-theme-colored1 btn-block btn-sm checkout wc-forward">Checkout</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="hidden-mobile-mode">
                                                    <div id="side-panel-trigger" class="side-panel-trigger">
                                                        <a href="*">
                                                            <div class="hamburger-box">
                                                                <div class="hamburger-inner"></div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div id="top-nav-search-form" class="clearfix">
                                                <form action="#" method="GET">
                                                    <input type="text" name="s" value placeholder="Type and Press Enter..." autocomplete="off" />
                                                </form>
                                                <a href="*" id="close-search-btn"><i class="fa fa-times"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row d-block d-xl-none">
                                        <div class="col-12">
                                            <nav id="top-primary-nav-clone"
                                                class="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive"
                                                data-effect="slide" data-animation="none" data-align="right">
                                                <ul id="main-nav-clone" class="menuzord-menu menuzord-right menuzord-indented scrollable">
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div class="main-content-area">
                    <section id="home" class="bg-pos-center-center home-wave-object" data-tm-bg-img="./assets/images/bg/bg1.jpg" style={{ backgroundImage: `url('../assets/images/bg/bg1.jpg')` }}>
                        <div class="container" data-tm-padding-top="180px" data-tm-padding-bottom="180px">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="home-banner">
                                        <div class="banner-inner">
                                            <span class="text-white">Special Kindergarten</span>
                                            <h2 class="text-white">Best Children <br /> Kindergarten</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col"></div>
                            </div>
                        </div>
                        <div class="tm-floating-objects">
                            <span class="floating-object-2 tm-animation-floating" data-tm-bg-img="../assets/images/objects/home-object1.png"
                                data-tm-opacity="0.8" data-tm-width="115" data-tm-height="115" data-tm-top="8%" data-tm-left="10%"></span>
                            <span class="floating-object-2 tm-animation-floating" data-tm-bg-img="../assets/images/objects/home-object2.png"
                                data-tm-opacity="0.8" data-tm-width="140" data-tm-height="150" data-tm-top="15%" data-tm-right="42%"></span>
                            <span class="floating-object-2 tm-animation-floating" data-tm-bg-img="../assets/images/objects/home-object3.png"
                                data-tm-opacity="0.8" data-tm-width="150" data-tm-height="165" data-tm-top="55%" data-tm-right="45%"></span>
                        </div>
                    </section>
                    <section class="bg-theme-coloredd2 z-index-1">
                        <div class="container pt-0">
                            <div class="section-title">
                                <div class="row">
                                    <div class="col"></div>
                                    <div class="col-lg-6">
                                        <div class="tm-sc-section-title section-title text-center">
                                            <div class="title-wrapper">
                                                <h6 class="text-white">Programm</h6>
                                                <h2 class="title text-theme-colored1">Care Programms</h2>
                                                <p class>Lorem ipsum dolor sit amet, consectetur adipisicing elitrem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>
                            </div>
                            <div class="section-content">
                                <div class="row">
                                    <div class="col-md-6 col-xl-4">
                                        <div class="tm-sc-services services-style-current-theme text-center mb-lg-50">
                                            <div class="tm-service">
                                                <div class="thumb">
                                                    <img class="rounded-circle" src="../assets/images/service/1.jpg" alt="Service" />
                                                    <div class="service-icon">
                                                        <img src="../assets/images/icon/1.png" alt="icon" />
                                                    </div>
                                                </div>
                                                <div class="details clearfix">
                                                    <h4 class="title"><a href="../assets/page-course-details.html">Nursery</a></h4>
                                                    <p class>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua Totam rem.</p>
                                                    <ul class="service-info-list">
                                                        <li><span class="font-weight-800 text-theme-colored3">Age:</span> 2-4 Years</li>
                                                        <li><span class="font-weight-800 text-theme-colored3">Time:</span> 9.00 - 11.00 </li>
                                                        <li><span class="font-weight-800 text-theme-colored3">Price:</span> $30</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xl-4">
                                        <div class="tm-sc-services services-style-current-theme text-center mb-sm-50">
                                            <div class="tm-service">
                                                <div class="thumb">
                                                    <img class="rounded-circle" src="../assets/images/service/2.jpg" alt="service" />
                                                    <div class="service-icon bg-theme-colored3">
                                                        <img src="../assets/images/icon/2.png" alt="icon" />
                                                    </div>
                                                </div>
                                                <div class="details clearfix">
                                                    <h4 class="title"><a href="../assets/page-course-details.html">Paper Plates
                                                        Art</a></h4>
                                                    <p class>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua Totam rem.</p>
                                                    <ul class="service-info-list">
                                                        <li><span class="font-weight-800 text-theme-colored3">Age:</span> 2-4 Years</li>
                                                        <li><span class="font-weight-800 text-theme-colored3">Time:</span> 9.00 - 11.00 </li>
                                                        <li><span class="font-weight-800 text-theme-colored3">Price:</span> $30</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xl-4">
                                        <div class="tm-sc-services services-style-current-theme text-center">
                                            <div class="tm-service">
                                                <div class="thumb">
                                                    <img class="rounded-circle" src="../assets/images/service/3.jpg" alt="service" />
                                                    <div class="service-icon bg-theme-colored4">
                                                        <img src="../assets/images/icon/1.png" alt="icon" />
                                                    </div>
                                                </div>
                                                <div class="details clearfix">
                                                    <h4 class="title"><a href="../assets/page-course-details.html">Drawing</a></h4>
                                                    <p class>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua Totam rem.</p>
                                                    <ul class="service-info-list">
                                                        <li><span class="font-weight-800 text-theme-colored3">Age:</span> 2-4 Years</li>
                                                        <li><span class="font-weight-800 text-theme-colored3">Time:</span> 9.00 - 11.00 </li>
                                                        <li><span class="font-weight-800 text-theme-colored3">Price:</span> $30</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tm-floating-objects">
                            <span class="floating-object-2 tm-animation-floating z-index--1"
                                data-tm-bg-img="images/objects/object-scissors1.png" data-tm-opacity="0.8" data-tm-width="210"
                                data-tm-height="210" data-tm-bottom="12%" data-tm-left="2%"></span>
                            <span class="floating-object-2 tm-animation-floating z-index--1"
                                data-tm-bg-img="images/objects/object-jar1.png" data-tm-opacity="0.8" data-tm-width="210"
                                data-tm-height="210" data-tm-top="8%" data-tm-right="3%"></span>
                        </div>
                    </section>

                    <div>
            <section>
                <div class="container-fluid p-0">
                    <div class="tm-sc-custom-columns-holder tm-cc-two-columns tm-cc-responsive-mode-1280">
                        <div class="tm-sc-custom-columns-holder-item bg-theme-colored2" data-item-class="tm-custom-columns-12"
                            data-1200-up="100px 10% 60px 28%" data-1199-down="100px 10% 60px 10%" data-991-down="100px 10% 60px 10%"
                            data-767-down="100px 10% 60px 10%" data-575-down="100px 10% 60px 10%"
                            data-tm-bg-img="../assets/images/bg/why-choose-bg1.png">
                            <div class="item-inner">
                                <div class="item-content tm-custom-columns-12">
                                    <div data-aos="fade-right">
                                    <div class="why-choose-us-block">
                                        <h6 class="mt-0 font-italic text-white">Like Us</h6>
                                        <h2 class="text-theme-colored1 mb-40">Why Choose Us</h2>
                                        <div class="why-choose-us-item">
                                            <div class="why-choose-us-img">
                                                <img src="../assets/images/objects/why-choose-icon1.png" alt="*"/>
                                            </div>
                                            <div class="why-choose-us-content">
                                                <h4 class="text-theme-colored4">Knowledge Classes</h4>
                                                <p class="text-white-f1">Lorem ipsum dolor sit amet nsectetur cing ndisse suscipit sagitis leo
                                                    sit ipsum dolor sit amet nsectetur.</p>
                                            </div>
                                        </div>
                                        <div class="why-choose-us-item">
                                            <div class="why-choose-us-img">
                                                <img src="../assets/images/objects/why-choose-icon4.png" alt="*"/>
                                            </div>
                                            <div class="why-choose-us-content">
                                                <h4 class="text-theme-colored3">Full day session</h4>
                                                <p class="text-white-f1">Lorem ipsum dolor sit amet nsectetur cing ndisse suscipit sagitis leo
                                                    sit ipsum dolor sit amet nsectetur.</p>
                                            </div>
                                        </div>
                                        <div class="why-choose-us-item">
                                            <div class="why-choose-us-img">
                                                <img src="../assets/images/objects/why-choose-icon3.png" alt="*"/>
                                            </div>
                                            <div class="why-choose-us-content">
                                                <h4 class="text-theme-colored1">Last minute request</h4>
                                                <p class="text-white-f1">Lorem ipsum dolor sit amet nsectetur cing ndisse suscipit sagitis leo
                                                    sit ipsum dolor sit amet nsectetur.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tm-sc-custom-columns-holder-item bg-img-left border-bottom-1px bg-silver-light"
                            data-item-class="tm-custom-columns-11" data-1200-up="8% 24%  5% 8%" data-1199-down="0 10% 0 10%"
                            data-991-down="0 10% 0 10%" data-767-down="0 10% 0 10%" data-575-down="0 10% 0 10%">
                            <div class="item-inner">

                                <div class="item-content tm-custom-columns-11">
                                    <div data-aos="fade-left">
                                    <img class="mt-lg-100 mb-30 mb-sm-10" src="../assets/images/about/about6.jpg" alt="*"/>
                                        <h5 class="text-theme-colored2">About Kid Education</h5>
                                        <h2 class="text-theme-colored1">A Great Place for Your Child to Grow At</h2>
                                        <p>Our priority is to make sure that your children are safe while playing or studying at the center,
                                            and therefore, we implement innovative methology for our educational activities and encourage our
                                            staff to develop their skills. We implement innovative methology for our educational activities and
                                            encourage our staff to develop their skills.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

                    <section class="border-top-1px border-theme-colored1">
                        <div class="container">
                            <div class="section-title">
                                <div class="row">
                                    <div class="col"></div>
                                    <div class="col-lg-6">
                                        <div class="tm-sc-section-title section-title text-center">
                                            <div class="title-wrapper">
                                                <h6>Checkout</h6>
                                                <h2 class="title text-theme-colored1">Centre Photo Gallery</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>
                            </div>
                            <div class="section-content">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="tm-sc-gallery tm-sc-gallery-grid gallery-style1-basic">
                                            <div id="gallery-holder-618422"
                                                class="isotope-layout masonry grid-3 gutter-15 clearfix lightgallery-lightbox">
                                                <div class="isotope-layout-inner">
                                                    <div class="isotope-item isotope-item-sizer"></div>
                                                    <div class="isotope-item cat1">
                                                        <div class="isotope-item-inner">
                                                            <div class="tm-gallery">
                                                                <div class="tm-gallery-inner">
                                                                    <div class="thumb">
                                                                        <a href="*">
                                                                            <img width="672" height="448"
                                                                                src="../assets/images/gallery/masonry-tiles-4col.jpg" class alt="masonry" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="tm-gallery-content-wrapper">
                                                                        <div class="tm-gallery-content">
                                                                            <div class="tm-gallery-content-inner">
                                                                                <div class="icons-holder-inner">
                                                                                    <div class="styled-icons icon-lg icon-dark icon-circled icon-theme-colored1">
                                                                                        <a class="lightgallery-trigger styled-icons-item"
                                                                                            data-exthumbimage="images/gallery/1.jpg"
                                                                                            data-src="../assets/images/gallery/1.jpg" title="Gallery 1"
                                                                                            href="../assets/images/gallery/1.jpg"><i
                                                                                                class="fa fa-plus"></i></a>
                                                                                        <a class="styled-icons-item" title="Gallery 1" href="*"><i
                                                                                            class="fa fa-link"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="isotope-item cat1 cat3">
                                                        <div class="isotope-item-inner">
                                                            <div class="tm-gallery">
                                                                <div class="tm-gallery-inner">
                                                                    <div class="thumb">
                                                                        <a href="*">
                                                                            <img width="672" height="448"
                                                                                src="../assets/images/gallery/3.jpg"
                                                                                class alt="gallery" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="tm-gallery-content-wrapper">
                                                                        <div class="tm-gallery-content">
                                                                            <div class="tm-gallery-content-inner">
                                                                                <div class="icons-holder-inner">
                                                                                    <div class="styled-icons icon-lg icon-dark icon-circled icon-theme-colored1">
                                                                                        <a class="lightgallery-trigger styled-icons-item"
                                                                                            data-exthumbimage="../assets/images/gallery/3.jpg"
                                                                                            data-src="../assets/images/gallery/3.jpg"
                                                                                            title="Gallery 3" href="../assets/images/gallery/3.jpg"><i
                                                                                                class="fa fa-plus"></i></a>
                                                                                        <a class="styled-icons-item" title="Gallery 3" href="*"><i
                                                                                            class="fa fa-link"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="isotope-item cat2 cat3">
                                                        <div class="isotope-item-inner">
                                                            <div class="tm-gallery">
                                                                <div class="tm-gallery-inner">
                                                                    <div class="thumb">
                                                                        <a href="*">
                                                                            <img width="672" height="448"
                                                                                src="../assets/images/gallery/masonry-tiles-3col-height.jpg" class
                                                                                alt="masonry" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="tm-gallery-content-wrapper">
                                                                        <div class="tm-gallery-content">
                                                                            <div class="tm-gallery-content-inner">
                                                                                <div class="icons-holder-inner">
                                                                                    <div class="styled-icons icon-lg icon-dark icon-circled icon-theme-colored1">
                                                                                        <a class="lightgallery-trigger styled-icons-item"
                                                                                            data-exthumbimage="../assets/images/gallery/2.jpg"
                                                                                            data-src="../assets/images/gallery/2.jpg" title="Gallery 2"
                                                                                            href="../assets/images/gallery/2.jpg"><i
                                                                                                class="fa fa-plus"></i></a>
                                                                                        <a class="styled-icons-item" title="Gallery 2" href="*"><i
                                                                                            class="fa fa-link"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="isotope-item cat2 cat3">
                                                        <div class="isotope-item-inner">
                                                            <div class="tm-gallery">
                                                                <div class="tm-gallery-inner">
                                                                    <div class="thumb">
                                                                        <a href="*">
                                                                            <img width="672" height="448"
                                                                                src="../assets/images/gallery/masonry-3col.jpg" class alt="masonry" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="tm-gallery-content-wrapper">
                                                                        <div class="tm-gallery-content">
                                                                            <div class="tm-gallery-content-inner">
                                                                                <div class="icons-holder-inner">
                                                                                    <div class="styled-icons icon-lg icon-dark icon-circled icon-theme-colored1">
                                                                                        <a class="lightgallery-trigger styled-icons-item"
                                                                                            data-exthumbimage="../assets/images/gallery/2.jpg"
                                                                                            data-src="../assets/images/gallery/2.jpg" title="Gallery 2"
                                                                                            href="../assets/images/gallery/2.jpg"><i
                                                                                                class="fa fa-plus"></i></a>
                                                                                        <a class="styled-icons-item" title="Gallery 2" href="*"><i
                                                                                            class="fa fa-link"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="isotope-item cat2 cat3">
                                                        <div class="isotope-item-inner">
                                                            <div class="tm-gallery">
                                                                <div class="tm-gallery-inner">
                                                                    <div class="thumb">
                                                                        <a href="*">
                                                                            <img width="672" height="448" src="../assets/images/gallery/2.jpg"
                                                                                class alt="gallery" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="tm-gallery-content-wrapper">
                                                                        <div class="tm-gallery-content">
                                                                            <div class="tm-gallery-content-inner">
                                                                                <div class="icons-holder-inner">
                                                                                    <div class="styled-icons icon-lg icon-dark icon-circled icon-theme-colored1">
                                                                                        <a class="lightgallery-trigger styled-icons-item"
                                                                                            data-exthumbimage="../assets/images/gallery/2.jpg"
                                                                                            data-src="../assets/images/gallery/2.jpg" title="Gallery 2"
                                                                                            href="../assets/images/gallery/2.jpg"><i
                                                                                                class="fa fa-plus"></i></a>
                                                                                        <a class="styled-icons-item" title="Gallery 2" href="*"><i
                                                                                            class="fa fa-link"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="isotope-item cat1 cat2">
                                                        <div class="isotope-item-inner">
                                                            <div class="tm-gallery">
                                                                <div class="tm-gallery-inner">
                                                                    <div class="thumb">
                                                                        <a href="*">
                                                                            <img width="672" height="448" src="../assets/images/gallery/1.jpg"
                                                                                class alt="gallery" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="tm-gallery-content-wrapper">
                                                                        <div class="tm-gallery-content">
                                                                            <div class="tm-gallery-content-inner">
                                                                                <div class="icons-holder-inner">
                                                                                    <div class="styled-icons icon-lg icon-dark icon-circled icon-theme-colored1">
                                                                                        <a class="lightgallery-trigger styled-icons-item"
                                                                                            data-exthumbimage="../assets/images/gallery/1.jpg"
                                                                                            data-src="../assets/images/gallery/1.jpg" title="Gallery 1"
                                                                                            href="../assets/images/gallery/1.jpg"><i
                                                                                                class="fa fa-plus"></i></a>
                                                                                        <a class="styled-icons-item" title="Gallery 1" href="*"><i
                                                                                            class="fa fa-link"></i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tm-floating-objects">
                            <span class="floating-object-2 tm-animation-flicker z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-long-arrow1.png" data-tm-opacity="0.8" data-tm-width="210"
                                data-tm-height="210" data-tm-top="6%" data-tm-left="0"></span>
                            <span class="floating-object-2 tm-animation-flicker z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-clip1.png" data-tm-opacity="0.8" data-tm-width="210"
                                data-tm-height="210" data-tm-bottom="6%" data-tm-left="0"></span>
                            <span class="floating-object-2 tm-animation-scaling z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-plane1.png" data-tm-opacity="0.8" data-tm-width="230"
                                data-tm-height="210" data-tm-top="0" data-tm-right="3%"></span>
                        </div>
                    </section>
                    <section class="bg-theme-colored2" data-tm-bg-img="../assets/images/bg/object-bg1.png">
                        <div class="container">
                            <div class="section-content">
                                <div class="row">
                                    <div class="col"></div>
                                    <div class="col-xl-8">
                                        <div class="video-block text-center mb-0">
                                            <div class="cp-video-divider section-typo-light">
                                                <div class="tm-sc-video-popup video-popup-current-style1 box-hover-effect play-video-button">
                                                    <div class="effect-wrapper">
                                                        <div class="icon">
                                                            <i class="fa fa-play"></i>
                                                        </div>
                                                        <div class="video-button-text"></div>
                                                        <a class="hover-link" data-lightbox-gallery="youtube-video"
                                                            href="https://www.youtube.com/mcvqOUtcAJg" title></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 class="text-white popup-video-title" data-tm-font-size="3.8rem">Kipso one & only mission is to
                                                extend your knowledge base</h2>
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="container">
                            <div class="section-title">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="tm-sc-section-title section-title text-center">
                                            <div class="title-wrapper">
                                                <h6>Events</h6>
                                                <h2 class="title text-theme-colored1">Upcoming Event</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitrem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-content">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                        <div class="upcoming-events-current-style1">
                                            <div class="event-item bg-theme-colored1 p-sm-30">
                                                <ul class="event-info-list text-white">
                                                    <li><span class="font-weight-800">Age:</span> 2-4 Years</li>
                                                    <li><span class="font-weight-600">Time:</span> 9.00 - 11.00 </li>
                                                    <li><span class="font-weight-600">Price:</span> $30</li>
                                                </ul>
                                                <h4 class="event-title text-white"><a
                                                    href="../assets/page-event-details.html">Magic Princess Birthday Party</a></h4>
                                                <a href="../assets/page-event-details.html">
                                                    <div class="event-arrows">
                                                        <img class="image1" src="../assets/images/objects/event-arrow1.png" alt="event" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="event-item bg-theme-colored3 p-sm-30">
                                                <ul class="event-info-list text-white">
                                                    <li><span class="font-weight-800">Age:</span> 4-6 Years</li>
                                                    <li><span class="font-weight-600">Time:</span> 11.00 - 12.00 </li>
                                                    <li><span class="font-weight-600">Price:</span> $50</li>
                                                </ul>
                                                <h4 class="event-title text-white"><a href="../assets/page-event-details.html">Kids
                                                    Grooming with New Lesson</a></h4>
                                                <a href="../assets/page-event-details.html">
                                                    <div class="event-arrows">
                                                        <img class="image1" src="../assets/images/objects/event-arrow1.png" alt="event" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="event-item bg-theme-colored4 p-sm-30">
                                                <ul class="event-info-list text-white">
                                                    <li><span class="font-weight-800">Age:</span> 6-9 Years</li>
                                                    <li><span class="font-weight-600">Time:</span> 9.00 - 11.00 </li>
                                                    <li><span class="font-weight-600">Price:</span> $80</li>
                                                </ul>
                                                <h4 class="event-title text-white"><a
                                                    href="../assets/page-event-details.html">Magic Paper Plates Art Gallery</a>
                                                </h4>
                                                <a href="../assets/page-event-details.html">
                                                    <div class="event-arrows">
                                                        <img class="image1" src="../assets/images/objects/event-arrow1.png" alt="event" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                        <img src="../assets/images/photos/events-img1.jpg" alt="event" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tm-floating-objects">
                            <span class="floating-object-2 tm-animation-floating z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-person1.png" data-tm-opacity="1" data-tm-width="305"
                                data-tm-height="335" data-tm-top="10%" data-tm-left="-26px"></span>
                            <span class="floating-object-2 tm-animation-scaling z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-star1.png" data-tm-opacity="0.8" data-tm-width="210"
                                data-tm-height="210" data-tm-top="0" data-tm-right="3%"></span>
                            <span class="floating-object-2 tm-animation-scaling z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-star2.png" data-tm-opacity="0.8" data-tm-width="210"
                                data-tm-height="210" data-tm-top="15%" data-tm-right="36%"></span>
                        </div>
                    </section>
                    <section class="bg-theme-colored2" data-tm-bg-img="images/bg/object-bg2.png">
                        <div class="container">
                            <div class="section-title">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="tm-sc-section-title section-title text-center">
                                            <div class="title-wrapper">
                                                <h6 class="text-white">Teams</h6>
                                                <h2 class="title text-theme-colored1">Our Teacher</h2>
                                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elitrem ipsum dolor sit
                                                    amet, consectetur adipisicing elit, sed do</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-content">
                                <div class="row">
                                    <div class="col-md-4 col-xl-4">
                                        <div class="tm-sc-staff staff-current-theme text-center mb-30">
                                            <div class="tm-staff">
                                                <div class="thumb mb-20">
                                                    <img class="rounded-circle" src="../assets/images/team/team1.jpg" alt="team" />
                                                </div>
                                                <div class="details text-center">
                                                    <h4 class="title text-white mt-0 mb-0"><a
                                                        href="../assets/page-team-details.html">Jessica Martin</a></h4>
                                                    <p class="designation text-white-f3 font-weight-500 mb-15">Teacher</p>
                                                    <ul class="styled-icons icon-md icon-gray icon-circled icon-theme-colored3">
                                                        <li><a class="social-link" href="*"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a class="social-link" href="*"><i class="fab fa-youtube"></i></a></li>
                                                        <li><a class="social-link" href="*"><i class="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xl-4">
                                        <div class="tm-sc-staff staff-current-theme text-center mb-30">
                                            <div class="tm-staff">
                                                <div class="thumb mb-20">
                                                    <img class="rounded-circle" src="../assets/images/team/team2.jpg" alt="team" />
                                                </div>
                                                <div class="details text-center">
                                                    <h4 class="title text-white mt-0 mb-0"><a
                                                        href="../assets/page-team-details.html">Martin Albin</a></h4>
                                                    <p class="designation text-white-f3 font-weight-500 mb-15">Teacher</p>
                                                    <ul class="styled-icons icon-md icon-gray icon-circled icon-theme-colored3">
                                                        <li><a class="social-link" href="*"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a class="social-link" href="*"><i class="fab fa-youtube"></i></a></li>
                                                        <li><a class="social-link" href="*"><i class="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xl-4">
                                        <div class="tm-sc-staff staff-current-theme text-center mb-30">
                                            <div class="tm-staff">
                                                <div class="thumb mb-20">
                                                    <img class="rounded-circle" src="../assets/images/team/team3.jpg" alt="team" />
                                                </div>
                                                <div class="details text-center">
                                                    <h4 class="title text-white mt-0 mb-0"><a
                                                        href="../assets/page-team-details.html">Albart Rose</a></h4>
                                                    <p class="designation text-white-f3 font-weight-500 mb-15">Teacher</p>
                                                    <ul class="styled-icons icon-md icon-gray icon-circled icon-theme-colored3">
                                                        <li><a class="social-link" href="*"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a class="social-link" href="*"><i class="fab fa-youtube"></i></a></li>
                                                        <li><a class="social-link" href="*"><i class="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-silver-light">
                        <div class="container pb-70">
                            <div class="section-title">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-8">
                                        <div class="text-center mb-60">
                                            <div class="tm-sc-section-title section-title">
                                                <div class="title-wrapper">
                                                    <h6 class="mt-0 letter-space-2 text-theme-colored1 sub-title-icon">Pricing Tables</h6>
                                                    <h2>See Our Pricing Plans</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-content">
                                <div class="tm-sc-nav-tabs-pricing nav-tab-btn-button">
                                    <ul class="nav nav-tabs">
                                        <li class="active"> <a class="active show" href="#pricing-navtab-button1" data-bs-toggle="tab">
                                            <span class="title">Monthly</span></a>
                                        </li>
                                        <li class> <a class href="#pricing-navtab-button2" data-bs-toggle="tab"> <span
                                            class="title">Yearly</span> <span class="subtitle">10% Off</span></a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fadeInLeft in active show" id="pricing-navtab-button1">
                                            <div class="tab-pane-inner">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-4">
                                                        <div
                                                            class="tm-sc-pricing-table pricing-table-style-basic pricing-table-box-shadow pricing-table-hover-effect mb-30 text-center">
                                                            <div class="pricing-table-inner-wrapper">
                                                                <div class="pricing-table-inner">
                                                                    <div class="pricing-table-head">
                                                                        <img src="../assets/images/objects/feature-bg-object03.png"
                                                                            alt="feature" />
                                                                        <div class="pricing-table-pricing"><span class="pricing-table-prefix">$</span> <span
                                                                            class="pricing-table-price">45</span> <span class="pricing-table-separator">/</span>
                                                                            <span class="pricing-table-postfix">Monthly</span>
                                                                        </div>
                                                                        <div class="pricing-table-title-area">
                                                                            <h4 class="pricing-table-title">Basic Plan</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pricing-table-content">
                                                                        <ul class>
                                                                            <li>Extra features</li>
                                                                            <li>Lifetime free support</li>
                                                                            <li>Upgrate options</li>
                                                                            <li>Full access</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="pricing-table-footer">
                                                                        <div class="btn-view-details">
                                                                            <a href="*" target="_self" class="btn btn-theme-colored2 btn-round">Select Plan</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div
                                                            class="tm-sc-pricing-table pricing-table-style-basic pricing-table-box-shadow pricing-table-hover-effect mb-30 text-center">
                                                            <div class="pricing-table-inner-wrapper">
                                                                <div class="pricing-table-inner">
                                                                    <div class="pricing-table-head">
                                                                        <img src="../assets/images/objects/feature-bg-object02.png"
                                                                            alt="feature" />
                                                                        <div class="pricing-table-pricing"><span class="pricing-table-prefix">$</span> <span
                                                                            class="pricing-table-price">65</span> <span class="pricing-table-separator">/</span>
                                                                            <span class="pricing-table-postfix">Monthly</span>
                                                                        </div>
                                                                        <div class="pricing-table-title-area">
                                                                            <h4 class="pricing-table-title">Standard Plan</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pricing-table-content">
                                                                        <ul class>
                                                                            <li>Extra features</li>
                                                                            <li>Lifetime free support</li>
                                                                            <li>Upgrate options</li>
                                                                            <li>Full access</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="pricing-table-footer">
                                                                        <div class="btn-view-details">
                                                                            <a href="*" target="_self" class="btn btn-theme-colored2 btn-round">Select Plan</a>
                                                                        </div>
                                                                    </div>
                                                                    <span class="pricing-table-label">Popular</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div
                                                            class="tm-sc-pricing-table pricing-table-style-basic pricing-table-box-shadow pricing-table-hover-effect mb-30 text-center">
                                                            <div class="pricing-table-inner-wrapper">
                                                                <div class="pricing-table-inner">
                                                                    <div class="pricing-table-head">
                                                                        <img src="../assets/images/objects/feature-bg-object01.png"
                                                                            alt="feature" />
                                                                        <div class="pricing-table-pricing"><span class="pricing-table-prefix">$</span> <span
                                                                            class="pricing-table-price">90</span> <span class="pricing-table-separator">/</span>
                                                                            <span class="pricing-table-postfix">Monthly</span>
                                                                        </div>
                                                                        <div class="pricing-table-title-area">
                                                                            <h4 class="pricing-table-title">Premimum Plan</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pricing-table-content">
                                                                        <ul class>
                                                                            <li>Extra features</li>
                                                                            <li>Lifetime free support</li>
                                                                            <li>Upgrate options</li>
                                                                            <li>Full access</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="pricing-table-footer">
                                                                        <div class="btn-view-details">
                                                                            <a href="*" target="_self" class="btn btn-theme-colored2 btn-round">Select Plan</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fadeInRight" id="pricing-navtab-button2">
                                            <div class="tab-pane-inner">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-4">
                                                        <div
                                                            class="tm-sc-pricing-table pricing-table-style-basic pricing-table-box-shadow pricing-table-hover-effect mb-30 text-center">
                                                            <div class="pricing-table-inner-wrapper">
                                                                <div class="pricing-table-inner">
                                                                    <div class="pricing-table-head">
                                                                        <img src="../assets/images/objects/feature-bg-object01.png"
                                                                            alt="feature" />
                                                                        <div class="pricing-table-pricing"><span class="pricing-table-prefix">$</span> <span
                                                                            class="pricing-table-price">120</span> <span
                                                                                class="pricing-table-separator">/</span>
                                                                            <span class="pricing-table-postfix">Yearly</span>
                                                                        </div>
                                                                        <div class="pricing-table-title-area">
                                                                            <h4 class="pricing-table-title">First Session</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pricing-table-content">
                                                                        <ul class>
                                                                            <li>Extra features</li>
                                                                            <li>Lifetime free support</li>
                                                                            <li>Upgrate options</li>
                                                                            <li>Full access</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="pricing-table-footer">
                                                                        <div class="btn-view-details">
                                                                            <a href="*" target="_self" class="btn btn-theme-colored2 btn-round">Select Plan</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div
                                                            class="tm-sc-pricing-table pricing-table-style-basic pricing-table-box-shadow pricing-table-hover-effect mb-30 text-center">
                                                            <div class="pricing-table-inner-wrapper">
                                                                <div class="pricing-table-inner">
                                                                    <div class="pricing-table-head">
                                                                        <img src="../assets/images/objects/feature-bg-object03.png"
                                                                            alt="feature" />
                                                                        <div class="pricing-table-pricing"><span class="pricing-table-prefix">$</span> <span
                                                                            class="pricing-table-price">199</span> <span
                                                                                class="pricing-table-separator">/</span>
                                                                            <span class="pricing-table-postfix">Yearly</span>
                                                                        </div>
                                                                        <div class="pricing-table-title-area">
                                                                            <h4 class="pricing-table-title">Second Session</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pricing-table-content">
                                                                        <ul class>
                                                                            <li>Extra features</li>
                                                                            <li>Lifetime free support</li>
                                                                            <li>Upgrate options</li>
                                                                            <li>Full access</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="pricing-table-footer">
                                                                        <div class="btn-view-details">
                                                                            <a href="*" target="_self" class="btn btn-theme-colored2 btn-round">Select Plan</a>
                                                                        </div>
                                                                    </div>
                                                                    <span class="pricing-table-label">Popular</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div
                                                            class="tm-sc-pricing-table pricing-table-style-basic pricing-table-box-shadow pricing-table-hover-effect mb-30 text-center">
                                                            <div class="pricing-table-inner-wrapper">
                                                                <div class="pricing-table-inner">
                                                                    <div class="pricing-table-head">
                                                                        <img src="../assets/images/objects/feature-bg-object02.png"
                                                                            alt="feature" />
                                                                        <div class="pricing-table-pricing"><span class="pricing-table-prefix">$</span> <span
                                                                            class="pricing-table-price">299</span> <span
                                                                                class="pricing-table-separator">/</span>
                                                                            <span class="pricing-table-postfix">Yearly</span>
                                                                        </div>
                                                                        <div class="pricing-table-title-area">
                                                                            <h4 class="pricing-table-title">Last Session</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pricing-table-content">
                                                                        <ul class>
                                                                            <li>Extra features</li>
                                                                            <li>Lifetime free support</li>
                                                                            <li>Upgrate options</li>
                                                                            <li>Full access</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="pricing-table-footer">
                                                                        <div class="btn-view-details">
                                                                            <a href="*" target="_self" class="btn btn-theme-colored2 btn-round">Select Plan</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="container">
                            <div class="section-title text-center">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="tm-sc-section-title section-title">
                                            <div class="title-wrapper">
                                                <h6>Blogs</h6>
                                                <h2 class="title text-theme-colored1">News & Update</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-content">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-12 col-lg-6 col-xl-4">
                                        <div class="blog-style1-current-theme mb-lg-30">
                                            <article class="post">
                                                <div class="entry-header">
                                                    <div class="post-thumb">
                                                        <div class="post-thumb-inner">
                                                            <div class="thumb"> <img class="w-100" src="../assets/images/blog/1.jpg"
                                                                alt="bloge" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="entry-content">
                                                    <h4 class="entry-title mt-0"><a href="../assets/news-details.html"
                                                        rel="bookmark">The Challenges of Parenting</a></h4>
                                                    <div class="blog-meta mb-20">
                                                        <span class="admin-type mr-10">
                                                            By Admin /
                                                        </span>
                                                        <span class="comments-type">
                                                            2 Comments /
                                                        </span>
                                                        <span class="comments-cat">
                                                            Share
                                                        </span>
                                                    </div>
                                                    <p class="entry-excerpt mb-0">Lorem ipsum dolor sit amet elit, do eiusmod tempor ut labore et
                                                        dolore magna aliqua. Totam rem aperiam eaque ipsa.</p>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6 col-xl-4">
                                        <div class="blog-style1-current-theme mb-lg-30">
                                            <article class="post">
                                                <div class="entry-header">
                                                    <div class="post-thumb">
                                                        <div class="post-thumb-inner">
                                                            <div class="thumb"> <img class="w-100" src="../assets/images/blog/2.jpg"
                                                                alt="blog" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="entry-content">
                                                    <h4 class="entry-title mt-0"><a href="../assets/news-details.html"
                                                        rel="bookmark">Kids Grooming with New Lesson</a></h4>
                                                    <div class="blog-meta mb-20">
                                                        <span class="admin-type mr-10">
                                                            By Admin /
                                                        </span>
                                                        <span class="comments-type">
                                                            2 Comments /
                                                        </span>
                                                        <span class="comments-cat">
                                                            Share
                                                        </span>
                                                    </div>
                                                    <p class="entry-excerpt mb-0">Lorem ipsum dolor sit amet elit, do eiusmod tempor ut labore et
                                                        dolore magna aliqua. Totam rem aperiam eaque ipsa.</p>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6 col-xl-4">
                                        <div class="blog-style1-current-theme mb-lg-30">
                                            <article class="post">
                                                <div class="entry-header">
                                                    <div class="post-thumb">
                                                        <div class="post-thumb-inner">
                                                            <div class="thumb"> <img class="w-100" src="../assets/images/blog/1.jpg"
                                                                alt="blog" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="entry-content">
                                                    <h4 class="entry-title mt-0"><a href="../assets/news-details.html"
                                                        rel="bookmark">The Challenges of Parenting</a></h4>
                                                    <div class="blog-meta mb-20">
                                                        <span class="admin-type mr-10">
                                                            By Admin /
                                                        </span>
                                                        <span class="comments-type">
                                                            2 Comments /
                                                        </span>
                                                        <span class="comments-cat">
                                                            Share
                                                        </span>
                                                    </div>
                                                    <p class="entry-excerpt mb-0">Lorem ipsum dolor sit amet elit, do eiusmod tempor ut labore et
                                                        dolore magna aliqua. Totam rem aperiam eaque ipsa.</p>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tm-floating-objects">
                            <span class="floating-object-2 tm-animation-floating z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-letter-r.png" data-tm-opacity="1" data-tm-width="110"
                                data-tm-height="110" data-tm-top="5%" data-tm-left="5%"></span>
                            <span class="floating-object-2 tm-animation-scaling z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-bulb.png" data-tm-opacity="1" data-tm-width="210" data-tm-height="210"
                                data-tm-top="0" data-tm-right="3%"></span>
                            <span class="floating-object-2 tm-animation-scaling z-index--1"
                                data-tm-bg-img="../assets/images/objects/object-plus.png" data-tm-opacity="1" data-tm-width="210" data-tm-height="210"
                                data-tm-bottom="12%" data-tm-left="2%"></span>
                        </div>
                    </section>
                </div>

                <footer id="footer" class="footer footer-currenty-style footer-wave-bg">
                    <div class="footer-widget-area">
                        <div class="footer-top-part">
                            <div class="container pb-70 pt-lg-150 pt-md-100" data-tm-padding-top="250px">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 col-xl-3">
                                        <div class="widget widget-about">
                                            <img src="../assets/images/logo-wide-white.png" alt="logo" class="mb-30" />
                                            <p>Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor incididunt ut
                                                labore.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-3">
                                        <div class="widget widget_nav_menu">
                                            <h4 class="widget-title">Contact</h4>
                                            <div class="footer-contact-address">
                                                <div class="phone mb-15">
                                                    <p class="m-0 text-white"><i class="fas fa-phone-alt text-theme-colored1 mr-10"></i>000 888 0000
                                                    </p>
                                                </div>
                                                <div class="email mb-15">
                                                    <p class="m-0 text-white"><i class="fas fa-envelope text-theme-colored1 mr-10"></i><a
                                                        href="../../index.html" class="__cf_email__"
                                                        data-cfemail="523c3737363a373e22123f33213b3f7c313d3f">[email&#160;protected]</a></p>
                                                </div>
                                                <div class="address">
                                                    <p class="m-0 text-white"><i class="fas fa-map text-theme-colored1 mr-10"></i>80 Broklyn Golden
                                                        Street, Usa</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-2">
                                        <div class="widget widget_nav_menu">
                                            <h4 class="widget-title">Explore</h4>
                                            <div class="menu-footer-page-list">
                                                <ul id="footer-page-list" class="menu">
                                                    <li><a href="../../index.html">Service</a></li>
                                                    <li><a href="../../index.html">About</a></li>
                                                    <li><a href="../../index.html">Get a Quote</a></li>
                                                    <li><a href="../../index.html">Latest Post</a></li>
                                                    <li><a href="../../index.html">Success Story</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                        <div class="widget widget-newsletter">
                                            <h4 class="widget-title">Newsletter</h4>
                                            <div class="tm-widget tm-widget-subscribe widget-subscribe">
                                                <form id="mailchimp-subscription-form1" class="newsletter-form">
                                                    <div class>
                                                        <input type="email" value name="EMAIL" placeholder="Email address" class="form-control mb-15"
                                                            data-height="45px" id="mce-EMAIL" />
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-colored btn-circled btn-theme-colored1 btn-flat m-0"
                                                                type="submit">Subscribe</button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <div class="container">
                                <div class="row pt-30 pb-30">
                                    <div class="col"></div>
                                    <div class="col-sm-6">
                                        <div class="footer-paragraph text-center">
                                            © 2021 ThemeMascot. All Rights Reserved.
                                        </div>
                                    </div>
                                    <div class="col"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <a class="scrollToTop" href="*"><i class="fa fa-angle-up"></i></a>
            </div>
        </div>

    );
}

export default MainPrep;
