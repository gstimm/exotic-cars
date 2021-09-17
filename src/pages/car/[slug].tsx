import {
  Button,
  CarImage,
  CarInfos,
  CarouselDiv,
  ColorDiv,
  Container,
  Content,
  Infos,
  MainDiv,
} from '../../styles/details.styles';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
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
  const [carInfos, setCarInfos] = useState<Options>(car.options[1]);

  const [isWideScreen, setIsWideScreen] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', changeLayout);
    return function cleanup() {
      window.removeEventListener('resize', changeLayout);
    };
  });

  const changeLayout = () => {
    if (window.innerWidth >= 1220) {
      setIsWideScreen(true);
    } else {
      setIsWideScreen(false);
    }

    if (window.innerWidth <= 425) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Infos>
            <CarInfos>
              <div className='logo'>
                <img src={car.brand_logo_url} alt='Logo' />
              </div>
              <div>
                <h1>
                  {car.brand} {car.model}
                </h1>
                <span>${car.price}/day</span>
              </div>
            </CarInfos>
          </Infos>
          <MainDiv>
            {isWideScreen && (
              <Link href='/' passHref>
                <a>
                  <Button
                    background='transparent'
                    color='#313136'
                    padding='0 17px'
                  >
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
            )}
            <CarImage url={carInfos.image_url}>
              <ColorDiv>
                <h2>
                  {carInfos.option_id < 10
                    ? '0' + carInfos.option_id
                    : carInfos.option_id}
                </h2>
                <span>{carInfos.color}</span>
              </ColorDiv>
            </CarImage>
          </MainDiv>
          <div className='buttons-div'>
            {!isWideScreen && (
              <Link href='/' passHref>
                <a>
                  <Button
                    background='transparent'
                    color='#313136'
                    padding='0 17px'
                  >
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
            )}
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
          </div>
        </Content>
        <CarouselDiv>
          <Carousel items={car.options} setCarInfos={setCarInfos} />
        </CarouselDiv>
      </Container>
    </>
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
