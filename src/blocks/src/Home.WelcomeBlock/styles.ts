import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;

    padding: 0 10% 0 0;
  }
`;

export const BoxLeft = styled.section`
  width: 100%;

  & > img {
    width: 85%;
  }

  @media (min-width: 768px) {
    width: 50%;

    & > img {
      width: 100%;
    }
  }
`;

export const BoxRight = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 2rem;

  & > h1 {
    margin-bottom: 1rem;

    font-size: 16pt;

    text-align: center;

    color: ${(props) => props.theme.primary};
  }

  & > p {
    font-size: 12pt;

    text-align: center;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;

    padding: 0 1rem;
  }

  @media (min-width: 992px) {
    gap: 1rem;

    & > h1 {
      margin-bottom: 2rem;

      font-size: 18pt;
    }
  }

  @media (min-width: 1200px) {
    & > h1 {
      font-size: 22pt;
    }

    & > p {
      font-size: 16pt;
    }
  }
`;
