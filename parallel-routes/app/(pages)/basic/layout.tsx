import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
  alpha: ReactNode;
  omega: ReactNode;
}

const BasicLayout = ({ children, alpha, omega }: Readonly<RootLayoutProps>) => {
  return (
    <>
      {children}
      {alpha}
      {omega}
    </>
  );
};

export default BasicLayout;
