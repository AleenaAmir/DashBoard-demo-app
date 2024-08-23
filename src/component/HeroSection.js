import React, { useState } from "react";
import "./herosection.css";
import VirtualDashBoard from "./VirtualDashBord";

import Session from "./Sessions";
import Profile from "./Profile";
import SecondLast from "./SecondLast";
import Footer from "./Footer";

function HeroSection() {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="main">
        <Profile />
        <Session handleToggle={handleToggle} checked={checked} />
        <SecondLast checked={checked} />

        <Footer />
        <section className="main-1">
          <VirtualDashBoard />
        </section>
      </div>
    </>
  );
}

export default HeroSection;
