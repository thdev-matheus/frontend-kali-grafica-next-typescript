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
    align-items: center;
    justify-content: center;
    gap: 2rem;

    padding: 2rem 10%;

    & > h2 {
      font-size: 18pt;
      text-align: center;

      color: ${(props) => props.theme.secondary};
    }
  }

  @media (min-width: 1200px) {
    & > h2 {
      font-size: 22pt;
    }
  }
`;

export const BoxCards = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    padding: 2rem;
  }
`;
