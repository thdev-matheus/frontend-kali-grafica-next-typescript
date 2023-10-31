"use client";

import * as S from "./styles";
import * as C from "@/components";
import { partnersBlockController } from "@/controllers";

import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { v4 as uuid } from "uuid";

export const PartnersBlock = () => {
  const { title, partners } = partnersBlockController;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerControl = useAnimation();
  const imgControl = useAnimation();

  const transition = (delay: number) => ({
    duration: 0.5,
    delay,
    type: "spring",
    damping: 10,
    stiffness: 200,
  });

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  useEffect(() => {
    if (isInView) {
      containerControl.start("visible");
      imgControl.start("visible");
    }
  }, [isInView]);
  return (
    <S.Container
      ref={ref}
      variants={variants}
      transition={transition(0.25)}
      initial="hidden"
      animate={containerControl}
    >
      <C.Animated customTransition={{ duration: 0.5, delay: 0.5 }}>
        <h3 className="partners_title">
          Estes são alguns parceiros que confiam no nosso trabalho
        </h3>
      </C.Animated>

      <S.BoxImg>
        {partners.map((partner, index) => {
          const delay = 1 + (index + 1) * 0.25;
          return (
            <motion.img
              key={uuid()}
              src={partner.src}
              alt={partner.alt}
              title={partner.title}
              variants={variants}
              transition={transition(delay)}
              initial="hidden"
              animate={imgControl}
            />
          );
        })}
      </S.BoxImg>
    </S.Container>
  );
};
