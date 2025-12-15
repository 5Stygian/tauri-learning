import Cell from "../cell/cell.tsx"

import { Astatine, Barium, Bismuth, Cesium, Gold, Hafnium, Iridium, Lead, Mercury, Osmium, Platinum, Polonium, Radon, Rhenium, Tantalum, Thallium, Tungsten } from "@/app/data/elements.ts";
import Label from "../cell/label.tsx";

export default function Period6() {
  return (
    <>
      <Label isPeriod={true} text="6"/>
      <Cell element={Cesium} />
      <Cell element={Barium} />
      <Cell nonElement={true} text="Lanthanide Series" range="57 - 71" />
      <Cell element={Hafnium} />
      <Cell element={Tantalum} />
      <Cell element={Tungsten} />
      <Cell element={Rhenium} />
      <Cell element={Osmium} />
      <Cell element={Iridium} />
      <Cell element={Platinum} />
      <Cell element={Gold} />
      <Cell element={Mercury} />
      <Cell element={Thallium} />
      <Cell element={Lead} />
      <Cell element={Bismuth} />
      <Cell element={Polonium} />
      <Cell element={Astatine} />
      <Cell element={Radon} />
    </>
  );
}