"use client";

import * as S from "./styles";
import * as C from "@/components";

export const CallPrintShopBlock = () => {
  return (
    <S.Container>
      <S.BoxLeft>
        <img src="https://i.ibb.co/d78Q8pk/printer.png" alt="printer" />
        <C.LinkButton href="#" label="Entrar em contato" title="Contato Kali" />
      </S.BoxLeft>

      <S.BoxRight>
        <h3>Precisando de Serviços Gráficos?</h3>

        <p>Se o que você precisa é de serviços gráficos, como:</p>

        <ul>
          <li>Impressões em geral</li>
          <li>Adesivos com e sem recorte</li>
          <li>Banners ou faixas de lona</li>
          <li>Criação de artes</li>
          <li>Criação de logomarcas</li>
          <li>Placas de Sinalização</li>
          <li>Camisas para eventos</li>
          <li>Brindes em geral</li>
          <li>Canecas</li>
          <li>Squeezes</li>
          <li>Mouse pad</li>
          <li>Revelação de fotos</li>
          <li>Criação e confecção de álbuns</li>
          <li>Produtos personalizados</li>
          <li>Almofadas</li>
          <li>Chaveiros</li>
          <li>e muito mais...</li>
        </ul>

        <S.BoxMobile>
          <img src="https://i.ibb.co/d78Q8pk/printer.png" alt="printer" />
          <C.LinkButton
            href="#"
            label="Entrar em contato"
            title="Contato Kali"
          />
        </S.BoxMobile>

        <p>É com a gente também!</p>

        <p>
          Entre em contato conosco, solicite o catálogo e confira nossos
          serviços de impressão e confecção de brindes e informativos.
        </p>
      </S.BoxRight>
    </S.Container>
  );
};
