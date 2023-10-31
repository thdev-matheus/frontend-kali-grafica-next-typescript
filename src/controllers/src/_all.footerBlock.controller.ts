import { FaInstagram, FaMapLocationDot, FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export const footerBlockCoontroller = {
  info: {
    title: "Contato",

    address:
      "Via local VI, Cond. Villa das Seringueiras, bloco 5 apto 401, Jaboatão dos Guararapes/PE",

    phone: "(81) 9 9633-6588",

    email: "matheusth.kaligrafica@gmail.com",

    instagram: "@_kaligrafica",

    icons: [
      {
        Icon: FaInstagram,
        color: "magenta",
        href: "https://www.instagram.com/_kaligrafica/",
        title: "Instagram da Kali",
      },
      {
        Icon: FaWhatsapp,
        color: "green",
        href: "https://wa.me/558196336588",
        title: "Falar no whatsapp",
      },
      {
        Icon: FiMail,
        color: "red",
        href: "mailto:matheusth.kaligrafica@gmail.com",
        title: "Enviar e-mail",
      },
      {
        Icon: FaMapLocationDot,
        color: "orange",
        href: "https://maps.app.goo.gl/k8v8io4CH6yNw5qP6",
        title: "Encontre-nos no mapa",
      },
    ],
  },

  logo: {
    src: "https://i.ibb.co/P9jf7x7/kali-img-typo.png",
    alt: "logo",
  },

  hours: [
    "Aberto de",
    "segunda a sexta",
    "8h ~ 12h | 13h ~ 17h",
    "e sábado",
    "8h ~ 13h",
  ],
};
