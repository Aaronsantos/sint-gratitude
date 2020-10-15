import styled, { keyframes } from 'styled-components';

const imgLoop = keyframes`
  0% {
    transform: rotate(10deg)
  }

  100% {
    transform: rotate(22deg)
  }
`;

export const Container = styled.main`
  max-width: 920px;
  margin: 40px auto;

  @media (max-width: 800px) {
    width: 100% - 32px;
    margin: 40px 16px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  span {
    p:first-child {
      font-size: 80px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding-right: 8px;
      padding-left: 4px;
      line-height: 1em;
      margin: 0;
      font-family: 'Crimson Text', serif;
    }
    p:last-child {
      font-size: 28px;
      font-family: 'Crimson Text', serif;
      line-height: 1em;
    }
  }

  @media (max-width: 800px) {
    height: auto;
    justify-content: left;
    span {
      width: 80%;
      p:first-child {
        font-size: 40px;
      }
      p:last-child {
        font-size: 24px;
      }
    }

    img {
      position: relative;
      top: 0;
      right: 40px;
      width: 50vw;
      z-index: 0;
    }
  }
  img {
    width: 40vh;
    mix-blend-mode: multiply;
    transform: rotate(22deg);
    animation: ${imgLoop} 2s infinite alternate-reverse;
  }
`;

export const QuoteSection = styled.section`
  margin: 80px auto;
  @media (max-width: 800px) {
    margin: 80px 16px;
  }
`;

export const ButtonSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
