import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Header = styled.div`
  display: flex;
`

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--shape);

  img {
    border-radius: 5px;
  }
`
