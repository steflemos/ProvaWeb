import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className='TitleMyFinance'>MyFinance</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/transactions">Transações</NavLink>
      </nav>
    </header>
  );
};

export default Header;
