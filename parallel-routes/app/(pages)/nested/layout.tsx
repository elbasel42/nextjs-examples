// !! Notice that navigating to `/nested/beta` will not
// !! render anything for the @slot as here is no `/nested/@slot/beta/page.tsx` file.
// !! instead, it will render the `/nested/@slot/default.tsx` file. on hard navigation
// !! and maintain the active slot on soft navigation.

import { LayoutSegments } from "@/app/components/LayoutSegments";
import { ParallelSegment } from "@/app/components/ParallelSegment";
import Link from "next/link";
import type { ReactNode } from "react";

interface AlphaLayoutProps {
  children: ReactNode;
  slot: ReactNode;
}

const AlphaLayout = ({ children, slot }: Readonly<AlphaLayoutProps>) => {
  return (
    <>
      <h1 className="text-2xl">Nested Layout</h1>

      <LayoutSegments />
      <ParallelSegment parallelRouteKey="slot" />

      <nav className="flex gap-2 border border-black p-2">
        <Link href="/nested">back</Link>
        <Link href="/nested/alpha">alpha</Link>
        <Link href="/nested/omega">omega</Link>
        <Link href="/nested/beta">beta</Link>
      </nav>
      {slot}
      {children}
    </>
  );
};

export default AlphaLayout;
