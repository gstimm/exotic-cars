import { Button, CarImage, Container, Content, Item } from './styles';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

type CarOption = {
  option_id: number;
  color: string;
  image_url: string;
};

// type MoveSide = 'left' | 'right';

interface CarouselProps {
  items: CarOption[];
  setCarInfos: (arg0: CarOption) => void;
}

export default function Carousel(props: CarouselProps) {
  const originalItems = props.items;
  let items = originalItems;

  const [active, setActive] = useState(1);
  const [showItems, setShowItems] = useState(
    items.slice(active - 1, active + 2),
  );
  // const [moveSide, setMoveSide] = useState<MoveSide>('left');

  useEffect(() => {
    switchIndexes();
    setActive(1);
    props.setCarInfos(items[active]);
    setShowItems(items.slice(active - 1, active + 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function handleSelectedCar(index: number) {
    if (index === active) {
      return;
    } else if (index > active) {
      setActive(active - 1);
    } else if (index < active) {
      setActive(active + 1);
    }
  }

  function handlePreviousCar(index: number) {
    if (index === items.length - 1) {
      setActive(0);
    } else {
      setActive(index + 1);
    }
  }

  function handleNextCar(index: number) {
    if (index === 0) {
      setActive(items.length - 1);
    } else {
      setActive(index - 1);
    }
  }

  function switchIndexes() {
    console.log('ACTIVE: ' + active);
    if (active === 1) {
      return;
    } else if (active < 1) {
      items.push(items.shift());
    } else if (active > 1) {
      items.unshift(items.splice(items.length - 1, 1).shift());
    }
  }

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
      <Content>
        {showItems.map((item, index) => (
          <button
            key={item.option_id}
            onClick={() => handleSelectedCar(index)}
            className='slide-div'
          >
            <Item
              isSelected={index === active ? true : false}
              // moveSide={moveSide}
            >
              <div className='background' />
              <CarImage
                url={item.image_url}
                isSelected={index === active ? true : false}
                // moveSide={moveSide}
              />
            </Item>
          </button>
        ))}
      </Content>
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
