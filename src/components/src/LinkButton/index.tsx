"use client";

import * as S from "./styles";

interface ILinkButtonProps {
  href: string;
  title: string;
  label: string;
  secondary?: boolean;
}

export const LinkButton = ({
  href,
  label,
  title,
  secondary = false,
}: ILinkButtonProps) => {
  return (
    <S.Container
      href={href}
      target="_blank"
      title={title}
      secondary={secondary}
    >
      {label}
    </S.Container>
  );
};
