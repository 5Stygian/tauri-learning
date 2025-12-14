import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period5() {
  return (
    <>
      <Cell symbol="Rb" name="Rubidium" atomicNumber={19} family={config.family.alkaliMetal} />
      <Cell symbol="Sr" name="Strontium" atomicNumber={20} family={config.family.alkalineEarthMetal} />
      <Cell symbol="Y" name="Yttrium" atomicNumber={21} family={config.family.transitionMetal} />
      <Cell symbol="Zr" name="Zirconium" atomicNumber={22} family={config.family.transitionMetal} />
      <Cell symbol="Nb" name="Niobium" atomicNumber={23} family={config.family.transitionMetal} />
      <Cell symbol="Mo" name="Molybdenum" atomicNumber={24} family={config.family.transitionMetal} />
      <Cell symbol="Tc" name="Technetium" atomicNumber={25} family={config.family.transitionMetal} />
      <Cell symbol="Ru" name="Ruthenium" atomicNumber={26} family={config.family.transitionMetal} />
      <Cell symbol="Rh" name="Rhodium" atomicNumber={27} family={config.family.transitionMetal} />
      <Cell symbol="Pd" name="Palladium" atomicNumber={28} family={config.family.transitionMetal} />
      <Cell symbol="Ag" name="Silver" atomicNumber={29} family={config.family.transitionMetal} />
      <Cell symbol="Cd" name="Cadmium" atomicNumber={30} family={config.family.transitionMetal} />
      <Cell symbol="In" name="Indium" atomicNumber={31} family={config.family.postTransitionMetal} />
      <Cell symbol="Sn" name="Tin" atomicNumber={32} family={config.family.postTransitionMetal} />
      <Cell symbol="Sb" name="Antimony" atomicNumber={33} family={config.family.metalloid} />
      <Cell symbol="Te" name="Tellurium" atomicNumber={34} family={config.family.metalloid} />
      <Cell symbol="I" name="Iodine" atomicNumber={35} family={config.family.halogen} />
      <Cell symbol="Xe" name="Xenon" atomicNumber={36} family={config.family.nobleGas} />
    </>
  );
}