import styled from "styled-components"

export const Pagination = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Pages = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: var(--text);

    span {
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.2s ease-in-out;

      font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 0.8125rem;
      line-height: 1.9em;
      margin: 1rem;

      @media (max-width: 576px) {
        &.next,
        &.previous {
          display: none;
        }
      }

      &:after {
        border-left: 6px solid #999;
        margin-left: 0.625rem;
      }
    }
  }

  .page {
    background-color: var(--shape);
    justify-content: center;
    color: var(--title);
    width: 2.5rem;
    height: 2.5rem;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;

    &.active {
      background-color: var(--primary);
    }

    &:hover {
      filter: brightness(1);
      background: var(--primary);
    }
  }
`
