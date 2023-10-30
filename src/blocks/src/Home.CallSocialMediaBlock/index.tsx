"use client";

import * as S from "./styles";
import * as C from "@/components";

export const CallSocialMediaBlock = () => {
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
          <h3 className="social_media_title">
            Gerenciamento de Redes Sociais?
          </h3>
        </C.Animated>

        <C.Animated width="100%">
          <p className="social_media_paragraph">
            Você deseja aumentar sua presença no Instagram e conquistar uma base
            de seguidores mais ampla? Nossos serviços de gerenciamento de redes
            sociais são a solução ideal para ajudar você a alcançar esse
            objetivo. O Instagram é uma plataforma poderosa para construir sua
            marca, mas demanda tempo e estratégia para obter resultados
            significativos. É aí que entramos.
          </p>
        </C.Animated>

        <C.Animated width="100%">
          <p className="social_media_paragraph">
            Acreditamos em abordagens personalizadas. Nossa equipe de
            especialistas em mídia social desenvolverá uma estratégia sob medida
            para atender às necessidades exclusivas do seu negócio. Isso envolve
            a criação de conteúdo envolvente, o estabelecimento de horários
            ideais de postagem e o uso de técnicas de segmentação para atingir
            seu público-alvo de maneira eficaz.
          </p>
        </C.Animated>

        <C.Animated width="100%">
          <p className="social_media_paragraph">
            Sabemos que a qualidade do conteúdo é essencial. Criaremos imagens e
            legendas atraentes que refletem a personalidade da sua marca. Além
            disso, monitoraremos as tendências e os algoritmos em constante
            mudança do Instagram para garantir que seu conteúdo seja relevante e
            atraente.
          </p>
        </C.Animated>

        <C.Animated width="100%">
          <p className="social_media_paragraph">
            Nosso objetivo é não apenas criar conteúdo excepcional, mas também
            aumentar seu número de seguidores de maneira orgânica. Utilizamos
            estratégias de crescimento, como interações com seguidores,
            parcerias estratégicas e hashtags relevantes, para expandir sua
            presença no Instagram.
          </p>
        </C.Animated>

        <C.Animated width="100%">
          <p className="social_media_paragraph">
            A transparência é fundamental em nosso trabalho. Forneceremos
            relatórios detalhados sobre o desempenho das suas contas, incluindo
            métricas de engajamento, crescimento de seguidores e análises de
            conteúdo. Essas informações ajudarão a medir o impacto das nossas
            ações e ajustar nossa estratégia conforme necessário.
          </p>
        </C.Animated>

        <C.Animated width="100%">
          <p className="social_media_paragraph">
            Se você deseja elevar sua presença no Instagram a um nível superior,
            entre em contato conosco hoje. Estamos ansiosos para colaborar com
            você e ajudar a impulsionar sua marca nas redes sociais. Não perca
            mais tempo, deixe-nos cuidar da sua presença no Instagram, para que
            você possa se concentrar em fazer o que faz de melhor: gerir seu
            negócio.
          </p>
        </C.Animated>
      </S.BoxLeft>

      <S.BoxRigth>
        <C.Animated
          width="100%"
          identifierClass="social_media_box_animated"
          customTransition={imgTransition}
          customVariants={imgVariants}
        >
          <img
            src="https://i.ibb.co/98PQX0G/social-img.png"
            alt="social"
            className="social_media_image"
          />
        </C.Animated>
      </S.BoxRigth>
    </S.Container>
  );
};
