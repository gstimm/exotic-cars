import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 5.1875rem);
  padding-top: 22px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 32px;

  @media (max-width: 1220px) and (min-width: 911px) {
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }

  @media (max-width: 910px) and (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    column-gap: 16px;
    row-gap: 20px;
  }
`;

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding-bottom: 50px;

  .button-div {
    width: 100px;
    position: sticky;
    margin-left: auto;
    bottom: 0px;

    button {
      background: transparent;
      border: none;
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 1220px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 0 0.875rem;
  }
`;
