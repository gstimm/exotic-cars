import { Container, Content, Grid } from '../styles/home.styles';
import { useEffect, useState } from 'react';

import API from '../utils/cars.json';
import CarCard from '../components/CarCard';
import { GetStaticProps } from 'next';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

type Options = {
  option_id: number;
  color: string;
  image_url: string;
};

type Car = {
  id: number;
  brand: string;
  model: string;
  price: number;
  main_image_url: string;
  brand_logo_url: string;
  options: Options[];
};

interface CarsProps {
  cars: Car[];
}

export default function Home({ cars }: CarsProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 100) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Grid>
            {cars.map(car => (
              <Link key={car.id} href={`/car/${car.id}`} passHref>
                <a>
                  <CarCard
                    brand={car.brand}
                    model={car.model}
                    price={car.price}
                    main_image_url={car.main_image_url}
                  />
                </a>
              </Link>
            ))}
          </Grid>
          <div className='button-div'>
            {showScroll && (
              <button onClick={scrollTop}>
                <Image
                  src='/assets/back_to_top.svg'
                  alt='Back to Top Button'
                  width={100}
                  height={100}
                />
              </button>
            )}
          </div>
        </Content>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const cars = API.cars;

  return {
    props: {
      cars,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
