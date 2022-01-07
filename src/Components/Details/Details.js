import React from 'react';
import './Details.css'

const Details = (props) => {
    const data=props.detail
    let total=0;
    let annual=0;
    for(let i=0;i<data.length;i++){
        const newData=data[i];
        total=total+newData.salary
        annual=annual+newData.salary*12
    }
    console.log(total)
    console.log(annual)

    return (
        <div class='details'>
            <h1>Teacher's Details</h1>
            <h3>Number Of Member:{data.length}</h3>
            <h4>Total Salary:{total}</h4>
            <h5>Total Annual Salary:{annual} </h5>


        </div>
    );
};

export default Details;
//<i class="fas fa-user-plus"></i>

