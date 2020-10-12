import React from 'react';
import './chatApp.css';


function Contact (){
  const online = true;
  return  (
    <div className="Contact">
      <img className="avatar" src="https://randomuser.me/api/portraits/women/91.jpg" />;
      <div className="status" >
      <p className="name">Jo Powell</p>
      <p className="status-text">
        {online ? className="status-online"> 'online' 
        : className="status-offline">'offline'}  </p>

      </div>
    </div>

  )
} 

export default Contact;
