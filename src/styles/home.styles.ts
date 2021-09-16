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
`;

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  margin-bottom: 57px;

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
`;
