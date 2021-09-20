import { bounceInLeft, bounceInRight } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

interface ItemProps {
  isSelected: boolean;
}

interface ContentProps {
  moveSide: 'left' | 'right' | '';
}

interface CarProps extends ItemProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  overflow: hidden;

  /* animation: ${props =>
    props.moveSide === 'right'
      ? css`0.5s ${bounceInLeftAnimation} `
      : css`0.5s ${bounceInRightAnimation} `}; */

  animation: ${({ moveSide }) =>
    moveSide === 'right' && css`0.5s ${bounceInLeftAnimation}`};
  animation: ${({ moveSide }) =>
    moveSide === 'left' && css`0.5s ${bounceInRightAnimation}`};

  .slide-div {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;

export const Item = styled.div<ItemProps>`
  height: ${props => (props.isSelected ? '240px' : '179px')};
  width: ${props => (props.isSelected ? '380px' : '283px')};

  @media (max-width: 1120px) and (min-width: 1025px) {
    height: ${props => (props.isSelected ? '235px' : '174px')};
    width: ${props => (props.isSelected ? '350px' : '265px')};
  }

  @media (max-width: 1024px) and (min-width: 951px) {
    height: ${props => (props.isSelected ? '230px' : '170px')};
    width: ${props => (props.isSelected ? '320px' : '245px')};
  }

  @media (max-width: 950px) and (min-width: 901px) {
    height: ${props => (props.isSelected ? '215px' : '160px')};
    width: ${props => (props.isSelected ? '285px' : '225px')};
  }

  @media (max-width: 900px) and (min-width: 841px) {
    height: ${props => (props.isSelected ? '200px' : '145px')};
    width: ${props => (props.isSelected ? '260px' : '200px')};
  }

  @media (max-width: 840px) and (min-width: 768px) {
    height: ${props => (props.isSelected ? '170px' : '120px')};
    width: ${props => (props.isSelected ? '200px' : '150px')};
  }

  @media (max-width: 769px) {
    height: ${props => (props.isSelected ? '160px' : '110px')};
    width: ${props => (props.isSelected ? '190px' : '145px')};
  }

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
  position: relative;
  width: auto;
  height: ${props => (props.isSelected ? '200px' : '180px')};
  background: transparent url(${props => props.url}) 0% 0% no-repeat padding-box;
  background-size: contain;

  top: ${props => (props.isSelected ? '-210px' : '-145px')};

  @media (max-width: 1120px) and (min-width: 1025px) {
    top: ${props => (props.isSelected ? '-210px' : '-140px')};
  }

  @media (max-width: 1024px) and (min-width: 951px) {
    top: ${props => (props.isSelected ? '-200px' : '-135px')};
  }

  @media (max-width: 950px) and (min-width: 901px) {
    top: ${props => (props.isSelected ? '-190px' : '-125px')};
  }

  @media (max-width: 900px) and (min-width: 841px) {
    top: ${props => (props.isSelected ? '-160px' : '-110px')};
  }

  @media (max-width: 840px) and (min-width: 768px) {
    top: ${props => (props.isSelected ? '-130px' : '-90px')};
  }

  @media (max-width: 769px) {
    top: ${props => (props.isSelected ? '-120px' : '-80px')};
  }
`;
