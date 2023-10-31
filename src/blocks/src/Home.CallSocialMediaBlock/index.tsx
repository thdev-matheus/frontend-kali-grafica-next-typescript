"use client";

import * as S from "./styles";
import * as C from "@/components";
import { callSocialMediaBlockController } from "@/controllers";

import { v4 as uuid } from "uuid";

export const CallSocialMediaBlock = () => {
  const { title, content, image } = callSocialMediaBlockController;

  const imgVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const imgTransition = {
    duration: 0.5,
    delay: 0.25,
    ease: "easeIn",
  };

  return (
    <S.Container>
      <S.BoxLeft>
        <C.Animated width="100%">
          <h3 className="social_media_title">{title}</h3>
        </C.Animated>

        {content.map((paragraph) => (
          <C.Animated width="100%" key={uuid()}>
            <p className="social_media_paragraph">{paragraph}</p>
          </C.Animated>
        ))}
      </S.BoxLeft>

      <S.BoxRigth>
        <C.Animated
          width="100%"
          identifierClass="social_media_box_animated"
          customTransition={imgTransition}
          customVariants={imgVariants}
        >
          <img src={image.src} alt={image.alt} className="social_media_image" />
        </C.Animated>
      </S.BoxRigth>
    </S.Container>
  );
};
