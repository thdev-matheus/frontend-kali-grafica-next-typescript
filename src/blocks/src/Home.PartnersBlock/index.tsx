"use client";

import { useEffect, useRef } from "react";
import * as S from "./styles";
import * as C from "@/components";
import { useAnimation, useInView, motion } from "framer-motion";
import { v4 as uuid } from "uuid";

const partners = [
  {
    src: "https://i.ibb.co/XCCgXw6/copyatec.png",
    alt: "copyatec_logo",
    title: "Copyatec Caruaru",
  },
  {
    src: "https://i.ibb.co/fH3ThKj/ebc-artes.png",
    alt: "ebc_artes",
    title: "EBC Artes",
  },
  {
    src: "https://i.ibb.co/6WvGjQg/segunda-casa.png",
    alt: "segunda_casa_logo",
    title: "Segunda Casa",
  },
  {
    src: "https://i.ibb.co/bXBw4FN/jb-condimentos.png",
    alt: "jb_condimentos_logo",
    title: "JB Condimentos",
  },
  {
    src: "https://i.ibb.co/QYpK6DN/vip-outlet.png",
    alt: "vip_outlet_logo",
    title: "VIP Outlet",
  },
  {
    src: "https://i.ibb.co/SySPcDF/js-coisas-e-tal.png",
    alt: "js_coisas_e_tal",
    title: "JS Coisas e Tal",
  },
  {
    src: "https://i.ibb.co/k6FXS84/grupo-ll.png",
    alt: "grupo_ll_logo",
    title: "Grupo LL",
  },
  {
    src: "https://i.ibb.co/Lgth2Bw/nosso-condimentos.png",
    alt: "nosso_condimentos_logo",
    title: "Nosso Condimentos",
  },
];

export const PartnersBlock = () => {
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
