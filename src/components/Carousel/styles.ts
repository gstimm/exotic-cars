import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Item = styled.div`
  height: 179px;
  width: 301px;
  border-radius: 16px;

  background: linear-gradient(
    to right,
    rgba(200, 200, 202, 1),
    rgba(200, 200, 202, 0.3)
  );

  display: flex;
  align-items: center;
  justify-content: center;
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
