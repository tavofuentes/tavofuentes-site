import { ReactNode } from "react";
interface Props {
  children: ReactNode | ReactNode[];
  className: string;
}

export default function Panel({ children, className }: Props) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="container">{children}</div>
    </div>
  );
}
