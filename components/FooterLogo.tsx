// components/FooterLogo.tsx
"use client";

import Image from "next/image";

export function FooterLogo() {
  return (
    <>
      <Image
        src="/logo-UoN-light.png"
        alt="University of Nottingham"
        width={100}
        height={100}
        className="block dark:hidden w-[200px] h-auto"
      />

      <Image
        src="/logo-UoN-dark.png"
        alt="University of Nottingham"
        width={100}
        height={100}
        className="hidden dark:block w-[200px] h-auto"
      />
    </>
  );
}
