import React from "react";
import "./virtualdashboard.css";
function VirtualDashBoard() {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685529802/Subtract_1_bdyxca.png"
        alt="arrow"
        className="arrow"
      />
      <p className="vir">Virtual Dashboard</p>
      <ul>
        <li className="list">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685529831/Vector_eqfs01.png"
            alt="DashBoard"
            className="icon"
          />
          <span style={{ paddingLeft: "10px" }}>DashBoard</span>
        </li>
        <li className="list">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685533338/User_dfvd1w.png"
            alt="profile"
            className="icon setting"
          />
          <span>Profile</span>
        </li>
        <li className="list">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685533356/Desk_ztqamm.png"
            alt="utls"
            className="icon utls"
          />
          <span>Utilities</span>
        </li>
        <li className="list">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685533956/Subtract_2_prpcwt.png"
            alt="setting"
            className="icon setting"
          />
          <span style={{ paddingLeft: "10px" }}>Setting</span>
        </li>
        <li className="list-msg">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685533431/Chat_alt_3_fill_y8e14p.png"
            alt="msg"
            className="icon setting"
          />
          <span>Messages</span>
          <button className="bton">10</button>
        </li>
        <li className="list-ana">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685530145/Subtract_nkq8er.png"
            alt="Analytics"
            className="ana"
          />
          <span style={{ paddingLeft: "18px" }}>Analytics</span>
        </li>
      </ul>
      <div className="inner">
        <div className="inner-one">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685538938/Time_qcuyiu.png"
            alt="time"
          />
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685538918/Group_1_tdozwv.png"
            alt="dots"
          />
        </div>
        <p className="inner-1">History Available</p>
        <p className="inner-1">Check your weekly transcations report</p>
      </div>
    </div>
  );
}

export default VirtualDashBoard;
