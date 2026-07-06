import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export default function Reveal({ children, className = '' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
}
