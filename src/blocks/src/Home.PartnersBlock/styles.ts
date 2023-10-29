import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;
  margin: 3rem 0;

  border-radius: 10rem;

  text-align: center;

  background-color: ${(props) => props.theme.bgSecondary};

  .partners_title {
    font-size: 10pt;
  }

  @media (min-width: 481px) {
    padding: 2rem 3rem;

    .partners_title {
      font-size: 12pt;
    }
  }

  @media (min-width: 768px) {
    width: 80%;

    gap: 2rem;

    padding: 3rem 4rem;

    .partners_title {
      font-size: 16pt;
    }
  }

  @media (min-width: 992px) {
    gap: 3rem;

    padding: 4rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 4rem;
  }
`;

export const BoxImg = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > img {
    height: 1.5rem;
  }

  @media (min-width: 481px) {
    & > img {
      height: 2rem;
    }
  }

  @media (min-width: 768px) {
    gap: 2rem;

    & > img {
      height: 3rem;
    }
  }
`;
