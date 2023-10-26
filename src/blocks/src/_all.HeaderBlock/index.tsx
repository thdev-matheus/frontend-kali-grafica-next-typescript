"use client";

import * as S from "./styles";

export const HeaderBlock = () => {
  return (
    <>
      <S.Container>
        <img src="/images/dark_logo_sem_desenho.png" alt="logo" />
      </S.Container>

      <S.BoxColors>
        <div className="cyan"></div>
        <div className="magenta"></div>
        <div className="yellow"></div>
        <div className="black"></div>
      </S.BoxColors>
    </>
  );
};
