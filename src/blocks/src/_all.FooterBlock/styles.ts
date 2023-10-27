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
      justify-content: center;
      align-items: flex-start;

      padding: 0 10%;
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxContact = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 45%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

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
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxIcons = styled.div`
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
    gap: 1rem;

    margin-top: 1rem;

    & > svg {
      width: 2rem;
      height: 2rem;

      cursor: pointer;

      transition: 1.2s;

      &:hover {
        transform: scale(1.2) rotate(10deg);
      }
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxLogo = styled.div`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 15%;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    & > img {
      width: 100%;
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxInfo = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    width: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 1rem;

    text-align: center;
    font-weight: bold;

    & > p {
      font-size: 14pt;
    }

    & > .primary {
      color: ${(props) => props.theme.primary};
    }
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 1920px) {
  }
`;
