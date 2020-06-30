/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card';

const CardList = ({data}) => {
    
    return (
        <div className="card-list">
            {
                data.map(obj => {
                    const themeObj = {
                        id: obj.fifa_id,
                        hexVal: '#fff000'
                    }
                    return (
                        <Card key={obj.fifa_id} obj={obj} themeObj={themeObj}/>
                    )
                })
            }
        </div>
    )
}

export default CardList;