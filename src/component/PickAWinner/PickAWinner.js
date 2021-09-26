import React from 'react';

const PickAWinner = (props) => {
    console.log(props.winner.name)
    return (
        <div>
            <h1>name:{props.winner.name}</h1>
        </div>
    );
};

export default PickAWinner;