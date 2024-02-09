import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Events() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <section>
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="tm-sc-section-title section-title text-center">
                  <div className="title-wrapper">
                    <h6>Events</h6>
                    <h2 className="title text-theme-colored1">Upcoming Event</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitrem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="upcoming-events-current-style1">
                  <div data-aos="fade-right">
                  <div className="event-item bg-theme-colored1 p-sm-30">
                    <ul className="event-info-list text-white">
                      <li><span className="font-weight-800">Age:</span> 2-4 Years</li>
                      <li><span className="font-weight-600">Time:</span> 9.00 - 11.00 </li>
                      <li><span className="font-weight-600">Price:</span> $30</li>
                    </ul>
                    <h4 className="event-title text-white"><a
                        href="assets/page-event-details.html">Magic Princess Birthday Party</a></h4>
                    <a href="assets/page-event-details.html">
                      <div className="event-arrows">
                        <img className="image1" src="assets/images/objects/event-arrow1.png" alt="*"/>
                      </div>
                    </a>
                  </div>
                  </div>

                  <div data-aos="fade-right">
                  <div className="event-item bg-theme-colored3 p-sm-30">
                    <ul className="event-info-list text-white">
                      <li><span className="font-weight-800">Age:</span> 4-6 Years</li>
                      <li><span className="font-weight-600">Time:</span> 11.00 - 12.00 </li>
                      <li><span className="font-weight-600">Price:</span> $50</li>
                    </ul>
                    <h4 className="event-title text-white"><a href="assets/page-event-details.html">Kids
                        Grooming with New Lesson</a></h4>
                    <a href="assets/page-event-details.html">
                      <div className="event-arrows">
                        <img className="image1" src="assets/images/objects/event-arrow1.png" alt="*"/>
                      </div>
                    </a>
                  </div>
                  </div>

                  <div data-aos="fade-right">
                  <div className="event-item bg-theme-colored4 p-sm-30">
                    <ul className="event-info-list text-white">
                      <li><span className="font-weight-800">Age:</span> 6-9 Years</li>
                      <li><span className="font-weight-600">Time:</span> 9.00 - 11.00 </li>
                      <li><span className="font-weight-600">Price:</span> $80</li>
                    </ul>
                    <h4 className="event-title text-white"><a
                        href="assets/page-event-details.html">Magic Paper Plates Art Gallery</a>
                    </h4>
                    <a href="assets/page-event-details.html">
                      <div className="event-arrows">
                        <img className="image1" src="assets/images/objects/event-arrow1.png" alt="*"/>
                      </div>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-6 col-lg-6 col-md-12">
                <img src="assets/images/photos/events-img1.jpg" alt="*" style={{height:'95%'}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="tm-floating-objects">
    <span
        className="floating-object-2 tm-animation-floating z-index--1"
        style={{
            backgroundImage: 'url("assets/images/objects/object-person1.png")',
            opacity: '1',
            width: '305px',
            height: '335px',
            top: '10%',
            left: '-26px',
            position: 'absolute',
            display: 'block',
        }}
    ></span>
    <span
        className="floating-object-2 tm-animation-scaling z-index--1"
        style={{
            backgroundImage: 'url("assets/images/objects/object-star1.png")',
            opacity: '0.8',
            width: '210px',
            height: '210px',
            top: '0',
            right: '3%',
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
            top: '15%',
            right: '36%',
            position: 'absolute',
            display: 'block',
        }}
    ></span>
</div>

      </section>
  )
}
