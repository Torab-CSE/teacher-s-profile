import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import userData from '../../Data/userData.json'
import Details from '../Details/Details'
import '../User/User.css'


const User = () => {
    const [users,setUsers]=useState(userData)
    let[count,setCount]= useState([])

    const addHandle=(props)=>{
        const userData=props.userInfo;
        const newCount=[...count,userData]
        setCount(newCount)
    
    }
   
    return (
        <div class="user-container">
            <div class="user-profile"> 
            {
              users.map(user=><Profile user={user} key={user.name}
                                    addHandle={addHandle}
              ></Profile>)
            }
            </div>

            <div class="user-details">
                <Details detail={count}></Details>
            </div>    
        </div>
    );
};

export default User;