import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period5() {
  return (
    <>
      <Cell symbol="Rb" name="Rubidium" atomicNumber={37} family={config.family.alkaliMetal} />
      <Cell symbol="Sr" name="Strontium" atomicNumber={38} family={config.family.alkalineEarthMetal} />
      <Cell symbol="Y" name="Yttrium" atomicNumber={39} family={config.family.transitionMetal} />
      <Cell symbol="Zr" name="Zirconium" atomicNumber={40} family={config.family.transitionMetal} />
      <Cell symbol="Nb" name="Niobium" atomicNumber={41} family={config.family.transitionMetal} />
      <Cell symbol="Mo" name="Molybdenum" atomicNumber={42} family={config.family.transitionMetal} />
      <Cell symbol="Tc" name="Technetium" atomicNumber={43} family={config.family.transitionMetal} />
      <Cell symbol="Ru" name="Ruthenium" atomicNumber={44} family={config.family.transitionMetal} />
      <Cell symbol="Rh" name="Rhodium" atomicNumber={45} family={config.family.transitionMetal} />
      <Cell symbol="Pd" name="Palladium" atomicNumber={46} family={config.family.transitionMetal} />
      <Cell symbol="Ag" name="Silver" atomicNumber={47} family={config.family.transitionMetal} />
      <Cell symbol="Cd" name="Cadmium" atomicNumber={48} family={config.family.transitionMetal} />
      <Cell symbol="In" name="Indium" atomicNumber={49} family={config.family.postTransitionMetal} />
      <Cell symbol="Sn" name="Tin" atomicNumber={50} family={config.family.postTransitionMetal} />
      <Cell symbol="Sb" name="Antimony" atomicNumber={51} family={config.family.metalloid} />
      <Cell symbol="Te" name="Tellurium" atomicNumber={52} family={config.family.metalloid} />
      <Cell symbol="I" name="Iodine" atomicNumber={53} family={config.family.halogen} />
      <Cell symbol="Xe" name="Xenon" atomicNumber={54} family={config.family.nobleGas} />
    </>
  );
}