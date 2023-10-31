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

    .print_shop_box_animated {
      & > div {
        display: flex;
        justify-content: center;
      }
    }

    .print_shop_image {
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

  .print_shop_title {
    margin-bottom: 0.5rem;

    font-size: 18pt;

    color: ${(props) => props.theme.secondary};
  }

  .print_shop_list {
    list-style: none;

    font-size: 12pt;
    font-style: italic;
  }

  .print_shop_paragraph {
    font-size: 12pt;
  }

  @media (min-width: 768px) {
    width: 60%;

    .print_shop_title {
      font-size: 16pt;
    }

    .print_shop_list {
      font-size: 10pt;
    }

    .print_shop_paragraph {
      font-size: 10pt;
    }
  }

  @media (min-width: 992px) {
    padding: 1rem;

    .print_shop_title {
      font-size: 18pt;
    }

    .print_shop_list {
      font-size: 12pt;
    }

    .print_shop_paragraph {
      font-size: 12pt;
    }
  }

  @media (min-width: 1200px) {
    padding: 1rem 2rem;

    .print_shop_title {
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

  .print_shop_box_animated {
    & > div {
      display: flex;
      justify-content: center;
    }
  }

  .print_shop_image {
    width: 15rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
