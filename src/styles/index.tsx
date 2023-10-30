import { GlobalStyle } from "./global";
import { dark, light } from "./theme";
import { ThemeProvider } from "styled-components";

import { ReactNode } from "react";

interface IStylesProps {
  children: ReactNode;
}

export const Styles = ({ children }: IStylesProps) => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};
