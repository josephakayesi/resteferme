import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nueueHaasGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasDisplayXXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayXThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayThin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayBlack.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nueue-haas-grotesk",
});

export const metadata: Metadata = {
  title: "Resteferme",
  description: "Helping you build world-class engineering teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nueueHaasGrotesk.className} bg-gradient-to-b from-[#EEFEEC] to-white`}
      >
        {children}
      </body>
    </html>
  );
}
