"use client";

import * as S from "./styles";
import * as C from "@/components";
import { callPrintShopBlockController } from "@/controllers";

import { v4 as uuid } from "uuid";

export const CallPrintShopBlock = () => {
  const { image, action, title, content } = callPrintShopBlockController;

  const imgVariants = {
    hidden: { opacity: 0, x: -200 },
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
        <C.Animated
          identifierClass="print_shop_box_animated"
          width="100%"
          customVariants={imgVariants}
          customTransition={imgTransition}
        >
          <img src={image.src} alt={image.alt} className="print_shop_image" />
        </C.Animated>
        <C.LinkButton
          href={action.href}
          label={action.label}
          title={action.title}
        />
      </S.BoxLeft>

      <S.BoxRight>
        <C.Animated width="100%" withSlide slideSecondary>
          <h3 className="print_shop_title">{title}</h3>
        </C.Animated>

        {content.map((item) => {
          if (typeof item === "string") {
            return (
              <C.Animated width="100%" key={uuid()}>
                <p className="print_shop_paragraph">{item}</p>
              </C.Animated>
            );
          } else {
            return (
              <>
                <ul className="print_shop_list" key={uuid()}>
                  {item.map((listItem) => (
                    <C.Animated width="100%">
                      <li>{listItem}</li>
                    </C.Animated>
                  ))}
                </ul>

                <S.BoxMobile>
                  <C.Animated
                    identifierClass="print_shop_box_animated"
                    width="100%"
                    customVariants={imgVariants}
                    customTransition={imgTransition}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="print_shop_image"
                    />
                  </C.Animated>

                  <C.LinkButton
                    href={action.href}
                    label={action.label}
                    title={action.title}
                  />
                </S.BoxMobile>
              </>
            );
          }
        })}
      </S.BoxRight>
    </S.Container>
  );
};
