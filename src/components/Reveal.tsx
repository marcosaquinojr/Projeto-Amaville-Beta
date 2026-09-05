import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
} & HTMLAttributes<HTMLDivElement>;

export function Reveal({ children, className, delay: _delay, y: _y, ...rest }: RevealProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
