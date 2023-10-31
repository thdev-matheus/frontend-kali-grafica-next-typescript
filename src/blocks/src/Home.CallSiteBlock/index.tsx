"use client";

import * as S from "./styles";
import * as C from "@/components";
import { callSiteBlockController } from "@/controllers";

import { v4 as uuid } from "uuid";

export const CallSiteBlock = () => {
  const { title, content, image, action } = callSiteBlockController;

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
        <C.Animated>
          <h3 className="site_title">{title}</h3>
        </C.Animated>

        {content.map((paragraph, index) => {
          if (index == 2) {
            return (
              <>
                <C.Animated key={uuid()}>
                  <p className="site_paragraph">{paragraph}</p>
                </C.Animated>

                <S.BoxMobile key={uuid()}>
                  <C.Animated
                    width="100%"
                    identifierClass="site_box_animated"
                    customVariants={imgVariants}
                    customTransition={imgTransition}
                  >
                    <img
                      className="site_image"
                      src={image.src}
                      alt={image.alt}
                    />
                  </C.Animated>
                  <C.LinkButton
                    href={action.href}
                    label={action.label}
                    title={action.title}
                    animationName="fadeinout"
                  />
                </S.BoxMobile>
              </>
            );
          } else {
            return (
              <C.Animated key={uuid()}>
                <p className="site_paragraph">{paragraph}</p>
              </C.Animated>
            );
          }
        })}
      </S.BoxLeft>

      <S.BoxRight>
        <C.Animated
          width="100%"
          identifierClass="site_box_animated"
          customVariants={imgVariants}
          customTransition={imgTransition}
        >
          <img className="site_image" src={image.src} alt={image.alt} />
        </C.Animated>
        <C.LinkButton
          href={action.href}
          label={action.label}
          title={action.title}
          animationName="fadeinout"
        />
      </S.BoxRight>
    </S.Container>
  );
};
