import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

// Parallax has to be used instead of basic tilt

const Logo = () => {
    return (
      <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa4">
                <img stryle={{paddingTop: '5px'}} alt='logo' src={brain}/>
            </div>
        </Tilt>
      </div>  
    );
}

export default Logo;