import Cell from "../cell/cell.tsx";

import { Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, Fluorine, Neon } from "@/app/data/elements.ts";
import Label from "../cell/label.tsx";

export default function Period2() {
  return (
    <>
      <Label isPeriod={true} text="2"/>
      <Cell element={Lithium} />
      <Cell element={Beryllium} />
      <Cell empty={true} amount={10} />
      <Cell element={Boron} />
      <Cell element={Carbon} />
      <Cell element={Nitrogen} />
      <Cell element={Oxygen} />
      <Cell element={Fluorine} />
      <Cell element={Neon} />
    </>
  );
}
