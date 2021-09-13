import styled from 'styled-components';

interface CarProps {
  url: string;
}

interface LogoProps {
  url: string;
}

interface ButtonProps {
  background: string;
  color: string;
  margin?: string;
}

export const Container = styled.div`
  min-height: calc(100vh - 5.1875rem);
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
  padding-top: 31px;
`;

export const Content = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  margin-bottom: 57px;
`;

export const CarImage = styled.div<CarProps>`
  width: 783px;
  height: 408px;
  background: transparent url(${props => props.url}) 0% 0% no-repeat padding-box;

  background-size: contain;
`;

export const LogoImage = styled.div<LogoProps>`
  min-width: 100px;
  width: auto;
  height: 123px;
  background: transparent url(${props => props.url}) 0% 0% no-repeat padding-box;
  background-size: contain;

  margin-right: 39px;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  height: 200px;
  width: 900px;

  h1 {
    font-size: 3.125rem;
    line-height: 4.1875rem;
    margin: 0;
  }

  span {
    font-size: 2.5rem;
    line-height: 3.3125rem;
    font-weight: 200;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: auto;
  height: 50px;
  border: 1px solid var(--gray-800);
  border-radius: 50px;

  padding: 0 17px;
  margin: ${props => props.margin};

  background: ${props => props.background};
  color: ${props => props.color};

  font-size: 1rem;
  line-height: 1.3425rem;

  display: flex;
  align-items: center;
`;

export const MainDiv = styled.div`
  height: 408px;
  width: 100%;

  position: relative;
  /* top: -100px; */

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ColorDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;

  h2 {
    font-size: 3.125rem;
    line-height: 4.1875rem;
    margin: 0;
  }

  span {
    font-size: 1.875rem;
    line-height: 2.5rem;
    font-weight: 200;
  }
`;
