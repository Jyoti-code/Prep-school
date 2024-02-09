import React from 'react'

export default function Home() {
    return (
        <div>
            <section id="home" className="bg-pos-center-center home-wave-object" data-tm-bg-img="assets/images/bg/bg1.jpg"  style={{ backgroundImage: `url('assets/images/bg/bg1.jpg')` }}>
                <div className="container" data-tm-padding-top="180px" data-tm-padding-bottom="180px">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="home-banner">
                                <div className="banner-inner">
                                    <span className="text-white">Special Kindergarten</span>
                                    <h2 className="text-white"> Explore the world <br /> through our classrooms</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="tm-floating-objects">
                    <span
                    className="floating-object-2 tm-animation-floating"
                    style={{
                        backgroundImage: 'url("assets/images/objects/home-object1.png")',
                        opacity: '0.8',
                        width: '115px',
                        height: '115px',
                        top: '8%',
                        left: '10%',
                        position: 'absolute', 
                        display: 'block',
                    }}
                ></span>
                                <span
                    className="floating-object-2 tm-animation-floating"
                    style={{
                        backgroundImage: 'url("assets/images/objects/home-object2.png")',
                        opacity: '0.8',
                        width: '140px',
                        height: '150px',
                        top: '15%',
                        right: '42%',
                        position: 'absolute',
                        display: 'block',
                    }}
                ></span>
                <span
                    className="floating-object-2 tm-animation-floating"
                    style={{
                        backgroundImage: 'url("assets/images/objects/home-object3.png")',
                        opacity: '0.8',
                        width: '150px',
                        height: '165px',
                        top: '55%',
                        right: '45%',
                        position: 'absolute',
                        display: 'block',
                    }}
                ></span>
                </div>
            </section>
        </div>
    )
}
