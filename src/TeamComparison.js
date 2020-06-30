/* eslint-disable react/prop-types */
import React from 'react';

const TeamComparison = ({left_prop, middle_text, right_prop}) => {
    return(
        <div className="grid-layout">
            <div className="left-right-detail">{left_prop}</div> 
            <div className="middle"> {middle_text} </div>
            <div className="left-right-detail">{right_prop}</div>
        </div>
    )
}

export default TeamComparison;