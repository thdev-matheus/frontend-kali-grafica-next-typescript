import styled from "styled-components";

interface IContainerProps {
  width: "fit-content" | "100%";
}

export const Container = styled.div<IContainerProps>`
  width: ${(props) => props.width};

  position: relative;

  overflow: hidden;
`;
