"use client";

import { IconType } from "react-icons";
import * as S from "./styles";

interface IServiceCardProps {
  icon: IconType;
  label: string;
}

export const ServiceCard = ({ icon: Icon, label }: IServiceCardProps) => {
  return (
    <S.Container title={label}>
      <Icon />
      <h3>{label}</h3>
    </S.Container>
  );
};
