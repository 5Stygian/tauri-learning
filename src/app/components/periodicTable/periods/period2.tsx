import Cell from "../cell/cell.tsx";

import config from "../../../data/config.ts";

export default function Period2() {
  return (
    <>
      <Cell symbol="Li" name="Lithium" atomicNumber={3} color={config.colors.alkaliMetals}/>
      <Cell symbol="Be" name="Beryllium" atomicNumber={4} color={config.colors.alkalineEarthMetals}/>
      <Cell empty={true} amount={10} />
      <Cell symbol="B" name="Boron" atomicNumber={5} color={config.colors.metalloid}/>
      <Cell symbol="C" name="Carbon" atomicNumber={6} color={config.colors.nonmetal}/>
      <Cell symbol="O" name="Oxygen" atomicNumber={7} color={config.colors.nonmetal}/>
      <Cell symbol="N" name="Nitrogen" atomicNumber={8} color={config.colors.nonmetal}/>
      <Cell symbol="F" name="Florine" atomicNumber={9} color={config.colors.halogen}/>
      <Cell symbol="Ne" name="Neon" atomicNumber={10} color={config.colors.nobleGas}/>
    </>
  );
}
