import React from 'react'
import Tilt from 'react-parallax-tilt';

export default function BabyCareSection() {
    return (
        <section>
            <div className="container pt-0">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-7 col-xl-7">
                        <Tilt className="image-box tilt-hover-effect mb-50">
                            <img src="assets/images/about/about1.png" alt="*"/>
                                <img className="floating-img1" src="assets/images/about/about-floating-img1.png" alt="*"/>
                                </Tilt>
                        </div>
                        <div className="col-md-12 col-lg-5 col-xl-5">
                            <h2 className="text-theme-colored1">Welcome to <span className="text-theme-colored2">Study Hall Prep School</span></h2>
                            <p className="lead">Explore the doors of a Happy school where learning is an adventurous experience.<br></br>

                            Children are unique, powerful, important persons, worthy of our respect. They have a right to enjoy their childhood which is an important phase of their lives in itself and deserve to be understood respectfully rather than treaten simply as a preparation for adulthood
                            </p>
                           
                            <p className="lead">At the Study Hall Prep School we endeavour to create a caring, stimulating, secure, warm and comforting environment and work towards making "School" a place which enables and helps children to learn...</p>
                            <a href="page-about.html" className="about-btn btn btn-lg btn-dark btn-theme-colored2">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="tm-floating-objects">
    <span
        className="floating-object-2 tm-animation-spin z-index--1"
        style={{
            backgroundImage: 'url("assets/images/objects/object-star3.png")',
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
        className="floating-object-2 tm-animation-floating z-index--1"
        style={{
            backgroundImage: 'url("assets/images/objects/object-rocket1.png")',
            opacity: '0.8',
            width: '210px',
            height: '210px',
            top: '8%',
            right: '3%',
            position: 'absolute',
            display: 'block',
        }}
    ></span>
</div>

        </section>
    )
}
