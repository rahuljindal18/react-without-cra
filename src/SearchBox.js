/* eslint-disable react/prop-types */
import React from 'react';
import './SearchBox.css';

const SearchBox = ({value,handleChange}) => {
    return(
        <>
            <input 
                className="search"
                type="search" 
                placeholder="Enter FIFA CODE to see match results"
                value={value}
                onChange={handleChange}
            />
        </>
    )
}

export default SearchBox;