import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  padding: 1rem 0;
  background: var(--shape);
  justify-content: space-between;
  height: 4rem;

  > div {
    padding: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    max-width: 1180px;
    margin: 0 auto;
    width: 100%;

    nav {
      display: flex;
      align-items: center;
      gap: 1rem;

      a {
        color: var(--title);
        font-weight: bold;
        transition: all 0.2s;

        &.active {
          color: var(--primary);
        }

        &:hover {
          filter: brightness(0.8);
          color: var(--primary);
        }
      }
    }

    svg {
      color: var(--primary);
      transition: all 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  img {
    width: 100px;
  }
`
