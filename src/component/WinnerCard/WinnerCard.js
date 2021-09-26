import React from 'react';
import './WinnerCard.css'

const WinnerCard = (props) => {
    // console.log(props)
    const{name,nationality,email,img,Phone,prize}=props.winnerData
    return (
        <div className="card-container">
            <div className="winner-card">
                <div className="img-container">
                    <img className="photo-style" src={img} alt="" />
                </div>
                <p>Name:{name}</p>
                <p>Nationality:{nationality}</p>
                <p>Phone:{Phone}</p>
                <p>{email}</p>
                <h4 className="prize-amount">Prize:${prize}</h4>
                <button 
                    className="btn-style"
                    onClick={()=>props.handlarAddBtn(props.winnerData)}
                    >Add Prize</button>
            </div>
            
        </div>
    );
};

export default WinnerCard;