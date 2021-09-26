import React from 'react';
import './WinnerAside.css';

const WinnerAside = (props) => {

    // total winner prize add--------------//
    const {pickWinner}=props
    const reducer = (initialValue ,currentValue)=>initialValue+currentValue.prize;
    const totalValue = props.pickWinner.reduce(reducer,0);
    
  console.log(pickWinner)
  for(const winner of pickWinner){
      const pickedNmae = winner.name;
      console.log(pickedNmae)
  }
    
    
    return (
        <div>
           <div>
               <h4>Select Winner:{pickWinner.length}</h4>
               <h4>Total Prize:${totalValue}</h4>
            </div>
            <div>
                <h4>name:{pickWinner.name}</h4>
            </div>
        </div>
    )
       

};

export default WinnerAside;