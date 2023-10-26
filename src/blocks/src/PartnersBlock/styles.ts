import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    padding: 2rem 4rem;
    margin: 5rem 0;

    border-radius: 10rem;

    background-color: ${(props) => props.theme.bgSecondary};

    & > h3 {
      font-size: 16pt;
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxImg = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > img {
      height: 3rem;
    }
  }

  @media (min-width: 1920px) {
  }
`;
