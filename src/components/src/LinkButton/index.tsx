"use client";

import * as S from "./styles";

interface ILinkButtonProps {
  href: string;
  title: string;
  label: string;
  secondary?: boolean;
  animationName?: "bounce" | "shake" | "fadeinout";
}

export const LinkButton = ({
  href,
  label,
  title,
  secondary = false,
  animationName = "bounce",
}: ILinkButtonProps) => {
  return (
    <S.Container
      href={href}
      target="_blank"
      title={title}
      secondary={secondary}
      animationName={animationName}
    >
      {label}
    </S.Container>
  );
};
