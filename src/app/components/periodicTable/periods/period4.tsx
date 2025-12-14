import Cell from "../cell/cell.tsx"

import config from "../../../data/config.ts";

export default function Period4() {
  return (
    <>
      <Cell symbol="K" name="Potassium" atomicNumber={19} family={config.family.alkaliMetal} />
      <Cell symbol="Ca" name="Calcium" atomicNumber={20} family={config.family.alkalineEarthMetal} />
      <Cell symbol="Sc" name="Scandium" atomicNumber={21} family={config.family.transitionMetal} />
      <Cell symbol="Ti" name="Titanium" atomicNumber={22} family={config.family.transitionMetal} />
      <Cell symbol="V" name="Vanadium" atomicNumber={23} family={config.family.transitionMetal} />
      <Cell symbol="Cr" name="Chromium" atomicNumber={24} family={config.family.transitionMetal} />
      <Cell symbol="Mn" name="Manganese" atomicNumber={25} family={config.family.transitionMetal} />
      <Cell symbol="Fe" name="Iron" atomicNumber={26} family={config.family.transitionMetal} />
      <Cell symbol="Co" name="Cobalt" atomicNumber={27} family={config.family.transitionMetal} />
      <Cell symbol="Ni" name="Nickel" atomicNumber={28} family={config.family.transitionMetal} />
      <Cell symbol="Cu" name="Copper" atomicNumber={29} family={config.family.transitionMetal} />
      <Cell symbol="Zn" name="Zinc" atomicNumber={30} family={config.family.transitionMetal} />
      <Cell symbol="Ga" name="Gallium" atomicNumber={31} family={config.family.postTransitionMetal} />
      <Cell symbol="Ge" name="Germanium" atomicNumber={32} family={config.family.metalloid} />
      <Cell symbol="As" name="Arsenic" atomicNumber={33} family={config.family.metalloid} />
      <Cell symbol="Se" name="Selenium" atomicNumber={34} family={config.family.nonmetal} />
      <Cell symbol="Br" name="Bromine" atomicNumber={35} family={config.family.halogen} />
      <Cell symbol="Kr" name="Krypton" atomicNumber={36} family={config.family.nobleGas} />
    </>
  );
}