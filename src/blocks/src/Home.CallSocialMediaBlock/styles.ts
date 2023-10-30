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

  .social_media_title {
    font-size: 18pt;

    color: ${(props) => props.theme.primary};
  }

  .social_media_paragraph {
    font-size: 12pt;
  }

  @media (min-width: 481px) {
    .social_media_title {
      font-size: 22pt;
    }
  }

  @media (min-width: 992px) {
    width: 60%;

    padding: 2rem 0 2rem 10%;

    .social_media_title {
      font-size: 18pt;
    }

    .social_media_paragraph {
      font-size: 10pt;
    }
  }

  @media (min-width: 1200px) {
    .social_media_title {
      font-size: 22pt;
    }

    .social_media_paragraph {
      font-size: 12pt;
    }
  }
`;

export const BoxRigth = styled.section`
  display: none;

  @media (min-width: 992px) {
    width: 40%;
    height: 100%;

    display: block;

    overflow: hidden;

    .social_media_box_animated {
      height: 100%;

      & > div {
        height: 100%;

        display: flex;
        justify-content: center;
      }
    }

    .social_media_image {
      width: 100%;
    }
  }
`;
