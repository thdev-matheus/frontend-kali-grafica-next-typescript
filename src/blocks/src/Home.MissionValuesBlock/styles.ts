import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 2rem 10%;
  }
`;

export const Box = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const BoxImg = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    width: 50%;

    display: flex;
    justify-content: center;

    & > img {
      width: 90%;
    }
  }

  @media (min-width: 1200px) {
    & > img {
      width: 80%;
    }
  }
`;

export const BoxText = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 0 2rem;

    text-align: center;

    & > h3 {
      font-size: 18pt;

      color: ${(props) => props.theme.primary};
    }

    & > p {
      font-size: 12pt;

      & > span {
        font-weight: bold;

        color: ${(props) => props.theme.secondary};
      }
    }

    & > a {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1200px) {
    & > h3 {
      font-size: 22pt;
    }

    & > p {
      font-size: 16pt;
    }

    & > a {
      margin-top: 2rem;
    }
  }
`;
