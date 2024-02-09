import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ChooseUs() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

    return (
        <div>
            <section>
                <div className="container-fluid p-0">
                    <div className="tm-sc-custom-columns-holder tm-cc-two-columns tm-cc-responsive-mode-1280">
                        <div className="tm-sc-custom-columns-holder-item bg-theme-colored2" data-item-className="tm-custom-columns-12"
                            data-1200-up="100px 10% 60px 28%" data-1199-down="100px 10% 60px 10%" data-991-down="100px 10% 60px 10%"
                            data-767-down="100px 10% 60px 10%" data-575-down="100px 10% 60px 10%"
                            data-tm-bg-img="assets/images/bg/why-choose-bg1.png">
                            <div className="item-inner">
                                <div className="item-content tm-custom-columns-12">
                                    <div className='container p-5'>
                                    <div data-aos="fade-right">
                                    <div className="why-choose-us-block">
                                        <h6 className="mt-0 font-italic text-white">Like Us</h6>
                                        <h2 className="text-theme-colored1 mb-40">Why Choose Us</h2>
                                        <div className="why-choose-us-item">
                                            <div className="why-choose-us-img">
                                                <img src="assets/images/objects/why-choose-icon1.png" alt="*"/>
                                            </div>
                                            <div className="why-choose-us-content">
                                                <h4 className="text-theme-colored4">Knowledge classNamees</h4>
                                                <p className="text-white-f1">Lorem ipsum dolor sit amet nsectetur cing ndisse suscipit sagitis leo
                                                    sit ipsum dolor sit amet nsectetur.</p>
                                            </div>
                                        </div>
                                        <div className="why-choose-us-item">
                                            <div className="why-choose-us-img">
                                                <img src="assets/images/objects/why-choose-icon4.png" alt="*"/>
                                            </div>
                                            <div className="why-choose-us-content">
                                                <h4 className="text-theme-colored3">Full day session</h4>
                                                <p className="text-white-f1">Lorem ipsum dolor sit amet nsectetur cing ndisse suscipit sagitis leo
                                                    sit ipsum dolor sit amet nsectetur.</p>
                                            </div>
                                        </div>
                                        <div className="why-choose-us-item">
                                            <div className="why-choose-us-img">
                                                <img src="assets/images/objects/why-choose-icon3.png" alt="*"/>
                                            </div>
                                            <div className="why-choose-us-content">
                                                <h4 className="text-theme-colored1">Last minute request</h4>
                                                <p className="text-white-f1">Lorem ipsum dolor sit amet nsectetur cing ndisse suscipit sagitis leo
                                                    sit ipsum dolor sit amet nsectetur.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tm-sc-custom-columns-holder-item bg-img-left border-bottom-1px bg-silver-light"
                            data-item-className="tm-custom-columns-11" data-1200-up="8% 24%  5% 8%" data-1199-down="0 10% 0 10%"
                            data-991-down="0 10% 0 10%" data-767-down="0 10% 0 10%" data-575-down="0 10% 0 10%">
                            <div className="item-inner">

                                <div className="item-content tm-custom-columns-11">
                                    <div className='container p-5'>
                                    <div data-aos="fade-left">
                                    <img className="mt-lg-100 mb-30 mb-sm-10" src="assets/images/about/about6.jpg" alt="*"/>
                                        <h5 className="text-theme-colored2">About Kid Education</h5>
                                        <h2 className="text-theme-colored1">A Great Place for Your Child to Grow At</h2>
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
                </div>
            </section>
        </div>
    )
}