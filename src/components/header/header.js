import React from 'react';
import './header.css';
import Nav from './navigation';
import Bgimage from './bgimage';

const header = () => {
  return (
    <header className='header'>
        <Nav/>
        <Bgimage/>
    </header>
  )
}

export default header
