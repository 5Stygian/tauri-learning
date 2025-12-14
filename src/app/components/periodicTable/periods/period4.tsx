import Cell from "../cell/cell.tsx"

import { Potassium, Calcium, Scandium, Titanium, Vandium, Chromium, Manganese, Iron, Cobalt, Nickel, Copper, Zinc, Gallium, Germanium, Arsenic, Selenium, Bromine, Krypton } from "@/app/data/elements.ts";

export default function Period4() {
  return (
    <>
      <Cell element={Potassium} />
      <Cell element={Calcium} />
      <Cell element={Scandium} />
      <Cell element={Titanium} />
      <Cell element={Vandium} />
      <Cell element={Chromium} />
      <Cell element={Manganese} />
      <Cell element={Iron} />
      <Cell element={Cobalt} />
      <Cell element={Nickel} />
      <Cell element={Copper} />
      <Cell element={Zinc} />
      <Cell element={Gallium} />
      <Cell element={Germanium} />
      <Cell element={Arsenic} />
      <Cell element={Selenium} />
      <Cell element={Bromine} />
      <Cell element={Krypton} />
    </>
  );
}