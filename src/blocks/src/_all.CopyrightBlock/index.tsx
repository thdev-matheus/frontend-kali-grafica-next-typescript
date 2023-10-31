"use client";

import * as S from "./styles";
import { copyrightBlockController } from "@/controllers";

export const CopyrightBlock = () => {
  const { info } = copyrightBlockController;
  return (
    <S.Container>
      <small>{info}</small>
    </S.Container>
  );
};
