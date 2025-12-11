interface ElementProps {
  // element data
  symbol: string;
  name: string;
  atomicNumber: number;
  
  // display
  color: string;
  empty: boolean;
}

export default function Element({
  symbol,
  name,
  atomicNumber,
  color,
  empty = false,
}: ElementProps) {
  if (!empty) {
    const blockStyle = `w-25 h-25 border-2 shadow-2x1 shadow-${color} text-${color}`;
  
    return (
      <div className={blockStyle}>
        <span className="text-lg pl-1.5">{atomicNumber}</span>
        <div className="text-center text-5xl -mt-2">{symbol}</div>
        <div className="text-center">{name}</div>
      </div>
    );
  } else {
    return (
      <div className="w-25 h-25 opacity-0"></div>
    );
  }
}
