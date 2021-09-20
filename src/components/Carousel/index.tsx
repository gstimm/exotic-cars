import { Button, CarImage, Container, Content, Item } from './styles';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

type CarOption = {
  option_id: number;
  color: string;
  image_url: string;
};

type MoveSide = 'left' | 'right' | '';

interface CarouselProps {
  items: CarOption[];
  setCarInfos: (arg0: CarOption) => void;
}

export default function Carousel(props: CarouselProps) {
  const originalItems = props.items;
  const [items, setItems] = useState(originalItems);
  const [selected, setSelected] = useState(1);
  const [moveSide, setMoveSide] = useState<MoveSide>('');
  const [showItems, setShowItems] = useState(
    items.slice(selected - 1, selected + 2),
  );
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', changeLayout);
    return function cleanup() {
      window.removeEventListener('resize', changeLayout);
    };
  });

  const changeLayout = () => {
    if (window.innerWidth > 650) {
      setIsMobileScreen(false);
    } else {
      setIsMobileScreen(true);
    }
  };

  useEffect(() => {
    switchIndexes();
    setSelected(1);
    setShowItems(items.slice(selected - 1, selected + 2));
    setTimeout(() => {
      setMoveSide('');
    }, 500);
    props.setCarInfos(items[selected]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  function handleSelectedCar(index: number) {
    if (index > selected) {
      setSelected(selected - 1);
      setMoveSide('left');
    }
    if (index < selected) {
      setSelected(selected + 1);
      setMoveSide('right');
    }
  }

  function switchIndexes() {
    if (selected < 1) {
      setItems([...items.slice(1), items[0]]);
    }
    if (selected > 1) {
      setItems([items[items.length - 1], ...items.slice(0, items.length - 1)]);
    }
  }

  return (
    <Container>
      {!isMobileScreen && (
        <Button
          onClick={() => handleSelectedCar(selected - 1)}
          style={{ marginLeft: '1rem' }}
        >
          <Image
            src='/assets/arrow_left_white.svg'
            alt='Arrow Left'
            width='24px'
            height='16px'
          />
        </Button>
      )}

      <Content moveSide={moveSide}>
        {showItems.map((item, index) => (
          <button
            key={item.option_id}
            onClick={() => handleSelectedCar(index)}
            className='slide-div'
          >
            <Item isSelected={index === 1 ? true : false}>
              <div className='background' />
              <CarImage
                url={item.image_url}
                isSelected={index === 1 ? true : false}
              />
            </Item>
          </button>
        ))}
      </Content>

      {!isMobileScreen && (
        <Button
          onClick={() => handleSelectedCar(selected + 1)}
          style={{ marginRight: '1rem' }}
        >
          <Image
            src='/assets/arrow_right_white.svg'
            alt='Arrow Left'
            width='24px'
            height='16px'
          />
        </Button>
      )}
    </Container>
  );
}
