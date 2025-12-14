import Cell from "../cell/cell.tsx";

import config from "../../../data/config.ts";

export default function Period2() {
  return (
    <>
      <Cell symbol="Li" name="Lithium" atomicNumber={3} family={config.family.alkaliMetal} />
      <Cell symbol="Be" name="Beryllium" atomicNumber={4} family={config.family.alkalineEarthMetal} />
      <Cell empty={true} amount={10} />
      <Cell symbol="B" name="Boron" atomicNumber={5} family={config.family.metalloid} />
      <Cell symbol="C" name="Carbon" atomicNumber={6} family={config.family.nonmetal} />
      <Cell symbol="O" name="Oxygen" atomicNumber={7} family={config.family.nonmetal} />
      <Cell symbol="N" name="Nitrogen" atomicNumber={8} family={config.family.nonmetal} />
      <Cell symbol="F" name="Florine" atomicNumber={9} family={config.family.halogen} />
      <Cell symbol="Ne" name="Neon" atomicNumber={10} family={config.family.nobleGas} />
    </>
  );
}
