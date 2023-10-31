"use client";

import * as S from "./styles";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { headerBlockController } from "@/controllers";

export const HeaderBlock = () => {
  const { logo } = headerBlockController;

  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true });

  const imgControl = useAnimation();

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const imgTransition = {
    duration: 0.25,
    delay: 0.25,
  };

  const colorControl = useAnimation();

  const colorVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const colorTransition = {
    duration: 0.5,
    ease: "easeIn",
  };

  useEffect(() => {
    if (imgInView) {
      imgControl.start("visible");
      colorControl.start("visible");
    }
  }, [imgInView]);

  return (
    <>
      <S.Container>
        <motion.img
          ref={imgRef}
          variants={imgVariants}
          transition={imgTransition}
          initial="hidden"
          animate={imgControl}
          src={logo.src}
          alt={logo.alt}
        />
      </S.Container>

      <S.BoxColors>
        <motion.div
          className="cyan box"
          variants={colorVariants}
          transition={{ ...colorTransition, delay: 0.25 }}
          initial="hidden"
          animate={colorControl}
        />
        <motion.div
          className="magenta box"
          variants={colorVariants}
          transition={{ ...colorTransition, delay: 0.6 }}
          initial="hidden"
          animate={colorControl}
        />
        <motion.div
          className="yellow box"
          variants={colorVariants}
          transition={{ ...colorTransition, delay: 0.85 }}
          initial="hidden"
          animate={colorControl}
        />
        <motion.div
          className="black box"
          variants={colorVariants}
          transition={{ ...colorTransition, delay: 1.2 }}
          initial="hidden"
          animate={colorControl}
        />
      </S.BoxColors>
    </>
  );
};
