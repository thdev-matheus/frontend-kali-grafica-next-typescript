"use client";

import * as S from "./styles";
import * as C from "@/components";

export const CallCoursesBlock = () => {
  return (
    <S.Container>
      <S.BoxLeft>
        <img src="https://i.ibb.co/0qZgqnn/courses-img.png" alt="courses" />
      </S.BoxLeft>

      <S.BoxRigth>
        <h3>Cursos?</h3>

        <p>
          Ainda estamos estruturando mas aqui contaremos com cursos livres em
          diversas áreas.
        </p>

        <p>
          Ah, e vai ter tanto online quanto presencial, então não deixe de
          acompanhar as nossas redes sociais e fique por dentro dos nossos
          lançamentos.
        </p>
      </S.BoxRigth>
    </S.Container>
  );
};
