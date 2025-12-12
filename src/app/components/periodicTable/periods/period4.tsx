import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period4() {
  return (
    <>
      <Cell symbol="K" name="Potassium" atomicNumber={19} color={config.colors.alkaliMetal}/>
      <Cell symbol="Ca" name="Calcium" atomicNumber={20} color={config.colors.alkalineEarthMetal}/>
      <Cell symbol="Sc" name="Scandium" atomicNumber={21} color={config.colors.transitionMetal}/>
      <Cell symbol="Ti" name="Titanium" atomicNumber={22} color={config.colors.transitionMetal}/>
      <Cell symbol="V" name="Vanadium" atomicNumber={23} color={config.colors.transitionMetal}/>
      <Cell symbol="Cr" name="Chromium" atomicNumber={24} color={config.colors.transitionMetal}/>
      <Cell symbol="Mn" name="Manganese" atomicNumber={25} color={config.colors.transitionMetal}/>
      <Cell symbol="Fe" name="Iron" atomicNumber={26} color={config.colors.transitionMetal}/>
      <Cell symbol="Co" name="Cobalt" atomicNumber={27} color={config.colors.transitionMetal}/>
      <Cell symbol="Ni" name="Nickel" atomicNumber={28} color={config.colors.transitionMetal}/>
      <Cell symbol="Cu" name="Copper" atomicNumber={29} color={config.colors.transitionMetal}/>
      <Cell symbol="Zn" name="Zinc" atomicNumber={30} color={config.colors.transitionMetal}/>
      <Cell symbol="Ga" name="Gallium" atomicNumber={31} color={config.colors.postTransitionMetal}/>
      <Cell symbol="Ge" name="Germanium" atomicNumber={32} color={config.colors.metalloid}/>
      <Cell symbol="As" name="Arsenic" atomicNumber={33} color={config.colors.metalloid}/>
      <Cell symbol="Se" name="Selenium" atomicNumber={34} color={config.colors.nonmetal}/>
      <Cell symbol="Br" name="Bromine" atomicNumber={35} color={config.colors.halogen}/>
      <Cell symbol="Kr" name="Krypton" atomicNumber={36} color={config.colors.nobleGas}/>
    </>
  );
}