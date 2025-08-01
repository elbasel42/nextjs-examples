import type { ReactNode } from "react";
import { geistMono, geistSans } from "../style/fonts";
import "../style/globals.css";

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const bodyClassName = `${geistSans.variable} ${geistMono.variable} antialiased`;

const RootLayout = ({ children, modal }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className={bodyClassName}>
        {modal}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
