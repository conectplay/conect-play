"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
