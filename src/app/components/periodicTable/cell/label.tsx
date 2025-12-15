interface LabelProps {
  text: string;
  isPeriod?: boolean;
}

export default function Label({
  text,
  isPeriod = false
}: LabelProps) {
  let textStyle;

  if (!isPeriod) {
    textStyle = "pt-16 text-2xl";
  } else {
    textStyle = "pl-10 text-2xl";
  }

  return (
    <div className="flex min-w-32 min-h-25 justify-center items-center">
      <div className={textStyle}>{text}</div>
    </div>
  );
}