import React from "react";
import "./secondLast.css";
import YearBarGraph from "./YearBarGraph";
import MonthBarGraph from "./MonthBarGraph";

function SecondLast(props) {
  return (
    <div>
      <div>
        <div className="S-L">
          <div className="S-one">
            {" "}
            <div className="content">
              {props.checked ? <YearBarGraph /> : <MonthBarGraph />}
            </div>
          </div>
          <div className="S-two">
            <div class="mar">
              <h1 className="two-h">23</h1>
              <p className="two-p">Mar</p>
            </div>
            <div class="aug">
              <h1 className="two-h" style={{ marginTop: "-1rem" }}>
                30
              </h1>
              <p className="two-p">Aug</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondLast;
