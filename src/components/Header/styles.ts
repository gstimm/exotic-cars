import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 5.1875rem;
  box-shadow: 0px 10px 30px #0000001a;
  margin-bottom: 22px;
`;

export const HeaderContent = styled.div`
  max-width: 1220px;
  height: 5.1875rem;
  line-height: 5.1875rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignUpButton = styled.button`
  width: 84px;
  height: 36px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3125rem;
  color: var(--lilac-500);
  background: transparent;
  border: none;
`;

export const SignInButton = styled.button`
  width: 84px;
  height: 36px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3125rem;
  color: var(--lilac-500);
  background: transparent;
  border: 2px solid var(--lilac-500);
  border-radius: 13px;
  margin-left: 28px;
`;

export const Logo = styled.div`
  display: flex;

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  h2 {
    font-size: 1rem;
    line-height: 1.3125rem;
    font-weight: 400;
    padding-top: 6px;
    margin-left: 5px;
    align-self: center;
  }
`;
