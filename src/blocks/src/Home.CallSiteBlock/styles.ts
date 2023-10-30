import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 5% 2rem;

  @media (min-width: 992px) {
    padding: 0 10% 2rem;
  }
`;

export const BoxLeft = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  .site_title {
    margin-bottom: 0.5rem;

    font-size: 18pt;

    color: ${(props) => props.theme.primary};
  }

  .site_paragraph {
    font-size: 12pt;
  }

  @media (min-width: 768px) {
    width: 60%;

    .site_title {
      font-size: 16pt;
    }

    .site_paragraph {
      font-size: 10pt;
    }
  }

  @media (min-width: 992px) {
    padding: 1rem;

    .site_title {
      font-size: 18pt;
    }

    .site_paragraph {
      font-size: 12pt;
    }
  }

  @media (min-width: 1200px) {
    gap: 2rem;

    padding: 1rem 2rem;

    .site_title {
      font-size: 22pt;
    }

    .site_paragraph {
      font-size: 14pt;
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

  .site_image {
    width: 15rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BoxRight = styled.section`
  display: none;

  @media (min-width: 768px) {
    width: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .site_box_animated {
      & > div {
        display: flex;
        justify-content: center;
      }
    }

    .site_image {
      width: 70%;
    }
  }

  @media (min-width: 992px) {
    .site_image {
      width: 80%;
    }
  }

  @media (min-width: 1200px) {
    .site_image {
      width: 70%;
    }
  }
`;
