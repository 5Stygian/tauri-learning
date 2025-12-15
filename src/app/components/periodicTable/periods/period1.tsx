import Cell from "../cell/cell.tsx";

import { Hydrogen, Helium } from "@/app/data/elements.ts";
import Label from "../cell/label.tsx";

export default function Period1() {
  return (
    <>
      <Label isPeriod={true} text="1" />
      <Cell element={Hydrogen} />
      <Cell empty={true} amount={16} />
      <Cell element={Helium} />
    </>
  );
}
