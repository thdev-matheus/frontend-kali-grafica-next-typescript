"use client";

import * as S from "./styles";
import * as C from "@/components";
import { welcomeBlockController } from "@/controllers";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { v4 as uuid } from "uuid";

export const WelcomeBlock = () => {
  const { image, title, content } = welcomeBlockController;

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
          variants={imgVariants}
          transition={imgTransition}
          initial="hidden"
          animate={imgControl}
          src={image.src}
          alt={image.alt}
        />
      </S.BoxLeft>

      <S.BoxRight>
        <C.Animated>
          <h1 className="welcome_title">{title}</h1>
        </C.Animated>

        {content.map((paragraph, index) => {
          const delay = (index + 1) * 0.4;
          return (
            <C.Animated
              key={uuid()}
              customTransition={{ duration: 0.5, delay }}
            >
              <p className="welcome_paragraph">{paragraph}</p>
            </C.Animated>
          );
        })}
      </S.BoxRight>
    </S.Container>
  );
};
