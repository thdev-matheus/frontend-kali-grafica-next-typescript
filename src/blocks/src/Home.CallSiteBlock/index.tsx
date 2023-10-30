"use client";

import * as S from "./styles";
import * as C from "@/components";

export const CallSiteBlock = () => {
  const imgVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const imgTransition = {
    duration: 0.5,
    delay: 0.25,
    ease: "easeIn",
  };

  return (
    <S.Container>
      <S.BoxLeft>
        <C.Animated>
          <h3 className="site_title">Precisando de um site?</h3>
        </C.Animated>

        <C.Animated>
          <p className="site_paragraph">
            Que o mundo gira em torno do digital, todos sabem. O que muitos não
            sabem é que NÃO é impossível adequar o seu negócio ao digital, e há
            diversas formas de se fazer isso.
          </p>
        </C.Animated>

        <C.Animated>
          <p className="site_paragraph">
            Uma forma bem conhecida e aplicada por muitos são as redes sociais
            que estão sendo usadas em peso para divulgação do negócio e
            apresentação de produtos.
          </p>
        </C.Animated>

        <C.Animated>
          <p className="site_paragraph">
            Uma outra forma é a criação do seu site. Sim, isso mesmo, um site só
            seu.
          </p>
        </C.Animated>

        <S.BoxMobile>
          <C.Animated
            width="100%"
            identifierClass="site_box_animated"
            customVariants={imgVariants}
            customTransition={imgTransition}
          >
            <img
              className="site_image"
              src="https://i.ibb.co/YjbH56v/man.png"
              alt="man"
            />
          </C.Animated>
          <C.LinkButton
            href="https://wa.me/558196336588"
            label="Fale com a gente"
            title="Falar com a Kali"
            animationName="fadeinout"
          />
        </S.BoxMobile>

        <C.Animated>
          <p className="site_paragraph">
            Ter um domínio na internet hoje em dia é como a compra de um terreno
            onde construir a sua casa, só que bem mais acessível. Com a criação
            de um site institucional, catálogo, landing page, etc, você garante
            um espaço em que pode oferecer seu produto, contar sua história,
            levar informação as pessoas e muito mais. Tudo isso sem a
            necessidade de ter um espaço físico e pagar certos tipos de taxas
            que normalmente são bastante caras.
          </p>
        </C.Animated>

        <C.Animated>
          <p className="site_paragraph">
            No final das contas, um site, bem planejado e construído vai, de
            maneira mais rápida, levar o seu negócio a ser conhecido.
          </p>
        </C.Animated>

        <C.Animated>
          <p className="site_paragraph">
            Que tal experimentar isso? Fale conosco e veja como é fácil dar o
            start no seu espaço digital.
          </p>
        </C.Animated>
      </S.BoxLeft>

      <S.BoxRight>
        <C.Animated
          width="100%"
          identifierClass="site_box_animated"
          customVariants={imgVariants}
          customTransition={imgTransition}
        >
          <img
            className="site_image"
            src="https://i.ibb.co/YjbH56v/man.png"
            alt="man"
          />
        </C.Animated>
        <C.LinkButton
          href="https://wa.me/558196336588"
          label="Fale com a gente"
          title="Falar com a Kali"
          animationName="fadeinout"
        />
      </S.BoxRight>
    </S.Container>
  );
};
