import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 2rem 3%;

  & > h2 {
    font-size: 16pt;
    text-align: center;

    color: ${(props) => props.theme.secondary};
  }

  @media (min-width: 992px) {
    & > h2 {
      font-size: 18pt;
    }
  }

  @media (min-width: 1200px) {
    & > h2 {
      font-size: 22pt;
    }
  }
`;

export const BoxCards = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  @media (min-width: 992px) {
    justify-content: space-around;
    gap: 0.5rem;

    padding: 2rem;
  }
`;
