import React from "react";

export default function Button({
  text,
  onClick,
  className = "",
}: {
  text: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`px-4 py-2 border border-secondary-500 bg-white text-secondary-900 font-montserrat rounded-lg hover:shadow-[4_4_0px_secondary-700] hover:bg-opacity-100 transition ${className}`}
      onClick={onClick}>
        {text}
    </button>
  );
}