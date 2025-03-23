"use client";

import React from 'react';

export default function Rectangle({
    children,
    className = '',
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div
          className={`p-4 border-8 border-secondary-700 bg-primary-500 
          shadow-[10px_10px_0px_theme('colors.secondary.500')] rounded-lg ${className}`}
        >
          {children}
        </div>
      );
}