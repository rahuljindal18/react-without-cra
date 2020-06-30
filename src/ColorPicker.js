/* eslint-disable react/prop-types */
import React from 'react';

const ColorPicker = ({hexVal,handleColorChange}) => {
    return (
        <div className="color-picker">
            <label>Color Picker</label>
            <input 
                type="color" 
                name="favcolor" 
                value={hexVal} 
                onChange={handleColorChange}
            />

        </div>
    )
}

export default ColorPicker;