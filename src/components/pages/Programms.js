import React from 'react'

export default function Programms() {
  return (
    <div>
        <section className="bg-theme-coloredd2 z-index-1">
        <div className="container pt-0">
          <div className="section-title">
            <div className="row">
              <div className="col"></div>
              <div className="col-lg-6">
                <div className="tm-sc-section-title section-title text-center">
                  <div className="title-wrapper">
                    <h6 className="text-white">Programm</h6>
                    <h2 className="title text-theme-colored1">Care Programms</h2>
                    <p className>Lorem ipsum dolor sit amet, consectetur adipisicing elitrem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do</p>
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="tm-sc-services services-style-current-theme text-center mb-lg-50">
                  <div className="tm-service">
                    <div className="thumb">
                      <img className="rounded-circle" src="assets/images/service/1.jpg" alt="*"/>
                      <div className="service-icon">
                        <img src="assets/images/icon/1.png" alt="*"/>
                      </div>
                    </div>
                    <div className="details clearfix">
                      <h4 className="title"><a href="assets/page-course-details.html">Nursery</a></h4>
                      <p className>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua Totam rem.</p>
                      <ul className="service-info-list">
                        <li><span className="font-weight-800 text-theme-colored3">Age:</span> 2-4 Years</li>
                        <li><span className="font-weight-800 text-theme-colored3">Time:</span> 9.00 - 11.00 </li>
                        <li><span className="font-weight-800 text-theme-colored3">Price:</span> $30</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="tm-sc-services services-style-current-theme text-center mb-sm-50">
                  <div className="tm-service">
                    <div className="thumb">
                      <img className="rounded-circle" src="assets/images/service/2.jpg" alt="*"/>
                      <div className="service-icon bg-theme-colored3">
                        <img src="assets/images/icon/2.png" alt="*"/>
                      </div>
                    </div>
                    <div className="details clearfix">
                      <h4 className="title"><a href="assets/page-course-details.html">Paper Plates
                          Art</a></h4>
                      <p className>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua Totam rem.</p>
                      <ul className="service-info-list">
                        <li><span className="font-weight-800 text-theme-colored3">Age:</span> 2-4 Years</li>
                        <li><span className="font-weight-800 text-theme-colored3">Time:</span> 9.00 - 11.00 </li>
                        <li><span className="font-weight-800 text-theme-colored3">Price:</span> $30</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="tm-sc-services services-style-current-theme text-center">
                  <div className="tm-service">
                    <div className="thumb">
                      <img className="rounded-circle" src="assets/images/service/3.jpg" alt="*"/>
                      <div className="service-icon bg-theme-colored4">
                        <img src="assets/images/icon/1.png" alt="*"/>
                      </div>
                    </div>
                    <div className="details clearfix">
                      <h4 className="title"><a href="assets/page-course-details.html">Drawing</a></h4>
                      <p className>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua Totam rem.</p>
                      <ul className="service-info-list">
                        <li><span className="font-weight-800 text-theme-colored3">Age:</span> 2-4 Years</li>
                        <li><span className="font-weight-800 text-theme-colored3">Time:</span> 9.00 - 11.00 </li>
                        <li><span className="font-weight-800 text-theme-colored3">Price:</span> $30</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tm-floating-objects">
            <span className="floating-object-2 tm-animation-floating" style={{
                backgroundImage: 'url("assets/images/objects/object-scissors1.png")',
                opacity: '0.8',
                width: '210px',
                height: '210px',
                bottom: '12%',
                left: '2%',
                position: 'absolute',
                display: 'block',
                zIndex: '-1', // Add z-index property here
            }}></span>
            <span className="floating-object-2 tm-animation-floating" style={{
                backgroundImage: 'url("assets/images/objects/object-jar1.png")',
                opacity: '0.8',
                width: '210px',
                height: '210px',
                top: '8%',
                right: '3%',
                position: 'absolute',
                display: 'block',
                zIndex: '-1', // Add z-index property here
            }}></span>
        </div>
      </section>
    </div>
  )
}
