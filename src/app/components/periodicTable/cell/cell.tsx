"use client";

import React from "react";

const blockSizing = "min-w-25 min-h-25 scale-67";

interface ElementProps {
  // element data
  symbol?: string;
  name?: string;
  atomicNumber?: number;
  
  // display
  color?: string;
  empty?: boolean;
  amount?: number;
}

export default function Cell({
  symbol,
  name,
  atomicNumber,
  color,
  empty = false,
  amount = 0
}: ElementProps) {
  if (!empty) {
    const blockStyle = `${blockSizing} border-2 shadow-2x1 ${color}`;

    return (
      <div className={blockStyle}>
        <span className="text-lg pl-1.5">{atomicNumber}</span>
        <div className="text-center text-5xl -mt-2">{symbol}</div>
        <div className="text-center">{name}</div>
      </div>
    );
  } else {
    const elementArray: React.ReactNode[] = [];
    
    for (let i = 0; i < amount; i++) {
      elementArray.push(
        <div key={i} className={blockSizing} />
      );
    }

    return (<>{elementArray}</>);
  }
}
