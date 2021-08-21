import styled from "styled-components"

export const Footer = styled.footer`
  height: 5rem;
  background: black;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--subtitle);

    padding: 1rem 0;
    max-width: 1180px;
    margin: 0 auto;

    a {
      font-weight: bold;
      filter: brightness(1.2);
      color: var(--subtitle);
    }
  }
`
