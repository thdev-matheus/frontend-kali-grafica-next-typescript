"use client";

import * as S from "./styles";
import { FaInstagram, FaWhatsapp, FaMapLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export const FooterBlock = () => {
  return (
    <S.Container>
      <div className="line" />

      <div className="content">
        <S.BoxContact>
          <h3>Contato</h3>

          <small>
            Via local VI, Cond. Villa das Seringueiras, bloco 5 apto 401,
            Jaboatão dos Guararapes/PE
          </small>
          <p className="diff">(81) 9 9633-6588</p>
          <p>matheusth.arte@gmail.com</p>
          <p className="diff">@_kaligrafica</p>

          <S.BoxIcons>
            <FaInstagram color="magenta" />
            <FaWhatsapp color="green" />
            <FiMail color="red" />
            <FaMapLocationDot color="orange" />
          </S.BoxIcons>
        </S.BoxContact>

        <S.BoxLogo>
          <img src="https://i.ibb.co/P9jf7x7/kali-img-typo.png" alt="logo" />
        </S.BoxLogo>

        <S.BoxInfo>
          <p>Aberto de</p>
          <p className="primary">segunda a sexta</p>
          <p>8h ~ 12h | 13h ~ 17h</p>
          <p className="primary">e sábado</p>
          <p>8h ~ 13h</p>
        </S.BoxInfo>
      </div>
    </S.Container>
  );
};
