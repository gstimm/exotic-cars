import { Button, CarImage, Container, Item } from './styles';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

type CarOption = {
  option_id: number;
  color: string;
  image_url: string;
};

interface CarouselProps {
  items: CarOption[];
}

export default function Carousel(props) {
  const [active, setActive] = useState(1);

  const items = props.items;

  useEffect(() => {
    props.setCarInfos(items[active]);
  }, [active]);

  function handleSelectedCar(index: number) {
    setActive(index);
  }

  function handleNextCar(index: number) {
    if (index === items.length - 1) {
      setActive(0);
    } else {
      setActive(index + 1);
    }
  }

  function handlePreviousCar(index: number) {
    if (index === 0) {
      setActive(items.length - 1);
    } else {
      setActive(index - 1);
    }
  }

  console.log(active);

  return (
    <Container>
      <Button onClick={() => handlePreviousCar(active)}>
        <Image
          src='/assets/arrow_left_white.svg'
          alt='Arrow Left'
          width='24px'
          height='16px'
        />
      </Button>
      {items.map((item, index) => (
        <button
          key={item.option_id}
          onClick={() => handleSelectedCar(index)}
          className='slide-div'
        >
          <Item isSelected={index === active ? true : false}>
            <div className='background' />
            <CarImage
              url={item.image_url}
              isSelected={index === active ? true : false}
            />
          </Item>
        </button>
      ))}
      <Button onClick={() => handleNextCar(active)}>
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
