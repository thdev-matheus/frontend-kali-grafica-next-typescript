import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const BoxLeft = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem 10%;

  text-align: center;

  & > h3 {
    font-size: 18pt;

    color: ${(props) => props.theme.primary};
  }

  & > p {
    font-size: 12pt;
  }

  @media (min-width: 481px) {
    & > h3 {
      font-size: 22pt;
    }
  }

  @media (min-width: 992px) {
    width: 60%;

    padding: 2rem 0 2rem 10%;

    & > h3 {
      font-size: 18pt;
    }

    & > p {
      font-size: 10pt;
    }
  }

  @media (min-width: 1200px) {
    & > h3 {
      font-size: 22pt;
    }

    & > p {
      font-size: 12pt;
    }
  }
`;

export const BoxRigth = styled.section`
  display: none;

  @media (min-width: 992px) {
    width: 40%;

    display: block;

    overflow: hidden;

    & > img {
      height: 100%;
    }
  }
`;
