"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import * as S from "./styles";

interface IAnimatedProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  customVariants?: { hidden: object; visible: object };
  customTransition?: object;
  withSlide?: boolean;
  slideSecondary?: boolean;
}

export const Animated = ({
  children,
  customVariants,
  customTransition,
  width = "fit-content",
  withSlide = false,
  slideSecondary = false,
}: IAnimatedProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = customVariants || {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = customTransition || {
    duration: 0.5,
    delay: 0.25,
  };

  const mainControls = useAnimation();

  const slideVariants = {
    hidden: { left: 0 },
    visible: { left: "100%" },
  };

  const slideTransition = { duration: 0.5, ease: "easeIn" };

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <S.Container width={width} ref={ref}>
      <motion.div
        variants={variants}
        initial={variants.hidden}
        animate={mainControls}
        transition={transition}
      >
        {children}
      </motion.div>

      {withSlide && (
        <motion.div
          variants={slideVariants}
          transition={slideTransition}
          initial="hidden"
          animate={slideControls}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: slideSecondary ? "#BB582A75" : "#4BA15175",
            zIndex: 20,
          }}
        />
      )}
    </S.Container>
  );
};