import {
  HeaderContainer,
  HeaderContent,
  Logo,
  SignInButton,
  SignUpButton,
} from './styles';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import SearchBar from '../SearchBar';

const Header = () => {
  const [showBurgerButton, setShowBurgerButton] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', showOrNot);
    return function cleanup() {
      window.removeEventListener('resize', showOrNot);
    };
  });

  useEffect(() => {
    window.addEventListener('resize', showOrNot);
    return function cleanup() {
      window.removeEventListener('resize', showOrNot);
    };
  }, []);

  const showOrNot = () => {
    if (window.innerWidth > 490) {
      setShowBurgerButton(false);
    } else if (window.innerWidth <= 490) {
      setShowBurgerButton(true);
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href='/' passHref>
          <a>
            <Logo>
              <h1>EXOTIC</h1>
              <h2>CARS</h2>
            </Logo>
          </a>
        </Link>
        <SearchBar />
        {showBurgerButton ? (
          <Menu right width={290}>
            <h1 className='menu-logo'>
              EXOTIC <span>CARS</span>
            </h1>
            <a className='menu-item'>Sign In</a>
            <a className='menu-item'>Sign Up</a>
          </Menu>
        ) : (
          <div>
            <SignUpButton>Sign up</SignUpButton>
            <SignInButton>Sign in</SignInButton>
          </div>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
