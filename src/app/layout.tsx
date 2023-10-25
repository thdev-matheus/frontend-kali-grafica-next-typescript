import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Configuration } from "./config";

const inter = Inter({ subsets: ["latin"] });

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
      <head></head>
      <body className={inter.className}>
        <Configuration>{children}</Configuration>
      </body>
    </html>
  );
}
