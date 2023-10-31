"use client";

import * as S from "./styles";
import { footerBlockCoontroller } from "@/controllers";

import { v4 as uuid } from "uuid";

export const FooterBlock = () => {
  const { info, logo, hours } = footerBlockCoontroller;

  return (
    <S.Container>
      <div className="line" />

      <div className="content">
        <S.BoxContact>
          <h3>{info.title}</h3>

          <small>{info.address}</small>
          <p className="diff">{info.phone}</p>
          <p>{info.email}</p>
          <p className="diff">{info.instagram}</p>

          <S.BoxIcons>
            {info.icons.map(({ Icon, color, href, title }) => (
              <a href={href} target="_blank" key={uuid()} title={title}>
                <Icon color={color} />
              </a>
            ))}
          </S.BoxIcons>
        </S.BoxContact>

        <S.BoxLogo>
          <img src={logo.src} alt={logo.src} />
        </S.BoxLogo>

        <S.BoxInfo>
          {hours.map((item, index) => (
            <p className={index % 2 == 0 ? "primary" : ""} key={uuid()}>
              {item}
            </p>
          ))}
        </S.BoxInfo>
      </div>
    </S.Container>
  );
};
