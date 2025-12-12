import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period3() {
  return (
    <>
      <Cell symbol="Na" name="Sodium" atomicNumber={11} color={config.colors.alkaliMetals}/>
      <Cell symbol="Mg" name="Magnesium" atomicNumber={12} color={config.colors.alkalineEarthMetals}/>
      <Cell empty={true} amount={10} />
      <Cell symbol="Al" name="Aluminum" atomicNumber={13} color={config.colors.postTransitionMetals}/>
      <Cell symbol="Si" name="Silicon" atomicNumber={14} color={config.colors.metalloid}/>
      <Cell symbol="P" name="Phosphorus" atomicNumber={15} color={config.colors.nonmetal}/>
      <Cell symbol="S" name="Sulfur" atomicNumber={16} color={config.colors.nonmetal}/>
      <Cell symbol="Cl" name="Chlorine" atomicNumber={17} color={config.colors.halogen}/>
      <Cell symbol="Ar" name="Argon" atomicNumber={18} color={config.colors.nobleGas}/>
    </>
  );
}
