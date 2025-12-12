import Cell from "../cell/cell.tsx";

import config from "@/app/data/config.ts";

export default function Actinides() {
  return (
    <>
      <Cell empty={true} amount={3} />
      <Cell symbol="Ac" name="Actinium" atomicNumber={57} color={config.colors.actinide} />
      <Cell symbol="Th" name="Thorium" atomicNumber={58} color={config.colors.actinide} />
      <Cell symbol="Pa" name="Protactinium" atomicNumber={59} color={config.colors.actinide} />
      <Cell symbol="U" name="Uranium" atomicNumber={60} color={config.colors.actinide} />
      <Cell symbol="Np" name="Neptunium" atomicNumber={61} color={config.colors.actinide} />
      <Cell symbol="Pu" name="Plutonium" atomicNumber={62} color={config.colors.actinide} />
      <Cell symbol="Am" name="Americium" atomicNumber={63} color={config.colors.actinide} />
      <Cell symbol="Cm" name="Curium" atomicNumber={64} color={config.colors.actinide} />
      <Cell symbol="Bk" name="Berkelium" atomicNumber={65} color={config.colors.actinide} />
      <Cell symbol="Cf" name="Californium" atomicNumber={66} color={config.colors.actinide} />
      <Cell symbol="Es" name="Einsteinium" atomicNumber={67} color={config.colors.actinide} />
      <Cell symbol="Fm" name="fermium" atomicNumber={68} color={config.colors.actinide} />
      <Cell symbol="Md" name="Mendelevium" atomicNumber={69} color={config.colors.actinide} />
      <Cell symbol="No" name="Nobelium" atomicNumber={70} color={config.colors.actinide} />
      <Cell symbol="Lr" name="Lawrencium" atomicNumber={71} color={config.colors.actinide} />
    </>
  );
}
