import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period5() {
  return (
    <>
      <Cell symbol="Rb" name="Rubidium" atomicNumber={19} color={config.colors.alkaliMetal}/>
      <Cell symbol="Sr" name="Strontium" atomicNumber={20} color={config.colors.alkalineEarthMetal}/>
      <Cell symbol="Y" name="Yttrium" atomicNumber={21} color={config.colors.transitionMetal}/>
      <Cell symbol="Zr" name="Zirconium" atomicNumber={22} color={config.colors.transitionMetal}/>
      <Cell symbol="Nb" name="Niobium" atomicNumber={23} color={config.colors.transitionMetal}/>
      <Cell symbol="Mo" name="Molybdenum" atomicNumber={24} color={config.colors.transitionMetal}/>
      <Cell symbol="Tc" name="Technetium" atomicNumber={25} color={config.colors.transitionMetal}/>
      <Cell symbol="Ru" name="Ruthenium" atomicNumber={26} color={config.colors.transitionMetal}/>
      <Cell symbol="Rh" name="Rhodium" atomicNumber={27} color={config.colors.transitionMetal}/>
      <Cell symbol="Pd" name="Palladium" atomicNumber={28} color={config.colors.transitionMetal}/>
      <Cell symbol="Ag" name="Silver" atomicNumber={29} color={config.colors.transitionMetal}/>
      <Cell symbol="Cd" name="Cadmium" atomicNumber={30} color={config.colors.transitionMetal}/>
      <Cell symbol="In" name="Indium" atomicNumber={31} color={config.colors.postTransitionMetal}/>
      <Cell symbol="Sn" name="Tin" atomicNumber={32} color={config.colors.postTransitionMetal}/>
      <Cell symbol="Sb" name="Antimony" atomicNumber={33} color={config.colors.metalloid}/>
      <Cell symbol="Te" name="Tellurium" atomicNumber={34} color={config.colors.metalloid}/>
      <Cell symbol="I" name="Iodine" atomicNumber={35} color={config.colors.halogen}/>
      <Cell symbol="Xe" name="Xenon" atomicNumber={36} color={config.colors.nobleGas}/>
    </>
  );
}