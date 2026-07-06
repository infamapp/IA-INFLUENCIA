import { useRef, useState, type MouseEvent } from 'react';

export function useTilt<T extends HTMLElement>(intensity = 10) {
  const ref = useRef<T>(null);
  const [style, setStyle] = useState<{ transform: string }>({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  });

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(1200px) rotateX(${-py * intensity}deg) rotateY(${px * intensity}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}
