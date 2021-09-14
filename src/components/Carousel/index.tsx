import { Button, Container, Item } from './styles';

import Image from 'next/image';
import React from 'react';

export default function Carousel() {
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
      <Item />
      <Item />
      <Item />
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
