import { Container, Content } from './styles';

import API from '../../utils/cars.json';
import CarCard from '../CarCard';

const Home = () => {
  return (
    <Container>
      <Content>
        {API.cars.map(car => (
          <CarCard
            key={car.id}
            brand={car.brand}
            model={car.model}
            price={car.price}
            main_image_url={car.main_image_url}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
