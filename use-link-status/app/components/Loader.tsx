"use client";

import { useLinkStatus } from "next/link";

export default function Loader() {
  const { pending } = useLinkStatus();
  return (
    <>
      {pending && <div>Loading...</div>}
      {!pending && <div>Ready!</div>}
    </>
  );
}
