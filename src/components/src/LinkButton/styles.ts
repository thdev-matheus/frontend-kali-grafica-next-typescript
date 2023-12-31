import styled from "styled-components";

interface IContainerProps {
  secondary?: boolean;
  animationName?: "bounce" | "shake" | "fadeinout";
}

export const Container = styled.a<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 2rem;

  border-radius: 1.5rem;

  font-weight: bold;
  font-size: 12pt;
  white-space: nowrap;

  color: ${(props) => props.theme.txtPrimary};
  background-color: ${(props) =>
    props.secondary ? props.theme.secondary : props.theme.primary};

  animation-name: ${(props) => props.animationName};
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;
