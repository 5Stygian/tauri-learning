import Cell from "../cell/cell.tsx"

import { Bohrium, Copernicium, Darmstadium, Dubnium, Flerovium, Francium, Hassium, Livermorium, Meitnerium, Moscovium, Nihonium, Oganesson, Radium, Roentgenium, Rutherfordium, Seaborgium, Tenessine } from "@/app/data/elements.ts";

export default function Period7() {
  return (
    <>
      <Cell element={Francium} />
      <Cell element={Radium} />
      <Cell compressedFBlock={true} text="Actinide Series" range="57 - 71" />
      <Cell element={Rutherfordium} />
      <Cell element={Dubnium} />
      <Cell element={Seaborgium} />
      <Cell element={Bohrium} />
      <Cell element={Hassium} />
      <Cell element={Meitnerium} />
      <Cell element={Darmstadium} />
      <Cell element={Roentgenium} />
      <Cell element={Copernicium} />
      <Cell element={Nihonium} />
      <Cell element={Flerovium} />
      <Cell element={Moscovium} />
      <Cell element={Livermorium} />
      <Cell element={Tenessine} />
      <Cell element={Oganesson} />
    </>
  );
}