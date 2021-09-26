import React, { useEffect, useState } from 'react';
import WinnerAside from '../Aside/WinnerAside';
import WinnerCard from '../WinnerCard/WinnerCard';
import './Winnere.css'

const Winner = () => {
    const [winners,setWinners] =useState([]);
    const [pickWinner,setPicWinner]=useState([])
    useEffect(()=>{
        fetch('./Winer.JSON')
        .then(res =>res.json())
        .then(data =>setWinners(data))
    },[])


    // btn handler pass function ------------------------//
    const handlarAddBtn=(winner)=>{
        const newWinner = [...pickWinner,winner];
        setPicWinner(newWinner);
        // console.log(newWinner);
    }
    
    return (
      
        <div className="display-container">
            <div className="card-container">
            {
                winners.map(winner =><WinnerCard
                key ={winner.id}
                winnerData ={winner}
                handlarAddBtn={handlarAddBtn}
                ></WinnerCard>)
            }
            </div>
            {/* aside for adding total and picked winner-------------------------------- */}
            <div className="aside-style">
                <WinnerAside pickWinner={pickWinner}  ></WinnerAside>
            </div>
           
        </div>
    );
};

export default Winner;