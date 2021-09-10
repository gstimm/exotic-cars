import {
  HeaderContainer,
  HeaderContent,
  SignInButton,
  SignUpButton,
} from './styles';

import React from 'react';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className='logo'>
          <h1>EXOTIC</h1>
          <h2>CARS</h2>
        </div>
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
