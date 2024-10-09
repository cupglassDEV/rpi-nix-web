import React, { PropsWithChildren } from 'react';
import './Header.css'
const Header: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <header className='dock'>
      {children}
    </header>
  );
};

export default Header;
