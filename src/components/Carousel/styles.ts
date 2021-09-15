// import { bounceInLeft, bounceInRight } from 'react-animations';
import styled, { css } from 'styled-components';

interface ItemProps {
  isSelected: boolean;
  moveSide?: 'left' | 'right';
}

interface CarProps extends ItemProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 0 64px;

  overflow: hidden;

  .slide-div {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

// const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
// const bounceInRightAnimation = keyframes`${bounceInRight}`;

export const Item = styled.div<ItemProps>`
  /* animation: ${props =>
    props.moveSide === 'left'
      ? css`0.5s ${bounceInRightAnimation} `
      : css`0.5s ${bounceInLeftAnimation} `}; */

  height: ${props => (props.isSelected ? '240px' : '179px')};
  width: ${props => (props.isSelected ? '380px' : '301px')};

  .background {
    border-radius: 16px;
    background: ${props =>
      props.isSelected
        ? css`linear-gradient(
        to right,
        rgba(47, 47, 180, 0.3),
        rgba(47, 47, 180, 0.1)
      )
      no-repeat`
        : css`linear-gradient(
        to right,
        rgba(200, 200, 202, 1),
        rgba(200, 200, 202, 0.3)
      )
      no-repeat`};

    z-index: 1;
    width: 80%;
    height: 100%;

    margin: 0 auto;
  }
`;

export const Button = styled.button`
  width: 42px;
  height: 42px;

  background: var(--gray-800);
  border: none;
  border-radius: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;
`;

export const CarImage = styled.div<CarProps>`
  z-index: 10;
  position: relative;

  top: ${props => (props.isSelected ? '-200px' : '-160px')};
  width: auto;
  height: ${props => (props.isSelected ? '200px' : '180px')};
  background: transparent url(${props => props.url}) 0% 0% no-repeat padding-box;
  background-size: contain;
`;
