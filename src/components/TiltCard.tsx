import type { ReactNode } from 'react';
import { useTilt } from '../hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = '', intensity = 8 }: TiltCardProps) {
  const tilt = useTilt<HTMLDivElement>(intensity);

  return (
    <div className="perspective-1000">
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={tilt.style}
        className={`preserve-3d transition-transform duration-200 ease-out ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
