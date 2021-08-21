import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--shape);
  max-width: 100%;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    .wrapper {
      img {
        transform: scale(1.1);
      }
    }
  }

  .info {
    padding: 1rem;
    height: 7rem;

    h2 {
      font-size: 1rem;
      color: var(--title);
    }

    h3 {
      font-size: 0.8rem;
      color: var(--subtitle);
    }
  }

  &:after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: var(--background);
    border-style: solid;
    border-top-color: transparent;
    border-width: 12px 12px 0 0;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    top: auto;
    z-index: 40;
  }
`

export const Thumb = styled.div`
  margin: 0;
  overflow: hidden;
  padding: 0;

  background: #121214;
  background-image: linear-gradient(
    to right,
    #121214 0%,
    #171719 20%,
    #121214 40%,
    #121214 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }

  .wrapper {
    height: 210px;
    position: relative;
    overflow: hidden;

    img {
      object-fit: cover;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      object-position: top center;
    }
  }
`
