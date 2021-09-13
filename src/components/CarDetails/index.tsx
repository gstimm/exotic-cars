import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
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
        </Infos>
        <MainDiv>
          <Button background='transparent' color='#313136'>
            <Image
              src='/assets/arrow_left_gray.svg'
              alt='Arrow Left'
              width='42px'
              height='16px'
            />
            Back to catalog
          </Button>
          <CarImage url='https://imgur.com/uxYW4YY.png' />
          <ColorDiv>
            <h2>01</h2>
            <span>Red</span>
          </ColorDiv>
        </MainDiv>
        <Button background='#313136' color='#fff' margin='0 auto'>
          Book now
          <Image
            src='/assets/arrow_right.svg'
            alt='Arrow Left'
            width='42px'
            height='16px'
          />
        </Button>
      </Content>
    </Container>
  );
};

export default CarDetails;
