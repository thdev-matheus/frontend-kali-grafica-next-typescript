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
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 2rem 0 2rem 10%;

    text-align: center;

    & > h3 {
      font-size: 22pt;

      color: ${(props) => props.theme.primary};
    }

    & > p {
      font-size: 12pt;
    }
  }
`;

export const BoxRigth = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 40%;

    overflow: hidden;

    & > img {
      height: 100%;
    }
  }
`;
