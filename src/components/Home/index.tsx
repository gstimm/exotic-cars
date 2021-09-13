import { Container, Content } from './styles';

import API from '../../utils/cars.json';
import CarCard from '../CarCard';
import Link from 'next/link';

const Home = () => {
  return (
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
  );
};

export default Home;
