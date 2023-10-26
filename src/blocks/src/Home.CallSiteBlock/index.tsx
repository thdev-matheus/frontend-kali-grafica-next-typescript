"use client";

import * as S from "./styles";
import * as C from "@/components";

export const CallSiteBlock = () => {
  return (
    <S.Container>
      <S.BoxLeft>
        <h3>Precisando de um site?</h3>

        <p>
          Que o mundo gira em torno do digital, todos sabem. O que muitos não
          sabem é que NÃO é impossível adequar o seu negócio ao digital, e há
          diversas formas de se fazer isso.
        </p>

        <p>
          Uma forma bem conhecida e aplicada por muitos são as redes sociais que
          estão sendo usadas em peso para divulgação do negócio e apresentação
          de produtos.
        </p>

        <p>
          Uma outra forma é a criação do seu site. Sim, isso mesmo, um site só
          seu.
        </p>

        <S.BoxMobile>
          <img src="https://i.ibb.co/YjbH56v/man.png" alt="man" />
          <C.LinkButton
            href="#"
            label="Fale com a gente"
            title="Falar com a Kali"
            animationName="fadeinout"
          />
        </S.BoxMobile>

        <p>
          Ter um domínio na internet hoje em dia é como a compra de um terreno
          onde construir a sua casa, só que bem mais acessível. Com a criação de
          um site institucional, catálogo, landing page, etc, você garante um
          espaço em que pode oferecer seu produto, contar sua história, levar
          informação as pessoas e muito mais. Tudo isso sem a necessidade de ter
          um espaço físico e pagar certos tipos de taxas que normalmente são
          bastante caras.
        </p>

        <p>
          No final das contas, um site, bem planejado e construído vai, de
          maneira mais rápida, levar o seu negócio a ser conhecido.
        </p>

        <p>
          Que tal experimentar isso? Fale conosco e veja como é fácil dar o
          start no seu espaço digital.
        </p>
      </S.BoxLeft>
      <S.BoxRight>
        <img src="https://i.ibb.co/YjbH56v/man.png" alt="man" />
        <C.LinkButton
          href="#"
          label="Fale com a gente"
          title="Falar com a Kali"
          animationName="fadeinout"
        />
      </S.BoxRight>
    </S.Container>
  );
};
