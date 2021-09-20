import { Button, CarImage, Container, Content, Item } from './styles';
import React, { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
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
  const items = props.items;

  const [selected, setSelected] = useState(1);
  const [lastSelected, setLastSelected] = useState(1);

  const [showItems, setShowItems] = useState({
    previous: items[0],
    current: items[1],
    next: items[2],
  });

  const [moveSide, setMoveSide] = useState<MoveSide>('');
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
    props.setCarInfos(items[selected]);

    if (selected < 0 || selected > items.length - 1) {
      return;
    }

    if (selected < lastSelected) {
      if (selected === 0) {
        setShowItems({
          previous: items[items.length - 1],
          current: items[selected],
          next: items[selected + 1],
        });
      } else {
        setShowItems({
          previous: items[selected - 1],
          current: items[selected],
          next: items[selected + 1],
        });
      }
    }
    if (selected > lastSelected) {
      if (selected === items.length - 1) {
        setShowItems({
          previous: items[selected - 1],
          current: items[selected],
          next: items[0],
        });
      } else {
        setShowItems({
          previous: items[selected - 1],
          current: items[selected],
          next: items[selected + 1],
        });
      }
    }

    console.log(selected);
    console.log(lastSelected);
    setTimeout(() => {
      setMoveSide('');
    }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  function handlePreviousCar() {
    if (selected === 0) {
      return;
    }
    setMoveSide('right');
    setLastSelected(selected);
    setSelected(selected - 1);
  }

  function handleNextCar() {
    if (selected === items.length - 1) {
      return;
    }
    setMoveSide('left');
    setLastSelected(selected);
    setSelected(selected + 1);
  }

  return (
    <Container>
      {!isMobileScreen && (
        <Button onClick={handlePreviousCar} style={{ marginLeft: '1rem' }}>
          <Image
            src='/assets/arrow_left_white.svg'
            alt='Arrow Left'
            width='24px'
            height='16px'
          />
        </Button>
      )}

      <Content moveSide={moveSide}>
        <button onClick={handlePreviousCar} className='slide-div'>
          <Item isSelected={false}>
            <div className='background' />
            <CarImage url={showItems.previous?.image_url} isSelected={false} />
          </Item>
        </button>
        <button className='slide-div'>
          <Item isSelected={true}>
            <div className='background' />
            <CarImage url={showItems.current?.image_url} isSelected={true} />
          </Item>
        </button>
        <button onClick={handleNextCar} className='slide-div'>
          <Item isSelected={false}>
            <div className='background' />
            <CarImage url={showItems.next?.image_url} isSelected={false} />
          </Item>
        </button>
      </Content>

      {!isMobileScreen && (
        <Button onClick={handleNextCar} style={{ marginRight: '1rem' }}>
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
