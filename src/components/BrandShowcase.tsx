import { Brain, Building2, Film, Megaphone } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

const satellites = [
  { icon: Brain, radius: 170, duration: '18s', delay: '0s', size: 'w-12 h-12' },
  { icon: Megaphone, radius: 220, duration: '26s', delay: '-6s', size: 'w-10 h-10' },
  { icon: Film, radius: 170, duration: '18s', delay: '-9s', size: 'w-12 h-12' },
  { icon: Building2, radius: 220, duration: '26s', delay: '-19s', size: 'w-10 h-10' },
];

const words = [
  'Marketing Digital',
  'Inteligencia Artificial',
  'Publicidad',
  'Branding',
  'Producción Audiovisual',
  'Videoclips',
  'Espacios & Eventos',
  'Marca Personal',
];

export default function BrandShowcase() {
  const tilt = useTilt<HTMLDivElement>(10);

  return (
    <section className="relative py-24 overflow-hidden bg-black border-y border-gray-900">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-pink-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 mb-14">
          <span className="text-sm font-medium text-pink-500">La marca detrás de cada proyecto</span>
        </div>

        {/* Orbit stage */}
        <div
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          style={tilt.style}
          className="relative w-full max-w-lg h-[420px] perspective-1000 preserve-3d transition-transform duration-200 ease-out"
        >
          {/* Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[340px] h-[340px] rounded-full border border-pink-500/20 animate-spin-slow" />
            <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-fuchsia-500/15 animate-spin-slower" />
          </div>

          {/* Orbiting pillar icons */}
          {satellites.map((sat, idx) => (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 animate-orbit"
              style={
                {
                  '--orbit-radius': `${sat.radius}px`,
                  animationDuration: sat.duration,
                  animationDelay: sat.delay,
                } as React.CSSProperties
              }
            >
              <div
                className={`${sat.size} -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-900/90 backdrop-blur border border-pink-500/30 flex items-center justify-center shadow-lg shadow-pink-500/20`}
              >
                <sat.icon className="w-1/2 h-1/2 text-pink-400" />
              </div>
            </div>
          ))}

          {/* Central logo */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="relative w-64 h-44 flex items-center justify-center">
              <div className="absolute inset-0 bg-pink-500/30 blur-3xl rounded-full" />
              <img
                src={`${import.meta.env.BASE_URL}image.png`}
                alt="The INFAMA Creative"
                className="relative w-full h-full object-contain drop-shadow-[0_0_40px_rgba(236,72,153,0.55)]"
              />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="w-full mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...words, ...words].map((word, idx) => (
              <span
                key={idx}
                className="mx-6 text-lg sm:text-xl font-semibold text-gray-600 whitespace-nowrap"
              >
                {word}
                <span className="text-pink-500 ml-6">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
