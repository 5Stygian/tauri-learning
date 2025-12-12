import Cell from "../cell/cell.tsx";

import config from "@/app/data/config.ts";

export default function Actinides() {
  return (
    <>
      <Cell empty={true} amount={3} />
      <Cell symbol="Ac" name="Actinium" atomicNumber={89} color={config.colors.actinide} />
      <Cell symbol="Th" name="Thorium" atomicNumber={90} color={config.colors.actinide} />
      <Cell symbol="Pa" name="Protactinium" atomicNumber={91} color={config.colors.actinide} />
      <Cell symbol="U" name="Uranium" atomicNumber={92} color={config.colors.actinide} />
      <Cell symbol="Np" name="Neptunium" atomicNumber={93} color={config.colors.actinide} />
      <Cell symbol="Pu" name="Plutonium" atomicNumber={94} color={config.colors.actinide} />
      <Cell symbol="Am" name="Americium" atomicNumber={95} color={config.colors.actinide} />
      <Cell symbol="Cm" name="Curium" atomicNumber={96} color={config.colors.actinide} />
      <Cell symbol="Bk" name="Berkelium" atomicNumber={97} color={config.colors.actinide} />
      <Cell symbol="Cf" name="Californium" atomicNumber={98} color={config.colors.actinide} />
      <Cell symbol="Es" name="Einsteinium" atomicNumber={99} color={config.colors.actinide} />
      <Cell symbol="Fm" name="fermium" atomicNumber={100} color={config.colors.actinide} />
      <Cell symbol="Md" name="Mendelevium" atomicNumber={101} color={config.colors.actinide} />
      <Cell symbol="No" name="Nobelium" atomicNumber={102} color={config.colors.actinide} />
      <Cell symbol="Lr" name="Lawrencium" atomicNumber={103} color={config.colors.actinide} />
    </>
  );
}
