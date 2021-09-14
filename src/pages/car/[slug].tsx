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
} from '../../styles/details.styles';
import { GetStaticPaths, GetStaticProps } from 'next';

import Carousel from '../../components/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cars from '../../utils/cars.json';

type Options = {
  option_id: number;
  color: string;
  image_url: string;
};

interface CarProps {
  car: {
    id: number;
    brand: string;
    model: string;
    price: number;
    main_image_url: string;
    brand_logo_url: string;
    options: Options[];
  };
}

const CarDetails = ({ car }: CarProps) => {
  const items = cars.cars[0].options;
  console.log(car);

  return (
    <Container>
      <Content>
        <Infos>
          <LeftSide>
            <LogoImage url={car.brand_logo_url} />
            <div>
              <h1>
                {car.brand} {car.model}
              </h1>
              <span>${car.price}/day</span>
            </div>
          </LeftSide>
          <ColorDiv>
            <h2>01</h2>
            <span>Red</span>
          </ColorDiv>
        </Infos>
        <MainDiv>
          <Link href='/' passHref>
            <a>
              <Button background='transparent' color='#313136' padding='0 17px'>
                <Image
                  src='/assets/arrow_left_gray.svg'
                  alt='Arrow Left'
                  width='42px'
                  height='16px'
                />
                Back to catalog
              </Button>
            </a>
          </Link>
          <CarImage url={car.options[1].image_url} />
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
        <Carousel items={car.options} />
      </Content>
    </Container>
  );
};

export default CarDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const car = cars.cars.find(car => car.id === Number(slug));

  return {
    props: {
      car,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
