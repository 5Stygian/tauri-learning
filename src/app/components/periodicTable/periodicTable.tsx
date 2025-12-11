import { HasChildren } from '../../util/types';
import Element, { EmptyCell } from './elements/element';

export default function PeriodicTable({ children }: HasChildren) {
  return (
    <div className="grid grid-cols-18 grid-rows-7 gap-2">
      <EmptyCell />
      <Element symbol='H' name='Hydrogen' atomicNumber={1} color="gray-400" />
      <EmptyCell />
      <Element symbol='He' name='Helium' atomicNumber={2} color="gray-400" />
      {children}
    </div>
  );
}
