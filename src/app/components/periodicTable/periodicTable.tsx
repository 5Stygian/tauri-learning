import { HasChildren } from '../../util/types';
import Element from './elements/element';

export default function PeriodicTable({ children }: HasChildren) {
  return (
    <div>
      <Element symbol='H' name='Hydrogen' atomicNumber={1} color="gray-400"/>
      {children}
    </div>
  );
}
