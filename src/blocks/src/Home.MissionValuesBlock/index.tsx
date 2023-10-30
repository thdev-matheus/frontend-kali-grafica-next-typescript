"use client";

import * as S from "./styles";
import * as C from "@/components";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export const MissionValuesBlock = () => {
  const imgRef = useRef(null);
  const imgIsInView = useInView(imgRef, { once: true });

  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: -200, rotate: -90 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  };

  const transition = { duration: 0.8, delay: 0.25 };

  useEffect(() => {
    if (imgIsInView) {
      mainControls.start("visible");
    }
  }, [imgIsInView]);

  return (
    <S.Container>
      <S.Box>
        <S.BoxImg ref={imgRef}>
          <C.Animated
            identifierClass="mission_image_box"
            customVariants={variants}
            customTransition={transition}
            width="100%"
          >
            <img
              className="mission_image"
              src="https://i.ibb.co/9N41Fw4/mission-values.png"
              alt="mission_values"
            />
          </C.Animated>
        </S.BoxImg>

        <S.BoxText>
          <C.Animated withSlide>
            <h3 className="mission_title">Nossos Valores</h3>
          </C.Animated>

          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Cristo no centro: </span> Somos uma empresa cristã e como
              tal, buscamos em nosso Senhor Jesus Cristo todas as bases éticas
              para trabalharmos.
            </p>
          </C.Animated>

          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Compromisso com a excelência: </span> Nosso compromisso com
              a qualidade é refletido em todos os nossos serviços e produtos,
              desde a criação de artes e logomarcas, até o desenvolvimento de
              sites e cursos de formação.
            </p>
          </C.Animated>

          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Atendimento ao cliente inigualável: </span> Colocamos nossos
              clientes como prioridade, ouvindo suas necessidades e trabalhando
              em estreita colaboração para garantir sua satisfação.
            </p>
          </C.Animated>
        </S.BoxText>
      </S.Box>

      <S.Box>
        <S.BoxText>
          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Empoderamento Pessoal: </span>Acreditamos no poder da
              educação e do desenvolvimento pessoal, capacitando indivíduos com
              habilidades que os impulsionam em suas vidas e carreiras.
            </p>
          </C.Animated>

          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Responsabilidade Social: </span>Buscamos ser uma força
              positiva na comunidade, apoiando causas sociais e contribuindo
              para o bem-estar das pessoas.
            </p>
          </C.Animated>

          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Parcerias de Sucesso: </span>Construímos parcerias de
              sucesso com nossos clientes, colaboradores e fornecedores,
              buscando relações de longo prazo baseadas na conﬁança e no mútuo
              benefício.
            </p>
          </C.Animated>
        </S.BoxText>

        <S.BoxText>
          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Inovação Contínua: </span>Mantemo-nos atualizados com as
              últimas tendências e tecnologias em design gráﬁco, desenvolvimento
              web e educação, permitindo-nos oferecer soluções sempre
              atualizadas.
            </p>
          </C.Animated>

          <C.Animated withSlide>
            <p className="mission_paragraph">
              <span>Ética e Transparência: </span>Operamos com integridade e
              transparência em todas as interações, mantendo altos padrões
              éticos em nosso trabalho e relacionamentos comerciais.
            </p>
          </C.Animated>

          <C.LinkButton
            href="https://wa.me/558196336588"
            label="Saiba mais"
            title="Saiba mais"
          />
        </S.BoxText>
      </S.Box>
    </S.Container>
  );
};
