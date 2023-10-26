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
    justify-content: center;
    align-items: center;

    padding: 0 10%;
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
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    padding: 1rem 2rem;

    text-align: center;

    & > h3 {
      margin-bottom: 0.5rem;

      font-size: 22pt;

      color: ${(props) => props.theme.primary};
    }

    & > p {
      font-size: 14pt;
    }
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
    width: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > img {
      width: 70%;
    }
  }
`;
