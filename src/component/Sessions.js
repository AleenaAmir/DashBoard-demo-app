import React from "react";
import "./sessions.css";
import Switch from "./ToggleButton";
function Session(props) {
  return (
    <div className="sec">
      <div className="sec-a">
        <div className="sec-col-1">
          <div className="sec-col-1a">
            <div>
              <img
                src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685607495/Tumer_wpgfpx.png"
                alt="time"
                className="icon"
                style={{ paddingLeft: "5%" }}
              />
              <span className="col-s">Sessions</span>

              <h1 className="col-h">24k</h1>
              <p className="col-p">+33.45%</p>
            </div>
          </div>
          {/* {div2} */}
          <div className="sec-col-1a">
            <div>
              <img
                src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685608971/Calendar_fill_yfcuhb.png"
                alt="calender"
                className="icon"
                style={{ paddingLeft: "5%" }}
              />
              <span className="col-s">Avg.Sessions</span>

              <h1 className="col-h">00:18</h1>
              <p className="col-p">-12.45%</p>
            </div>
          </div>
          {/* <div>3</div> */}
          <div className="sec-col-1a">
            <div>
              <img
                src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685607505/Compass_fill_tkjbar.png"
                alt="time"
                className="icon"
                style={{ paddingLeft: "5%" }}
              />
              <span className="col-s">Bounce Rate</span>

              <h1 className="col-h">$2400</h1>
              <p className="col-p">+62.10%</p>
            </div>
          </div>
        </div>
        <div className="sec-col-2">
          <div>
            <h1 className="col-2-h">Profile Growth</h1>
            <p className="col-2-p">Overall Information</p>
          </div>

          <Switch {...props} />
        </div>
      </div>
      <div className="sec-b">
        <div className="sec-b1">
          <div className="para-box">
            <p className="para-1">Open Projects</p>
            <p className="para-2">500</p>
          </div>
          <div className="arrow-box">
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685603117/Vector_9_voelof.png"
              alt="arrow"
              style={{ paddingLeft: "18px", paddingTop: "12px" }}
            />
          </div>
        </div>
        {/* {2nd div} */}
        <div
          className="sec-b1"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="para-box">
            <p className="para-1">Successfully Completed</p>
            <p className="para-2">310</p>
          </div>
          <div className="arrow-box">
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685603117/Vector_9_voelof.png"
              alt="arrow"
              style={{ paddingLeft: "18px", paddingTop: "12px" }}
            />
          </div>
        </div>
        {/* {3rd div} */}
        <div className="sec-b1">
          <div className="para-box">
            <p className="para-1">Earned This Month</p>
            <p className="para-2">$5000</p>
          </div>
          <div className="arrow-box">
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685603117/Vector_9_voelof.png"
              alt="arrow"
              style={{ paddingLeft: "18px", paddingTop: "12px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session;
