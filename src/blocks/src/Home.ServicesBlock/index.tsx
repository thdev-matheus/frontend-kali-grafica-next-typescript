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
      <C.Animated>
        <h2 className="services_title">
          Confira abaixo as nossas especialidades e conheça alguns dos
          principais serviços que dispomos
        </h2>
      </C.Animated>

      <S.BoxCards>
        <C.ServiceCard icon={FaPenNib} label="Gráfica Expressa" delay={0.25} />
        <C.ServiceCard
          icon={FaCode}
          label="Criação de Sites e Aplicativos"
          delay={0.5}
        />
        <C.ServiceCard
          icon={FaGraduationCap}
          label="Cursos e Palestras"
          delay={0.75}
        />
        <C.ServiceCard
          icon={FaInstagram}
          label="Gerenciamento de Redes Sociais"
          delay={1}
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
