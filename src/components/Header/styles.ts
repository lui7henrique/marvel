import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  padding: 1rem 0;
  background: var(--shape);
  justify-content: space-between;
  height: 4rem;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;
    width: 100%;
    padding: 0 0.5rem;

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
    margin-right: 6px;
  }

  section {
    margin-right: 6px;
    color: var(--title);
  }
`
