"use client";

import * as S from "./styles";

export const WelcomeBlock = () => {
  return (
    <S.Container>
      <S.BoxLeft>
        <img
          src="https://i.ibb.co/mGP3gjd/ripped-paper.png"
          alt="kali_ripped_paper"
        />
      </S.BoxLeft>

      <S.BoxRight>
        <h1>Bem-vindos a Kali Gráfica!</h1>

        <p>
          A Kali é a realização de três sonhos que estão vivos há mais de cinco
          anos esperando para serem colocados em prática.
        </p>

        <p>
          Apaixonado por tecnologia, ensino e por criar produtos gráficos que
          atendam as necessidades das pessoas, busquei unir meus conhecimentos e
          criar este projeto que, com muito esforço e ajuda de Deus se tornou
          realidade.
        </p>
      </S.BoxRight>
    </S.Container>
  );
};
