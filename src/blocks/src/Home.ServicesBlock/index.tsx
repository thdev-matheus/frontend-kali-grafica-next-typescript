"use client";

import * as S from "./styles";
import * as C from "@/components";

import {
  FaCode,
  FaGraduationCap,
  FaInstagram,
  FaPenNib,
} from "react-icons/fa6";

export const ServicesBlock = () => {
  return (
    <S.Container>
      <h2>
        Confira abaixo as nossas especialidades e conheça alguns dos principais
        serviços que dispomos
      </h2>

      <S.BoxCards>
        <C.ServiceCard icon={FaPenNib} label="Gráfica Expressa" />
        <C.ServiceCard icon={FaCode} label="Criação de Sites e Aplicativos" />
        <C.ServiceCard icon={FaGraduationCap} label="Cursos e Palestras" />
        <C.ServiceCard
          icon={FaInstagram}
          label="Gerenciamento de Redes Sociais"
        />
      </S.BoxCards>

      <C.LinkButton
        label="Solicite o seu serviço"
        href="#"
        title="Solicitar serviço"
      />
    </S.Container>
  );
};
