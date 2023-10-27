"use client";

import * as S from "./styles";
import * as C from "@/components";

export const MissionValuesBlock = () => {
  return (
    <S.Container>
      <S.Box>
        <S.BoxImg>
          <img
            src="https://i.ibb.co/9N41Fw4/mission-values.png"
            alt="mission_values"
          />
        </S.BoxImg>

        <S.BoxText>
          <h3>Nossos Valores</h3>

          <p>
            <span>Cristo no centro: </span> Somos uma empresa cristã e como tal,
            buscamos em nosso Senhor Jesus Cristo todas as bases éticas para
            trabalharmos.
          </p>

          <p>
            <span>Compromisso com a excelência: </span> Nosso compromisso com a
            qualidade é refletido em todos os nossos serviços e produtos, desde
            a criação de artes e logomarcas, até o desenvolvimento de sites e
            cursos de formação.
          </p>

          <p>
            <span>Atendimento ao cliente inigualável: </span> Colocamos nossos
            clientes como prioridade, ouvindo suas necessidades e trabalhando em
            estreita colaboração para garantir sua satisfação.
          </p>
        </S.BoxText>
      </S.Box>

      <S.Box>
        <S.BoxText>
          <p>
            <span>Empoderamento Pessoal: </span>Acreditamos no poder da educação
            e do desenvolvimento pessoal, capacitando indivíduos com habilidades
            que os impulsionam em suas vidas e carreiras.
          </p>

          <p>
            <span>Responsabilidade Social: </span>Buscamos ser uma força
            positiva na comunidade, apoiando causas sociais e contribuindo para
            o bem-estar das pessoas.
          </p>

          <p>
            <span>Parcerias de Sucesso: </span>Construímos parcerias de sucesso
            com nossos clientes, colaboradores e fornecedores, buscando relações
            de longo prazo baseadas na conﬁança e no mútuo benefício.
          </p>
        </S.BoxText>

        <S.BoxText>
          <p>
            <span>Inovação Contínua: </span>Mantemo-nos atualizados com as
            últimas tendências e tecnologias em design gráﬁco, desenvolvimento
            web e educação, permitindo-nos oferecer soluções sempre atualizadas.
          </p>

          <p>
            <span>Ética e Transparência: </span>Operamos com integridade e
            transparência em todas as interações, mantendo altos padrões éticos
            em nosso trabalho e relacionamentos comerciais.
          </p>

          <C.LinkButton href="#" label="Saiba mais" title="Saiba mais" />
        </S.BoxText>
      </S.Box>
    </S.Container>
  );
};
