import React from "react";

import onlineIcon from "../../assets/online.svg";

import "./onboard.styles.scss";

const OnBoard = ({ users }) => (
  <div className="onBoard">
    {users ? (
      <div>
        <h1>Your Friends Onboard:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img
                  className="onlineIcon"
                  alt="Online Icon"
                  src={onlineIcon}
                />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default OnBoard;
