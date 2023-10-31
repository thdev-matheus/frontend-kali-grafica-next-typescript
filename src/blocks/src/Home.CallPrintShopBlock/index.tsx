"use client";

import * as S from "./styles";
import * as C from "@/components";

export const CallPrintShopBlock = () => {
  const imgVariants = {
    hidden: { opacity: 0, x: -200 },
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
        <C.Animated
          identifierClass="print_shop_box_animated"
          width="100%"
          customVariants={imgVariants}
          customTransition={imgTransition}
        >
          <img
            src="https://i.ibb.co/d78Q8pk/printer.png"
            alt="printer"
            className="print_shop_image"
          />
        </C.Animated>
        <C.LinkButton
          href="https://wa.me/558196336588"
          label="Entrar em contato"
          title="Contato Kali"
        />
      </S.BoxLeft>

      <S.BoxRight>
        <C.Animated width="100%" withSlide slideSecondary>
          <h3>Precisando de Serviços Gráficos?</h3>
        </C.Animated>

        <C.Animated width="100%">
          <p>Se o que você precisa é de serviços gráficos, como:</p>
        </C.Animated>

        <ul>
          <C.Animated width="100%" withSlide>
            <li>Impressões em geral</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Adesivos com e sem recorte</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Banners ou faixas de lona</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Criação de artes</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Criação de logomarcas</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Placas de Sinalização</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Camisas para eventos</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Brindes em geral</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Canecas</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Squeezes</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Mouse pad</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Revelação de fotos</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Criação e confecção de álbuns</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Produtos personalizados</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Almofadas</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>Chaveiros</li>
          </C.Animated>

          <C.Animated width="100%" withSlide>
            <li>e muito mais...</li>
          </C.Animated>
        </ul>

        <S.BoxMobile>
          <C.Animated
            identifierClass="print_shop_box_animated"
            width="100%"
            customVariants={imgVariants}
            customTransition={imgTransition}
          >
            <img
              src="https://i.ibb.co/d78Q8pk/printer.png"
              alt="printer"
              className="print_shop_image"
            />
          </C.Animated>

          <C.LinkButton
            href="https://wa.me/558196336588"
            label="Entrar em contato"
            title="Contato Kali"
          />
        </S.BoxMobile>

        <C.Animated width="100%">
          <p>É com a gente também!</p>
        </C.Animated>

        <C.Animated width="100%">
          <p>
            Entre em contato conosco, solicite o catálogo e confira nossos
            serviços de impressão e confecção de brindes e informativos.
          </p>
        </C.Animated>
      </S.BoxRight>
    </S.Container>
  );
};
