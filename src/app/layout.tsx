import type { Metadata } from "next";
import "@/sass/_globals.sass";
import "@/sass/_reset.sass";
import Fonts from "@/components/Fonts";

export const metadata: Metadata = {
  title: "Online notepad",
  description: "Online notepad | Alvin Varghese | github.com/alvin1904",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Fonts />
      </head>
      <body>{children}</body>
    </html>
  );
}
