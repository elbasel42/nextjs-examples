"use client";

import type { ReactNode } from "react";

interface ClientComponentProps {
  children: ReactNode;
}

export const ClientComponent = ({ children }: ClientComponentProps) => {
  return (
    <div>
      <p>
        This is the start of a client component, below is it&apos;s children
      </p>
      {children}
    </div>
  );
};
