"use client";

import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

export const LayoutSegments = () => {
  const layoutSegment = useSelectedLayoutSegment();
  const allSegments = useSelectedLayoutSegments();
  return (
    <>
      <p>Layout Segment: {layoutSegment}</p>
      <p>All Segments: {JSON.stringify(allSegments)}</p>
    </>
  );
};
