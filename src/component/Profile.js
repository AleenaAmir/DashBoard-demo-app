import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="profile">
      <div class="form-group has-search">
        <span class=" form-control-feedback">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685541850/Search_dal9lj.png"
            alt="search"
            className="search-icon"
          />
        </span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
      <div>
        <div className="data">
          <img
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685530132/User_k4ubex.png"
            alt="search"
            className="profile-icon"
          />
          <div>
            <p className="profile-name">John Doe</p>
            <p className="name-UI">UI Designer</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1685543141/Filter_big_xyk16h.png"
              alt="search"
              className="hover-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
