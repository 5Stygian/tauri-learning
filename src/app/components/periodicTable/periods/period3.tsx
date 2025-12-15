import Cell from "../cell/cell.tsx"

import { Sodium, Magnesium, Aluminum, Silicon, Phosphorus, Sulfur, Chlorine, Argon } from "@/app/data/elements.ts";
import Label from "../cell/label.tsx";

export default function Period3() {
  return (
    <>
      <Label isPeriod={true} text="3"/>
      <Cell element={Sodium} />
      <Cell element={Magnesium} />
      <Cell empty={true} amount={10} />
      <Cell element={Aluminum} />
      <Cell element={Silicon} />
      <Cell element={Phosphorus} />
      <Cell element={Sulfur} />
      <Cell element={Chlorine} />
      <Cell element={Argon} />
    </>
  );
}
