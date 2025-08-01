"use client";

import { useSelectedLayoutSegment } from "next/navigation";

interface LayoutSegmentProps {
  parallelRouteKey?: string;
}

export const ParallelSegment = ({ parallelRouteKey }: LayoutSegmentProps) => {
  const segment = useSelectedLayoutSegment(parallelRouteKey);
  return (
    <>
      <p>Parallel Segment: {segment}</p>
    </>
  );
};
