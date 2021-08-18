import styled from "styled-components"

export const Container = styled.div``

export const Hero = styled.section`
  margin: 0 auto;
  position: relative;
  height: 75vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }

  div {
    max-width: 1180px;
    margin: 0 auto;
    text-justify: justify;
    max-width: 600px;

    h1 {
      font-size: 2rem;
      font-weight: 900;
      font-family: Roboto;

      span {
        color: var(--primary);
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  img {
    padding: 1rem;
    position: absolute;
    right: 0;
    right: -20vw;
    width: 40vw;
    -webkit-filter: drop-shadow(5px 5px 5px black);
    filter: drop-shadow(5px 5px 5px black);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      right: -19vw;
    }
  }
`

export const BannerContainer = styled.div`
  background-image: url(/img/banner.jpg);
  height: 40vh;
  align-items: center;
  display: flex;
`

export const BannerContent = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
`
