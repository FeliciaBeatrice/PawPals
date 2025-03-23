"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Button({
  text,
  onClick,
  className = "",
  href,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }

    if (onClick) {
      onClick();
    }
  }
  return (
    <button
      className={`px-4 py-2 border-4 border-secondary-700 bg-white text-secondary-900 font-montserrat font-bold rounded-full hover:bg-primary-700 hover:text-white transition ${className}`}
      onClick={handleClick}>
        {text}
    </button>
  );
}