import styled from "styled-components";

export const HeaderContainer = styled.div`
  top: 0;

  width: 100%;

  padding: 1rem 2rem;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 auto;
  }

  img {
    width: 140px;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: white;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["purple-500"]};
        opacity: 0.8;
      }

      &.active {
        color: ${(props) => props.theme["purple-300"]};
      }
    }
  }
`;
