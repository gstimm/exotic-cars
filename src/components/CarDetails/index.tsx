import {
  CarImage,
  Container,
  Content,
  Infos,
  LeftSide,
  LogoImage,
  RightSide,
} from './styles';

import React from 'react';
import cars from '../../utils/cars.json';

interface CarProps {
  brand: string;
  model: string;
  price: number;
  main_image_url: string;
}

const CarDetails = () => {
  return (
    <Container>
      <Content>
        <Infos>
          <LeftSide>
            <LogoImage url='https://imgur.com/v6pOPIH.png' />
            <div>
              <h1>Ferrari California</h1>
              <span>$725/day</span>
            </div>
          </LeftSide>
          <RightSide>
            <h2>01</h2>
            <span>Red</span>
          </RightSide>
        </Infos>

        <CarImage url='https://imgur.com/uxYW4YY.png' />
      </Content>
    </Container>
  );
};

export default CarDetails;
