import Cell from "../cell/cell";

import config from "@/app/data/config.ts";

export default function Lanthanides() {
  return (
    <>
      <Cell empty={true} amount={3} />
      <Cell symbol="La" name="Lanthanum" atomicNumber={57} color={config.colors.lanthanide} />
      <Cell symbol="Ce" name="Cerium" atomicNumber={58} color={config.colors.lanthanide} />
      <Cell symbol="Pr" name="Praseodymium" atomicNumber={59} color={config.colors.lanthanide} />
      <Cell symbol="Nd" name="Neodymium" atomicNumber={60} color={config.colors.lanthanide} />
      <Cell symbol="Pm" name="Promethium" atomicNumber={61} color={config.colors.lanthanide} />
      <Cell symbol="Sm" name="Samarium" atomicNumber={62} color={config.colors.lanthanide} />
      <Cell symbol="Eu" name="Europium" atomicNumber={63} color={config.colors.lanthanide} />
      <Cell symbol="Gd" name="Gadolinium" atomicNumber={64} color={config.colors.lanthanide} />
      <Cell symbol="Tb" name="Terbium" atomicNumber={65} color={config.colors.lanthanide} />
      <Cell symbol="Dy" name="Dysprosium" atomicNumber={66} color={config.colors.lanthanide} />
      <Cell symbol="Ho" name="Holmium" atomicNumber={67} color={config.colors.lanthanide} />
      <Cell symbol="Er" name="Erbium" atomicNumber={68} color={config.colors.lanthanide} />
      <Cell symbol="Tm" name="Thulium" atomicNumber={69} color={config.colors.lanthanide} />
      <Cell symbol="Yb" name="Ytterbium" atomicNumber={70} color={config.colors.lanthanide} />
      <Cell symbol="Lu" name="Lutetium" atomicNumber={71} color={config.colors.lanthanide} />
    </>
  );
}
