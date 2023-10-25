import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0 10% 0 0;
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxLeft = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 50%;

    & > img {
      width: 100%;
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxRight = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 0 1rem;

    & > h1 {
      margin-bottom: 2rem;

      font-size: 22pt;

      text-align: center;
    }

    & > p {
      font-size: 16pt;

      text-align: center;
    }
  }

  @media (min-width: 1920px) {
  }
`;
