import React from 'react';
import './Header.css';
import bannar from '../Header/winner.png'

const Header = () => {
    return (
        <div className="header-container">
            {/* ----header text ------------------------------*/}
           <div className='header-style'> 
                <h2>Internatioal Lottery winner prize ceremoney Programme 2021</h2>
                <h4>There are 30 lucky winner will received Cash money </h4>             
          </div>
          
          <h1>Total Prize Budget: $1000000 </h1>
           <div className="banner-div">
                <img className="banner" src={bannar} alt="" />
               
           </div>
        </div>
    );
};

export default Header;