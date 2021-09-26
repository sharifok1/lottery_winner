import React from 'react';
import './WinnerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons'
const WinnerCard = (props) => {
    // console.log(props)
    const{name,nationality,email,img,Phone,prize}=props.winnerData
    return (

        // lottery winner single card--------------------------------/
        <div className="card-container">
            <div className="winner-card">
                <div className="img-container">
                    <img className="photo-style" src={img} alt="" />
                </div>
                {/* card five(5) information---------------------------------- */}
                    <p>Name:{name}</p>
                    <p>Nationality:{nationality}</p>
                    <p><FontAwesomeIcon icon={faPhone} />+{Phone}</p>
                    <p> <FontAwesomeIcon icon={faEnvelope} /> {email}</p>
                    <h4 className="prize-amount">Prize:${prize}</h4>
                <button 
                    className="btn-style"
                    onClick={()=>props.handlarAddBtn(props.winnerData)}
                    >Add Prize
                </button>
            </div>
            
        </div>
    );
};

export default WinnerCard;