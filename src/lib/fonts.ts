import { Roboto, Righteous } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
});
