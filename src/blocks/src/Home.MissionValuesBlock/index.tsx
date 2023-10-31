"use client";

import * as S from "./styles";
import * as C from "@/components";
import { missionValuesBlockController } from "@/controllers";

import { useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const MissionValuesBlock = () => {
  const { image, title, values1, values2, values3, action } =
    missionValuesBlockController;

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
            <img className="mission_image" src={image.src} alt={image.alt} />
          </C.Animated>
        </S.BoxImg>

        <S.BoxText>
          <C.Animated withSlide>
            <h3 className="mission_title">{title}</h3>
          </C.Animated>

          {values1.map((value) => (
            <C.Animated key={uuid()}>
              <p className="mission_paragraph">
                <span>{value.title}</span> {value.description}
              </p>
            </C.Animated>
          ))}
        </S.BoxText>
      </S.Box>

      <S.Box>
        <S.BoxText>
          {values2.map((value) => (
            <C.Animated key={uuid()}>
              <p className="mission_paragraph">
                <span>{value.title}</span>
                {value.description}
              </p>
            </C.Animated>
          ))}
        </S.BoxText>

        <S.BoxText>
          {values3.map((value) => (
            <C.Animated key={uuid()}>
              <p className="mission_paragraph">
                <span>{value.title}</span>
                {value.description}
              </p>
            </C.Animated>
          ))}

          <C.LinkButton
            href={action.href}
            label={action.label}
            title={action.title}
          />
        </S.BoxText>
      </S.Box>
    </S.Container>
  );
};
