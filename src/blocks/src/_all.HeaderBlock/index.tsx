"use client";

import * as S from "./styles";

export const HeaderBlock = () => {
  return (
    <>
      <S.Container>
        <img src="/images/dark_logo_sem_desenho.png" alt="logo" />
      </S.Container>

      <S.BoxColors>
        <div className="cyan" />
        <div className="magenta" />
        <div className="yellow" />
        <div className="black" />
      </S.BoxColors>
    </>
  );
};
