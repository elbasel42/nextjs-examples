"use client";

import { useState, type ReactNode } from "react";

interface ConditionalLayoutProps {
  children: ReactNode;
  alpha: ReactNode;
  omega: ReactNode;
}

type SlotName = "alpha" | "omega";
const ConditionalLayout = ({
  children,
  alpha,
  omega,
}: Readonly<ConditionalLayoutProps>) => {
  const [slot, setSlot] = useState<SlotName>("alpha");

  const onClick = (slot: SlotName) => {
    return () => {
      setSlot(slot);
    };
  };

  return (
    <>
      <h1 className="text-2xl">Conditional Layout</h1>
      <div className="flex gap-2">
        <button onClick={onClick("alpha")}>set alpha</button>
        <button onClick={onClick("omega")}>set omega</button>
      </div>

      {children}
      {slot === "alpha" && alpha}
      {slot === "omega" && omega}
    </>
  );
};

export default ConditionalLayout;
