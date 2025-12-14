"use client";

import React from "react";

import config from "@/app/data/config";

const defaultCellStyles = "min-w-32 w-min min-h-25 -my-4 scale-67 transform-gpu";

interface ElementProps {
  // element data
  symbol?: string;
  name?: string;
  atomicNumber?: number;
  
  // display
  family?: string;
  empty?: boolean;
  amount?: number;
  compressedFBlock?: boolean;

  // html props
  className?: string;
  style?: React.CSSProperties;
}

export default function Cell({
  symbol,
  name,
  atomicNumber,
  family,
  empty = false,
  amount = 0,
  compressedFBlock = false
}: ElementProps) {
  if (!empty) {
    let blockStyle = `${defaultCellStyles} bg-black border-2 shadow-2x1 ${family} font-bold`;

    if (!compressedFBlock) {
      let familyType;

      switch (family) {
        case config.family.alkaliMetal:
          familyType = "Alkali Metal";
          break;
        case config.family.alkalineEarthMetal:
          familyType = "Alkaline Earth Metal";
          break;
        case config.family.transitionMetal:
          familyType = <span>Transition<br />Metal</span>;
          break;
        case config.family.postTransitionMetal:
          familyType = "Post-Transition Metal";
          break;
        case config.family.metalloid:
          familyType = "Metalloid";
          break;
        case config.family.nonmetal:
          familyType = "Nonmetal";
          break;
        case config.family.halogen:
          familyType = "Halogen";
          break;
        case config.family.nobleGas:
          familyType = "Noble Gas";
          break;
        case config.family.lanthanide:
          familyType = "Lanthanide";
          break;
        case config.family.actinide:
          familyType = "Actinide";
          break;
        default:
          familyType = "Unknown";
          break;
      } // switch

      blockStyle = `${blockStyle} duration-75 ease-[cubic-bezier(0.06, 0.98, 0.41, 0.93)] hover:scale-105 hover:z-10`;

      return (
        <div className={blockStyle}>
          <span className="text-lg pl-1.5">{atomicNumber}</span>
          <div className="text-center text-5xl -mt-1">{symbol}</div>
          <div className="text-center">{name}</div>
          <div className="text-center text-sm mt-1">{familyType}</div>
        </div>
      ); // return regualr cell
    } else {
      blockStyle = `${blockStyle} place-content-center`;

      return (
        <div className={blockStyle}>
          <div className="text-xl pl-1.5 text-center mb-3">{symbol}</div>
          <div className="text-center text-lg">{name}</div>
        </div>
      ); // return compressed f block
    } // if (!compressedFBlock)
  } else { // if cell is empty
    const elementArray: React.ReactNode[] = [];
    
    for (let i = 0; i < amount; i++) {
      elementArray.push(
        <div key={i} className={defaultCellStyles} />
      ); // push empty cell
    } // for amount of empty cells

    return (
      <>
        {elementArray}
      </>
    ); // return empty cells
  } // else 
} // Cell
