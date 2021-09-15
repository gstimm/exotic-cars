import { Container, Content } from '../styles/home.styles';

import API from '../utils/cars.json';
import CarCard from '../components/CarCard';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          {API.cars.map(car => (
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
        </Content>
      </Container>
    </>
  );
}
