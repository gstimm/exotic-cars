import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 5.1875rem;
  box-shadow: 0px 10px 30px #0000001a;
  padding-bottom: 22px;
`;

export const HeaderContent = styled.div`
  max-width: 1220px;
  height: 5.1875rem;
  line-height: 5.1875rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1220px) {
    padding: 0 1.5rem;
  }

  .bm-burger-button {
    position: relative;
    width: 36px;
    height: 30px;
    right: 0px;
    top: 0px;
  }

  .bm-burger-bars {
    background: #222;
    border-radius: 4px;
  }

  .bm-burger-bars-hover {
    background: #222;
  }

  .bm-cross {
    background: #222;
  }

  .bm-cross-button {
    height: 36px;
    width: 36px;
    margin-top: 20px;
    margin-right: 10px;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  .bm-menu {
    background: var(--gray-300);
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-item-list {
    color: var(--gray-800);
    padding: 0.8em;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .bm-item {
    height: 50px;
  }

  .menu-item {
    font-size: 1.5rem;
    color: var(--gray-500);
  }

  .menu-logo {
    margin-top: 0;
    font-size: 2.5rem;

    span {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }
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
