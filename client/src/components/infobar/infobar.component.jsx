import React from "react";

import onlineIcon from "../../assets/online.svg";
import closeIcon from "../../assets/close.svg";

import "./infobar.styles.scss";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img className="closeIcon" src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
