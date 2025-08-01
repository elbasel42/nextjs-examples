import Link from "next/link";
import type { ReactNode } from "react";

interface OuterTabsLayoutProps {
  children: ReactNode;
  slot: ReactNode;
}

const OuterTabsLayout = ({
  children,
  slot,
}: Readonly<OuterTabsLayoutProps>) => {
  return (
    <>
      <h1 className="text-2xl">Tabs Layout</h1>
      <div className="flex gap-2">
        <Link href="/tabs/alpha">Alpha</Link>
        <Link href="/tabs/omega">omega</Link>
      </div>
      {slot}
      {children}
    </>
  );
};

export default OuterTabsLayout;
