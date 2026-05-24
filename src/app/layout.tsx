import ThemeProvider from "@/components/Providers/ThemeProvider";
import { inter, manrope } from "@/lib/fonts";
import { RootLayoutProps } from "@/lib/type";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevHub",
  description: "Developer community platform",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
