import { Button, CarImage, Container, Item } from './styles';

import Image from 'next/image';
import React from 'react';

type CarOption = {
  option_id: number;
  color: string;
  image_url: string;
};

interface CarouselProps {
  items: CarOption[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Container>
      <Button>
        <Image
          src='/assets/arrow_left_white.svg'
          alt='Arrow Left'
          width='24px'
          height='16px'
        />
      </Button>
      {items.map(item => (
        <Item
          key={item.option_id}
          isSelected={item.option_id === 2 ? true : false}
        >
          <div className='background' />
          <CarImage
            url={item.image_url}
            isSelected={item.option_id === 2 ? true : false}
          />
        </Item>
      ))}
      <Button>
        <Image
          src='/assets/arrow_right_white.svg'
          alt='Arrow Left'
          width='24px'
          height='16px'
        />
      </Button>
    </Container>
  );
}
