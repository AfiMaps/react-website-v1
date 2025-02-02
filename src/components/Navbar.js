import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CVDIGITAL
            <i class='logo.png' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                INICIO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/CADASTRARMEMBRO'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CADASTAR MEMBRO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/SOBRE'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SOBRE
              </Link>
            </li>

            <li>
              <Link
                to='/loginsiga'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
