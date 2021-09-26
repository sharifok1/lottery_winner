import React from 'react';
import './PickAWinner.css'

const PickAWinner = (props) => {
    const {img,name}=props.winner
    console.log(props.winner.name)
    return (
        <div className="picked-winner">
            <img className="winner-photo" src={img} alt="" />
            <h3>{name}</h3>
            <button className="btn-cross">X</button>
        </div>
    );
};

export default PickAWinner;