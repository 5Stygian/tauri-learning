import Cell from "../cell/cell.tsx";

import config from "@/app/data/config.ts";

export default function Actinides() {
  return (
    <>
      <Cell empty={true} amount={3} />
      <Cell symbol="Ac" name="Actinium" atomicNumber={89} family={config.family.actinide} />
      <Cell symbol="Th" name="Thorium" atomicNumber={90} family={config.family.actinide} />
      <Cell symbol="Pa" name="Protactinium" atomicNumber={91} family={config.family.actinide} />
      <Cell symbol="U" name="Uranium" atomicNumber={92} family={config.family.actinide} />
      <Cell symbol="Np" name="Neptunium" atomicNumber={93} family={config.family.actinide} />
      <Cell symbol="Pu" name="Plutonium" atomicNumber={94} family={config.family.actinide} />
      <Cell symbol="Am" name="Americium" atomicNumber={95} family={config.family.actinide} />
      <Cell symbol="Cm" name="Curium" atomicNumber={96} family={config.family.actinide} />
      <Cell symbol="Bk" name="Berkelium" atomicNumber={97} family={config.family.actinide} />
      <Cell symbol="Cf" name="Californium" atomicNumber={98} family={config.family.actinide} />
      <Cell symbol="Es" name="Einsteinium" atomicNumber={99} family={config.family.actinide} />
      <Cell symbol="Fm" name="fermium" atomicNumber={100} family={config.family.actinide} />
      <Cell symbol="Md" name="Mendelevium" atomicNumber={101} family={config.family.actinide} />
      <Cell symbol="No" name="Nobelium" atomicNumber={102} family={config.family.actinide} />
      <Cell symbol="Lr" name="Lawrencium" atomicNumber={103} family={config.family.actinide} />
    </>
  );
}
