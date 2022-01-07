import React from 'react';
import './Header.css'

const header = () => {
    return (
        <div class='header'>
            
          <h1 style={{textAlign:'center',color:""}}>Teacher's Information</h1>
          <nav>
            <a href=" ">Home</a>
            <a href=" ">Profile</a>
            <a href=" ">Contact</a>
          </nav>
        </div>
    );
};

export default header;