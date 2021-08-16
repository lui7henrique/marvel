import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Pages = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
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
    width: 2rem;
    height: 2rem;
    transition: all 0.2s ease-in-out;

    &.active {
      background-color: var(--primary);
    }

    &:hover {
      background: var(--primary);
    }
  }
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
  max-width: 100%;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: var(--primary);
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
    &:hover {
      img {
        transform: scale(1.1);
      }
    }

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
