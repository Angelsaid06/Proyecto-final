import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manzayork | Una ruta hacia algo nuevo",
  description:
    "Agenda tu experiencia Manzayork. Elige tu modelo y encuentra el momento perfecto para salir a explorar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
