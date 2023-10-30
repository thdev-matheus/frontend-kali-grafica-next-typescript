import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 7%;

  text-align: center;

  background-color: ${(props) => props.theme.dark};
`;
