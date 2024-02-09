import React from 'react'

export default function Teachers() {
  return (
    <section className="bg-theme-colored2" data-tm-bg-img="assets/images/bg/object-bg2.png"  style={{ backgroundImage: `url('assets/images/bg/object-bg2.png')` }}>
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="tm-sc-section-title section-title text-center">
                  <div className="title-wrapper">
                    <h6 className="text-white">Teams</h6>
                    <h2 className="title text-theme-colored1">Our Teacher</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elitrem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-md-4 col-xl-4">
                <div className="tm-sc-staff staff-current-theme text-center mb-30">
                  <div className="tm-staff">
                    <div className="thumb mb-20">
                      <img className="rounded-circle" src="assets/images/team/team1.jpg" alt="*"/>
                    </div>
                    <div className="details text-center">
                      <h4 className="title text-white mt-0 mb-0"><a
                          href="assets/page-team-details.html">Jessica Martin</a></h4>
                      <p className="designation text-white-f3 font-weight-500 mb-15">Teacher</p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-4">
                <div className="tm-sc-staff staff-current-theme text-center mb-30">
                  <div className="tm-staff">
                    <div className="thumb mb-20">
                      <img className="rounded-circle" src="assets/images/team/team2.jpg" alt="*"/>
                    </div>
                    <div className="details text-center">
                      <h4 className="title text-white mt-0 mb-0"><a
                          href="assets/page-team-details.html">Martin Albin</a></h4>
                      <p className="designation text-white-f3 font-weight-500 mb-15">Teacher</p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-4">
                <div className="tm-sc-staff staff-current-theme text-center mb-30">
                  <div className="tm-staff">
                    <div className="thumb mb-20">
                      <img className="rounded-circle" src="assets/images/team/team3.jpg" alt="*"/>
                    </div>
                    <div className="details text-center">
                      <h4 className="title text-white mt-0 mb-0"><a
                          href="assets/page-team-details.html">Albart Rose</a></h4>
                      <p className="designation text-white-f3 font-weight-500 mb-15">Teacher</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
