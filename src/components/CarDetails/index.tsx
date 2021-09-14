import {
  Button,
  CarImage,
  ColorDiv,
  Container,
  Content,
  Infos,
  LeftSide,
  LogoImage,
  MainDiv,
} from './styles';

import Carousel from '../Carousel';
import Image from 'next/image';
import React from 'react';
import cars from '../../utils/cars.json';

interface CarProps {
  brand: string;
  model: string;
  price: number;
  main_image_url: string;
}

const CarDetails = () => {
  const items = cars.cars[0].options;

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
          <ColorDiv>
            <h2>01</h2>
            <span>Red</span>
          </ColorDiv>
        </Infos>
        <MainDiv>
          <Button background='transparent' color='#313136' padding='0 17px'>
            <Image
              src='/assets/arrow_left_gray.svg'
              alt='Arrow Left'
              width='42px'
              height='16px'
            />
            Back to catalog
          </Button>
          <CarImage url='https://imgur.com/uxYW4YY.png' />
        </MainDiv>
        <Button
          background='#313136'
          color='#fff'
          margin='0 auto 43px'
          padding='0 33px'
        >
          Book now
          <Image
            src='/assets/arrow_right_white.svg'
            alt='Arrow Left'
            width='42px'
            height='16px'
          />
        </Button>
        <Carousel items={items} />
      </Content>
    </Container>
  );
};

export default CarDetails;
