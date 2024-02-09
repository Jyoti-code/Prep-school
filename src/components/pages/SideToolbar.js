import React from 'react'

export default function SideToolbar() {
    return (
            <div id="side-panel-container" className="dark" data-tm-bg-img="images/side-push-bg.jpg">
                <div className="side-panel-wrap">
                    <div id="side-panel-trigger-close" className="side-panel-trigger"><a href="*"><i className="fa fa-times side-panel-trigger-icon"></i></a></div>
                    <img className="logo mb-50" src="assets/images/logo-wide.png" alt="Logo"/>
                        <p>Our motive is to help the poor, helpless and orphan children all over the world.</p>
                        <div className="widget">
                            <h4 className="widget-title widget-title-line-bottom line-bottom-theme-colored1">Latest News</h4>
                            <div className="latest-posts">
                                <article className="post clearfix pb-0 mb-10">
                                    <a className="post-thumb" href="assets/news-details.html"><img src="assets/images/shop/portfolio-sq1.jpg" alt=""/></a>
                                    <div className="post-right">
                                        <h5 className="post-title mt-0"><a href="assets/news-details.html">Sustainable Construction</a></h5>
                                        <p>Lorem ipsum dolor...</p>
                                    </div>
                                </article>
                                <article className="post clearfix pb-0 mb-10">
                                    <a className="post-thumb" href="assets/news-details.html"><img src="assets/images/shop/portfolio-sq2.jpg" alt=""/></a>
                                    <div className="post-right">
                                        <h5 className="post-title mt-0"><a href="assets/news-details.html">Industrial Coatings</a></h5>
                                        <p>Lorem ipsum dolor...</p>
                                    </div>
                                </article>
                                <article className="post clearfix pb-0 mb-10">
                                    <a className="post-thumb" href="assets/news-details.html"><img src="assets/images/shop/portfolio-sq3.jpg" alt=""/></a>
                                    <div className="post-right">
                                        <h5 className="post-title mt-0"><a href="assets/news-details.html">Storefront Installations</a></h5>
                                        <p>Lorem ipsum dolor...</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="widget">
                            <h5 className="widget-title widget-title-line-bottom line-bottom-theme-colored1">Contact Info</h5>
                            <div className="tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
                                <ul>
                                    <li className="contact-name">
                                        <div className="icon"><i className="flaticon-contact-037-address"></i></div>
                                        <div className="text">John Doe</div>
                                    </li>
                                    <li className="contact-phone">
                                        <div className="icon"><i className="flaticon-contact-042-phone-1"></i></div>
                                        <div className="text"><a href="tel:+510-455-6735">+510-455-6735</a></div>
                                    </li>
                                    <li className="contact-email">
                                        <div className="icon"><i className="flaticon-contact-043-email-1"></i></div>
                                        <div className="text"><a href="../../index.html#ee87808881ae97819b9c8a81838f8780c08d8183"><span className="__cf_email__" data-cfemail="acc5c2cac3ecd5c3d9dec8c3c1cdc5c282cfc3c1">[email&#160;protected]</span></a></div>
                                    </li>
                                    <li className="contact-address">
                                        <div className="icon"><i className="flaticon-contact-047-location"></i></div>
                                        <div className="text">3982 Browning Lane Carolyns Circle, California</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        
    )
}
