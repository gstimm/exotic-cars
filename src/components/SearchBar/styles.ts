import styled from 'styled-components';

export const SearchDiv = styled.div`
  width: 33.75rem;
  height: 36px;
  line-height: 36px;

  display: flex;
  align-items: center;

  background: var(--gray-100);
  border-radius: 2.25rem;
  padding-left: 27px;

  span {
    font-size: 0.75rem;
    line-height: 36px;
    font-weight: 500;
    color: var(--gray-500);
    margin-left: 8px;
  }
`;

export const CalendarsDiv = styled.div`
  display: flex;
  z-index: 100;
`;

export const DatesDiv = styled.div`
  margin-left: auto;
  width: 200px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const FindDiv = styled.div`
  width: 30px;
  height: 30px;
  background: var(--white);
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: 3px;

  cursor: pointer;

  box-shadow: 0px 3px 15px #00000014;
`;
