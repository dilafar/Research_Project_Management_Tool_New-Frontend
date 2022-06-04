
import React from 'react';

import onlineIcon from '../icons/online.jpg';
import closeIcon from  '../icons/close.jpg';

import './infobar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" style={{width: '10px' , height: '10px'}} />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" style={{width: '10px' , height: '10px'}}/></a>
    </div>
  </div>
);

export default InfoBar;