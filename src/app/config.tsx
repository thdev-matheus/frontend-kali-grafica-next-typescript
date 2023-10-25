"use client";

import { Styles } from "@/styles";
import { ReactNode } from "react";

interface IConfigProps {
  children: ReactNode;
}

export const Configuration = ({ children }: IConfigProps) => {
  return (
    <>
      <Styles>{children}</Styles>
    </>
  );
};
