import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem 5%;

  @media (min-width: 768px) {
    padding: 2rem 10%;
  }
`;

export const Box = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const BoxImg = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 2rem;

  .mission_image_box {
    overflow: visible;
  }

  .mission_image {
    width: 100%;

    transition: 1.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 481px) {
    .mission_image {
      width: 90%;
    }
  }

  @media (min-width: 768px) {
    width: 50%;

    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    .mission_image {
      width: 80%;
    }
  }
`;

export const BoxText = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  text-align: center;

  .mission_title {
    font-size: 22pt;

    color: ${(props) => props.theme.primary};
  }

  .mission_paragraph {
    font-size: 12pt;

    & > span {
      font-weight: bold;

      color: ${(props) => props.theme.secondary};
    }
  }

  & > a {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    width: 50%;

    padding: 0 2rem;

    .mission_title {
      font-size: 18pt;
    }

    .mission_paragraph {
      font-size: 9pt;
    }

    & > a {
      margin-top: 0;
    }
  }

  @media (min-width: 992px) {
    .mission_paragraph {
      font-size: 12pt;
    }

    & > a {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1200px) {
    .mission_title {
      font-size: 22pt;
    }

    .mission_paragraph {
      font-size: 16pt;
    }

    & > a {
      margin-top: 2rem;
    }
  }
`;
