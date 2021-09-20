import styled from 'styled-components';

interface CarProps {
  url: string;
}

export const Container = styled.div<CarProps>`
  width: 287px;
  height: 223px;
  background: var(--gray-50);
  border-radius: 20px;
  padding: 23px 16px 21px 16px;

  p {
    font-size: 1.0625rem;
    line-height: 1.375;
    font-weight: bold;
    margin: 0;
  }

  span {
    font-size: 1.0625rem;
    line-height: 1.375;
    font-weight: 300;
    text-transform: uppercase;
  }

  .car-image {
    width: auto;
    height: 106px;
    background: transparent url(${props => props.url}) 0% 0% no-repeat
      padding-box;

    background-size: contain;
  }

  div {
    display: flex;
    justify-content: flex-end;

    .dollar {
      font-size: 0.875rem;
      font-weight: bold;
      margin-right: 1px;
    }

    .value {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 2rem;
    }

    .slash-day {
      text-transform: lowercase;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.1875rem;
      margin-top: 10px;
    }
  }

  @media (max-width: 600px) and (min-width: 465px) {
    width: 200px;
    height: 223px;
  }

  @media (max-width: 464px) and (min-width: 381px) {
    width: 170px;
    height: 223px;
  }

  @media (max-width: 380px) and (min-width: 321px) {
    width: 157px;
    height: 223px;
  }

  @media (max-width: 320px) {
    width: 140px;
    height: 223px;
  }
`;
