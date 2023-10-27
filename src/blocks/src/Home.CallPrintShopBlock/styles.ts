import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 5%;

  background-color: ${(props) => props.theme.bgSecondary};

  @media (min-width: 992px) {
    padding: 2rem 10%;
  }
`;

export const BoxLeft = styled.section`
  display: none;

  @media (min-width: 768px) {
    width: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > img {
      width: 80%;
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

  text-align: center;

  & > h3 {
    margin-bottom: 0.5rem;

    font-size: 18pt;

    color: ${(props) => props.theme.secondary};
  }

  & > ul {
    list-style: none;

    font-size: 12pt;
    font-style: italic;
  }

  & > p {
    font-size: 12pt;
  }

  @media (min-width: 768px) {
    width: 60%;

    & > h3 {
      font-size: 16pt;
    }

    & > ul {
      font-size: 10pt;
    }

    & > p {
      font-size: 10pt;
    }
  }

  @media (min-width: 992px) {
    padding: 1rem;

    & > h3 {
      font-size: 18pt;
    }

    & > ul {
      font-size: 12pt;
    }

    & > p {
      font-size: 12pt;
    }
  }

  @media (min-width: 1200px) {
    padding: 1rem 2rem;

    & > h3 {
      font-size: 22pt;
    }
  }
`;

export const BoxMobile = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin: 2rem 0;

  & > img {
    width: 15rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
