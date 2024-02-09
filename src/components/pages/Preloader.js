import React from 'react';

export default function Preloader() {
  return (
    <div>
        <div id="preloader">
          <div id="spinner">
            <div className="preloader-dot-loading">
              <div className="cssload-loading"><i></i><i></i><i></i><i></i></div>
            </div>
          </div>
          <div className="side-panel-body-overlay"></div>
        </div>
    </div>
  );
}
