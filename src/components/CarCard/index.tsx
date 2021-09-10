import { Container } from './styles';
import React from 'react';
import cars from '../../utils/cars.json';

interface CarProps {
  brand: string;
  model: string;
  price: number;
  main_image_url: string;
}

const CarCard = ({ brand, model, price, main_image_url }: CarProps) => {
  return (
    <Container url={main_image_url}>
      <p>{brand}</p>
      <span>{model}</span>
      <div className='car-image' />
      <div>
        <span className='dollar'>$</span>
        <p className='value'>{price}</p>
        <span className='slash-day'>/day</span>
      </div>
    </Container>
  );
};

export default CarCard;
