import type { Metadata } from "next";
import { Configuration } from "./config";

export const metadata: Metadata = {
  title: "Kali Gráfica",
  description: "A sua gráfica inteligente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/images/dark_logo_sem_nome.png"
          type="image/png"
        />
      </head>
      <body>
        <Configuration>{children}</Configuration>
      </body>
    </html>
  );
}
