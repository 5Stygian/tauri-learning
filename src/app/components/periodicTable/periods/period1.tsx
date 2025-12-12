import Cell from "../cell/cell.tsx";

import config from "@/app/data/config.ts";

export default function Period1() {
  return (
    <>
      <Cell symbol='H' name='Hydrogen' atomicNumber={1} color={config.colors.nonmetal} />
      <Cell empty={true} amount={16} />
      <Cell symbol='He' name='Helium' atomicNumber={2} color={config.colors.nobleGas} />
    </>
  );
}
