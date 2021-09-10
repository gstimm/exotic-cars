import { HeaderContainer, HeaderContent } from './styles';

import React from 'react';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <h1>EXOTIC</h1>
          <h2>CARS</h2>
        </div>
        <SearchBar />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
