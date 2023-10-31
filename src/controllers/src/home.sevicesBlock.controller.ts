import {
  FaCode,
  FaGraduationCap,
  FaInstagram,
  FaPenNib,
} from "react-icons/fa6";

export const servicesBlockController = {
  title:
    "Confira abaixo as nossas especialidades e conheça alguns dos principais serviços que dispomos",

  services: [
    {
      icon: FaPenNib,
      label: "Gráfica Expressa",
    },
    {
      icon: FaCode,
      label: "Criação de Sites e Aplicativos",
    },
    {
      icon: FaGraduationCap,
      label: "Cursos e Palestras",
    },
    {
      icon: FaInstagram,
      label: "Gerenciamento de Redes Sociais",
    },
  ],

  action: {
    label: "Solicite o seu serviço",
    href: "https://wa.me/c/558196336588",
    title: "Solicitar serviço",
  },
};
