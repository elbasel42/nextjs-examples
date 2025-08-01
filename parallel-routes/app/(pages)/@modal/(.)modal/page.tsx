"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type RefObject, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const ModalInterceptingPage = () => {
  const ref = useRef<HTMLDivElement>(null); // Specify the type as HTMLDivElement
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  useOnClickOutside(ref as RefObject<HTMLElement>, closeModal);

  return (
    <div className="h-screen w-screen fixed inset-0 bg-black/80">
      <div className={modalStyle} ref={ref}>
        <h1>Modal Intercepting Page</h1>
        <div className="flex gap-2">
          <button onClick={closeModal}>Close Modal</button>
          <Link href="/">HomePage</Link>
          <Link href="/tabs">Tabs</Link>
        </div>
      </div>
    </div>
  );
};

export default ModalInterceptingPage;

const modalStyle =
  "fixed top-1/2 left-1/2 transform flex-col -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-2xl drop-shadow-2xl w-[80vw] h-[80vw] flex items-center justify-center text-center";
