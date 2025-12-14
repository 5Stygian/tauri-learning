import Cell from "../cell/cell";

import config from "@/app/data/config.ts";

export default function Lanthanides() {
  return (
    <>
      <Cell empty={true} amount={3} />
      <Cell symbol="La" name="Lanthanum" atomicNumber={57} family={config.family.lanthanide} />
      <Cell symbol="Ce" name="Cerium" atomicNumber={58} family={config.family.lanthanide} />
      <Cell symbol="Pr" name="Praseodymium" atomicNumber={59} family={config.family.lanthanide} />
      <Cell symbol="Nd" name="Neodymium" atomicNumber={60} family={config.family.lanthanide} />
      <Cell symbol="Pm" name="Promethium" atomicNumber={61} family={config.family.lanthanide} />
      <Cell symbol="Sm" name="Samarium" atomicNumber={62} family={config.family.lanthanide} />
      <Cell symbol="Eu" name="Europium" atomicNumber={63} family={config.family.lanthanide} />
      <Cell symbol="Gd" name="Gadolinium" atomicNumber={64} family={config.family.lanthanide} />
      <Cell symbol="Tb" name="Terbium" atomicNumber={65} family={config.family.lanthanide} />
      <Cell symbol="Dy" name="Dysprosium" atomicNumber={66} family={config.family.lanthanide} />
      <Cell symbol="Ho" name="Holmium" atomicNumber={67} family={config.family.lanthanide} />
      <Cell symbol="Er" name="Erbium" atomicNumber={68} family={config.family.lanthanide} />
      <Cell symbol="Tm" name="Thulium" atomicNumber={69} family={config.family.lanthanide} />
      <Cell symbol="Yb" name="Ytterbium" atomicNumber={70} family={config.family.lanthanide} />
      <Cell symbol="Lu" name="Lutetium" atomicNumber={71} family={config.family.lanthanide} />
    </>
  );
}
