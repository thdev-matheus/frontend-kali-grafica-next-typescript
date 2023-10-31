import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

  background-color: ${(props) => props.theme.bgSecondary};

  & > .line {
    width: 100%;
    height: 2rem;

    background-color: ${(props) => props.theme.bgPrimary};
  }

  & > .content {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 0 10%;
  }

  @media (min-width: 768px) {
    & > .content {
      flex-direction: row;
    }
  }
`;

export const BoxContact = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  order: 3;

  padding: 1rem 2rem;

  text-align: center;

  & > h3 {
    font-size: 18pt;

    color: ${(props) => props.theme.primary};
  }

  & > p {
    font-size: 12pt;
  }

  & > .diff {
    color: ${(props) => props.theme.txtSecondary};
  }

  @media (min-width: 768px) {
    width: 45%;

    order: 1;

    & > h3 {
      font-size: 14pt;
    }

    & > p {
      font-size: 10pt;
    }
  }

  @media (min-width: 992px) {
    & > h3 {
      font-size: 18pt;
    }

    & > p {
      font-size: 12pt;
    }
  }
`;

export const BoxIcons = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;

  margin-top: 0.5rem;

  & > a > svg {
    width: 2rem;
    height: 2rem;

    cursor: pointer;

    transition: 1.2s;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  }

  @media (min-width: 992px) {
    margin-top: 1rem;
  }
`;

export const BoxLogo = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  order: 1;

  & > img {
    width: 40%;
  }

  @media (min-width: 768px) {
    width: 20%;

    order: 2;

    & > img {
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    width: 15%;
  }
`;

export const BoxInfo = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 2;

  padding: 2rem 1rem;

  text-align: center;
  font-weight: bold;

  & > p {
    font-size: 14pt;
  }

  & > .primary {
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 768px) {
    width: 35%;

    order: 3;

    & > p {
      font-size: 10pt;
    }
  }

  @media (min-width: 992px) {
    width: 40%;

    & > p {
      font-size: 14pt;
    }
  }
`;
