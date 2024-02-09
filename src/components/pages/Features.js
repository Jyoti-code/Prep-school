import React from 'react'

export default function Features() {
    return (
        <section className="features-section">
            <div className="container pt-50 pb-lg-60">
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="feature-current-item text-center mb-lg-30">
                                <div className="feature-icon object-bg1">
                                    <img src="assets/images/objects/feature-bg-object01.png" alt="*"/>
                                </div>
                                <h4 className="feature-title">Drawing className</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Totam rem.</p>
                                <a href="page-course-details.html" className="feature-link-btn">+</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="feature-current-item text-center mb-lg-30 active">
                                <div className="feature-icon object-bg2">
                                    <img src="assets/images/objects/feature-bg-object02.png" alt="*"/>
                                </div>
                                <h4 className="feature-title">Music className</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Totam rem.</p>
                                <a href="page-course-details.html" className="feature-link-btn">+</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="feature-current-item text-center mb-lg-30">
                                <div className="feature-icon object-bg2">
                                    <img src="assets/images/objects/feature-bg-object03.png" alt="*"/>
                                </div>
                                <h4 className="feature-title">Knowledge className</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Totam rem.</p>
                                <a href="page-course-details.html" className="feature-link-btn">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tm-floating-objects">
            <span
                className="floating-object-2 tm-animation-flicker z-index--1"
                style={{
                    backgroundImage: 'url("assets/images/objects/object-apple.png")',
                    opacity: '0.8',
                    width: '230px',
                    height: '210px',
                    top: '0',
                    right: '0',
                    position: 'absolute',
                    display: 'block',
                }}
            ></span>
            <span
                className="floating-object-2 tm-animation-scaling z-index--1"
                style={{
                    backgroundImage: 'url("assets/images/objects/object-star1(1).png")',
                    opacity: '0.8',
                    width: '210px',
                    height: '210px',
                    top: '16%',
                    left: '6%',
                    position: 'absolute',
                    display: 'block',
                }}
            ></span>
            <span
                className="floating-object-2 tm-animation-scaling z-index--1"
                style={{
                    backgroundImage: 'url("assets/images/objects/object-star2.png")',
                    opacity: '0.8',
                    width: '210px',
                    height: '210px',
                    bottom: '0',
                    right: '0',
                    position: 'absolute',
                    display: 'block',
                }}
            ></span>
            </div>

        </section>
    )
}
