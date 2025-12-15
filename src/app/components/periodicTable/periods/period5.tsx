import Cell from "../cell/cell.tsx"

import { Rubidium, Strontium, Yttrium, Zirconium, Niobium, Molybdenum, Technetium, Ruthenium, Rhodium, Palladium, Silver, Cadmium, Indium, Tin, Antimony, Tellurium, Iodine, Xenon } from "@/app/data/elements.ts";
import Label from "../cell/label.tsx";

export default function Period5() {
  return (
    <>
      <Label isPeriod={true} text="5"/>
      <Cell element={Rubidium} />
      <Cell element={Strontium} />
      <Cell element={Yttrium} />
      <Cell element={Zirconium} />
      <Cell element={Niobium} />
      <Cell element={Molybdenum} />
      <Cell element={Technetium} />
      <Cell element={Ruthenium} />
      <Cell element={Rhodium} />
      <Cell element={Palladium} />
      <Cell element={Silver} />
      <Cell element={Cadmium} />
      <Cell element={Indium} />
      <Cell element={Tin} />
      <Cell element={Antimony} />
      <Cell element={Tellurium} />
      <Cell element={Iodine} />
      <Cell element={Xenon} />
    </>
  );
}