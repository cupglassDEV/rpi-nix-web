import React, { PropsWithChildren } from 'react';
import './Header.css'
import logo from '../../public/rpi-nix-logo/icon.png'
import {Link}  from 'react-router-dom';
const Header: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <header className='dock'>
      <Link draggable={false} to="/"><img draggable={false} src={logo} className="baselogo" alt="RPiNIX logo" /></Link> 
      <div className="quicklinks">
      {children}
      </div>
    </header>
  );
};

export default Header;
