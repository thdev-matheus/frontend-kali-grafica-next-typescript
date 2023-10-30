"use client";

import * as S from "./styles";
import * as C from "@/components";

export const CallCoursesBlock = () => {
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
        <C.Animated width="100%">
          <img
            src="https://i.ibb.co/0qZgqnn/courses-img.png"
            alt="courses"
            className="courses_image"
          />
        </C.Animated>
      </S.BoxLeft>

      <S.BoxRigth>
        <C.Animated width="100%">
          <h3 className="courses_title">Cursos?</h3>
        </C.Animated>

        <C.Animated width="100%">
          <p className="courses_paragraph">
            Ainda estamos estruturando mas aqui contaremos com cursos livres em
            diversas áreas.
          </p>
        </C.Animated>

        <C.Animated width="100%">
          <p className="courses_paragraph">
            Ah, e vai ter tanto online quanto presencial, então não deixe de
            acompanhar as nossas redes sociais e fique por dentro dos nossos
            lançamentos.
          </p>
        </C.Animated>
      </S.BoxRigth>
    </S.Container>
  );
};
