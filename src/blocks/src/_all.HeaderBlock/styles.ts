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
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.7rem 0;

    background-color: ${(props) => props.theme.bgSecondary};

    & > img {
      height: 100%;
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxColors = styled.div`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100%;
    height: 0.3rem;

    display: flex;

    & > .cyan {
      height: 100%;

      flex: 1;

      background-color: cyan;
    }

    & > .magenta {
      height: 100%;

      flex: 1;

      background-color: magenta;
    }

    & > .yellow {
      height: 100%;

      flex: 1;

      background-color: yellow;
    }

    & > .black {
      height: 100%;

      flex: 3;

      background-color: #000000;
    }
  }

  @media (min-width: 1920px) {
  }
`;
