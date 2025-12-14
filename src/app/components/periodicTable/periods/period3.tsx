import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period3() {
  return (
    <>
      <Cell symbol="Na" name="Sodium" atomicNumber={11} family={config.family.alkaliMetal} />
      <Cell symbol="Mg" name="Magnesium" atomicNumber={12} family={config.family.alkalineEarthMetal} />
      <Cell empty={true} amount={10} />
      <Cell symbol="Al" name="Aluminum" atomicNumber={13} family={config.family.postTransitionMetal} />
      <Cell symbol="Si" name="Silicon" atomicNumber={14} family={config.family.metalloid} />
      <Cell symbol="P" name="Phosphorus" atomicNumber={15} family={config.family.nonmetal} />
      <Cell symbol="S" name="Sulfur" atomicNumber={16} family={config.family.nonmetal} />
      <Cell symbol="Cl" name="Chlorine" atomicNumber={17} family={config.family.halogen} />
      <Cell symbol="Ar" name="Argon" atomicNumber={18} family={config.family.nobleGas} />
    </>
  );
}
