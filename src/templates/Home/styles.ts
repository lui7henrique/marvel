import styled from "styled-components"

export const Container = styled.div``

export const Hero = styled.section`
  margin: 0 auto;
  position: relative;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  text-align: center;
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
    max-width: 800px;

    h2 {
      font-size: 3rem;
      font-weight: 900;
      font-family: Roboto;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      span {
        color: var(--primary);
      }
    }
    h3 {
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
  box-shadow: inset 0 0 100px #000000;
`

export const BannerContent = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;

  h1 {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export const FeaturedCharacters = styled.section`
  display: flex;
  gap: 1rem;
  background: var(--shape);
  padding: 1rem;

  section {
    max-width: 1180px;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--title);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
