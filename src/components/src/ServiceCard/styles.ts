import styled from "styled-components";

export const Container = styled.section`
  width: 9.5rem;
  height: 12.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem;

  border: 2px solid ${(props) => props.theme.borderPrimary};
  border-radius: 1rem;

  background-color: ${(props) => props.theme.bgPrimary};

  transition: 1.2s ease;

  & > svg {
    width: 5rem;
    height: 5rem;

    transition: 1.2s ease;
  }

  & > h3 {
    text-align: center;
    font-size: 13pt;

    color: ${(props) => props.theme.txtPrimary};

    transition: 1.2s ease;
  }

  &:hover {
    transform: scale(1.1) rotate(10deg);

    border-color: ${(props) => props.theme.primary};

    & > svg,
    h3 {
      color: ${(props) => props.theme.primary};
    }
  }
`;
