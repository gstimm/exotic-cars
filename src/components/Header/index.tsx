import {
  HeaderContainer,
  HeaderContent,
  Logo,
  SignInButton,
  SignUpButton,
} from './styles';

import Link from 'next/link';
import React from 'react';
import SearchBar from '../SearchBar';

const Header = () => {
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
        <div>
          <SignUpButton>Sign up</SignUpButton>
          <SignInButton>Sign in</SignInButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
