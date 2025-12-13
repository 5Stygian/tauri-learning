import { HasChildren } from "@/app/util/types.ts";

export default function ElementCard({ children }: HasChildren) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}