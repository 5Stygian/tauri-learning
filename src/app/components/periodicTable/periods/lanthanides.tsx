import Cell from "../cell/cell";

import { Lanthanum, Cerium, Praseodymium, Neodymium, Promethium, Samarium, Europium, Gadolinium, Terbium, Dysprosium, Holmium, Erbium, Thulium, Ytterbium, Lutetium } from "@/app/data/elements";

export default function Lanthanides() {
  return (
    <>
      <Cell empty={true} amount={4} />
      <Cell element={Lanthanum} />
      <Cell element={Cerium} />
      <Cell element={Praseodymium} />
      <Cell element={Neodymium} />
      <Cell element={Promethium} />
      <Cell element={Samarium} />
      <Cell element={Europium} />
      <Cell element={Gadolinium} />
      <Cell element={Terbium} />
      <Cell element={Dysprosium} />
      <Cell element={Holmium} />
      <Cell element={Erbium} />
      <Cell element={Thulium} />
      <Cell element={Ytterbium} />
      <Cell element={Lutetium} />
    </>
  );
}
