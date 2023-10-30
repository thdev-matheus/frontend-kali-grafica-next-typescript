"use client";

import { IconType } from "react-icons";
import * as S from "./styles";
import * as C from "@/components";

interface IServiceCardProps {
  icon: IconType;
  label: string;
  delay?: number;
}

export const ServiceCard = ({
  icon: Icon,
  label,
  delay = 0.25,
}: IServiceCardProps) => {
  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const transition = {
    delay,
    type: "spring",
    damping: 10,
    stiffness: 200,
  };

  return (
    <C.Animated
      customTransition={transition}
      customVariants={variants}
      identifierClass="service_card"
    >
      <S.Container title={label}>
        <Icon />
        <h3>{label}</h3>
      </S.Container>
    </C.Animated>
  );
};
