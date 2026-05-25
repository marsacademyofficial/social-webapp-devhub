import { Inter, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-paragraph",
  display: "swap",
});
