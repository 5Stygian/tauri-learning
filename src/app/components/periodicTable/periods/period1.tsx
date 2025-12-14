import Cell from "../cell/cell.tsx";

import { Hydrogen, Helium } from "@/app/data/elements.ts";

export default function Period1() {
  return (
    <>
      <Cell element={Hydrogen} />
      <Cell empty={true} amount={16} />
      <Cell element={Helium} />
    </>
  );
}
