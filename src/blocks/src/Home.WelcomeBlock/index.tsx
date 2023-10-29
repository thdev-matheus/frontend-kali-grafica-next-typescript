"use client";

import * as S from "./styles";
import * as C from "@/components";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const WelcomeBlock = () => {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true });

  const imgControl = useAnimation();

  const imgVariants = {
    hidden: { rotate: 90 },
    visible: { rotate: 0 },
  };

  const imgTransition = {
    duration: 0.5,
    delay: 1,
    ease: "easeInOut",
    type: "spring",
    damping: 10,
    stiffness: 200,
  };

  useEffect(() => {
    if (imgInView) {
      imgControl.start("visible");
    }
  }, [imgInView]);

  return (
    <S.Container>
      <S.BoxLeft>
        <motion.img
          ref={imgRef}
          src="https://i.ibb.co/mGP3gjd/ripped-paper.png"
          alt="kali_ripped_paper"
          variants={imgVariants}
          transition={imgTransition}
          initial="hidden"
          animate={imgControl}
        />
      </S.BoxLeft>

      <S.BoxRight>
        <C.Animated>
          <h1 className="welcome_title">Bem-vindos a Kali Gráfica!</h1>
        </C.Animated>

        <C.Animated customTransition={{ duration: 0.5, delay: 0.4 }}>
          <p className="welcome_paragraph">
            A Kali é a realização de três sonhos que estão vivos há mais de
            cinco anos esperando para serem colocados em prática.
          </p>
        </C.Animated>

        <C.Animated customTransition={{ duration: 0.5, delay: 0.8 }}>
          <p className="welcome_paragraph">
            Apaixonado por tecnologia, ensino e por criar produtos gráficos que
            atendam as necessidades das pessoas, busquei unir meus conhecimentos
            e criar este projeto que, com muito esforço e ajuda de Deus se
            tornou realidade.
          </p>
        </C.Animated>
      </S.BoxRight>
    </S.Container>
  );
};
