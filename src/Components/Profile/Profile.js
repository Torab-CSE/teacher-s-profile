import React from 'react';
import '../Profile/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'



const Profile = (props) => {
   // console.log(props.user)
    const {name,email,phone,salary,image}=props.user;
    const userInfo=props.user;

    const addEvHandle=props.addHandle;

      
    return (
        <div class="profile">
            <div class='profile-image'>
                <img src={image} alt=" "/>
            </div>
            <div class='profile-info'>
                <h2>Name:{name}</h2>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <h4>salary:{salary}</h4>

                <button onClick={()=>addEvHandle({userInfo})}><FontAwesomeIcon icon={faUserPlus} />
                See Details</button>
            </div>
    
        </div>
    );
};

export default Profile;