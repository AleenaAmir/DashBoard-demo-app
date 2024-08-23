import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="F-one">
          <div className="one-a">
            <div className="eye">
              <img
                src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685621239/View_alt_fill_fapjeq.png"
                alt="eye"
                style={{ paddingTop: "15%" }}
              />
            </div>
            <div className="one-2">
              <p className="F-para">New Subscribers</p>
              <h2 className="F-heading">5,095</h2>
              <p className="F-para" style={{ fontWeight: "700" }}>
                +33.45%
              </p>
            </div>
          </div>
          <div className="one-a">
            {/* {two} */}
            <div className="eye">
              <img
                src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685621258/Compass_alt_light_j7cx9e.png"
                alt="eye"
                style={{ paddingTop: "15%", paddingLeft: "15%" }}
              />
            </div>
            <div className="one-2">
              <p className="F-para">Streams</p>
              <h2 className="F-heading">45,095</h2>
            </div>
          </div>
          <div className="one-a">
            {/* {three} */}
            <div className="eye">
              <img
                src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685621239/View_alt_fill_fapjeq.png"
                alt="eye"
                style={{ paddingTop: "15%" }}
              />
            </div>
            <div className="one-2">
              <p className="F-para">Engangments</p>
              <h2 className="F-heading">25.09</h2>
              <p className="F-para" style={{ fontWeight: "700" }}>
                +33.45%
              </p>
            </div>
          </div>
        </div>
        <div className="F-two">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685624419/Untitled_1_arfbfb.png"
            alt="imo"
            style={{ width: "130px", height: "130px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
