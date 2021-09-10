import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 5.1875rem);
`;

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 32px;

  margin-bottom: 57px;
`;
