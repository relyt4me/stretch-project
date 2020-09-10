import React from 'react';
import f2glogo from '../../assets/f2glogo.png';

const Header = () => {
  return (
    <div className='header-component'>
      <h1 className='header-title'>Fridge to Glass</h1>
      <img src={f2glogo} alt='Three neon glasses logo for Fridge to Glass' />
    </div>
  );
};

export default Header;
