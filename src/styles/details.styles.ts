import styled from 'styled-components';

interface CarProps {
  url: string;
}

interface ButtonProps {
  background: string;
  color: string;
  margin?: string;
  padding?: string;
}

export const Container = styled.div`
  min-height: calc(100vh - 5.1875rem);
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
  padding-top: 31px;

  padding-bottom: 57px;
`;

export const Content = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  .buttons-div {
    display: flex;
    justify-content: center;

    margin-bottom: 44px;

    a {
      margin-right: 20px;
    }

    button {
      margin: 0;
    }
  }

  @media (max-width: 1260px) {
    padding: 0 1.5rem;
  }
`;

export const CarouselDiv = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`;

export const CarImage = styled.div<CarProps>`
  width: 900px;
  height: 450px;
  background: transparent url(${props => props.url}) 0% 0% no-repeat padding-box;
  background-size: contain;

  @media (max-width: 1024px) and (min-width: 769px) {
    height: 350px;
  }

  @media (max-width: 768px) and (min-width: 651px) {
    height: 300px;
  }

  @media (max-width: 650px) and (min-width: 551px) {
    height: 250px;
  }

  @media (max-width: 550px) and (min-width: 426px) {
    height: 220px;
  }

  @media (max-width: 425px) and (min-width: 376px) {
    height: 180px;
  }

  @media (max-width: 375px) {
    height: 150px;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarInfos = styled.div`
  display: flex;
  height: auto;
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

  .logo {
    max-width: 128px;
    height: 128px;
    margin-right: 39px;

    img {
      margin: auto;
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    .logo {
      max-width: 100px;
      height: 100px;
      margin-right: 30px;
    }
  }

  @media (max-width: 768px) and (min-width: 651px) {
    .logo {
      max-width: 80px;
      height: 80px;
      margin-right: 26px;
    }

    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
    }

    span {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  @media (max-width: 650px) and (min-width: 426px) {
    .logo {
      max-width: 65px;
      height: 65px;
      margin-right: 20px;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    span {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
  }

  @media (max-width: 425px) and (min-width: 376px) {
    .logo {
      max-width: 50px;
      height: 50px;
      margin-right: 20px;
    }

    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    span {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 375px) {
    .logo {
      max-width: 50px;
      height: 50px;
      margin-right: 20px;
    }

    h1 {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }

    span {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  width: auto;
  height: 50px;
  border: 1px solid var(--gray-800);
  border-radius: 50px;

  padding: ${props => props.padding};
  margin: ${props => props.margin};

  background: ${props => props.background};
  color: ${props => props.color};

  font-size: 1rem;
  line-height: 1.3425rem;

  display: flex;
  align-items: center;
`;

export const MainDiv = styled.div`
  max-height: 500px;
  width: 100%;

  height: auto;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    margin-top: 100px;
  }

  @media (max-width: 1220px) {
    justify-content: center;
  }
`;

export const ColorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 150px;
  margin: 0;

  margin-left: auto;

  h2 {
    font-size: 3.125rem;
    line-height: 4.1875rem;
    margin: 0;
  }

  span {
    font-size: 1.875rem;
    line-height: 2.5rem;
    font-weight: 200;
    text-transform: capitalize;
  }

  @media (max-width: 768px) and (min-width: 621px) {
    h2 {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    span {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 620px) and (min-width: 375px) {
    h2 {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }

    span {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }

    span {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
`;
