import React from 'react';
import PickAWinner from '../PickAWinner/PickAWinner';
import './WinnerAside.css';

const WinnerAside = (props) => {

    // total winner prize add--------------//
    const {pickWinner}=props;
    const reducer = (initialValue ,currentValue)=>initialValue+currentValue.prize;
    const totalValue = props.pickWinner.reduce(reducer,0);
    

    
    return (
        <div className="aside">
           <div className="asid-style">
               <h4>Select Winner:{pickWinner.length}</h4>
               <h4>Total Prize:${totalValue}</h4>
            </div>
            <div>
                {
                    pickWinner.map(winner =><PickAWinner winner={winner}></PickAWinner>)
                }
            </div>
        </div>
    )
       

};

export default WinnerAside;