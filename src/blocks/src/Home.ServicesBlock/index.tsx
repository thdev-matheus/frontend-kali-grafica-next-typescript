"use client";

import * as S from "./styles";
import * as C from "@/components";
import { servicesBlockController } from "@/controllers";

import { v4 as uuid } from "uuid";

export const ServicesBlock = () => {
  const { title, services, action } = servicesBlockController;
  return (
    <S.Container>
      <C.Animated>
        <h2 className="services_title">{title}</h2>
      </C.Animated>

      <S.BoxCards>
        {services.map((service, index) => {
          const delay = (index + 1) * 0.25;
          return (
            <C.ServiceCard
              icon={service.icon}
              label={service.label}
              delay={delay}
            />
          );
        })}
      </S.BoxCards>

      <C.LinkButton
        label={action.label}
        href={action.href}
        title={action.title}
      />
    </S.Container>
  );
};
