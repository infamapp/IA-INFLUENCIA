import { ArrowRight, Brain, Building2, Film, Megaphone, Sparkles } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

const pillars = [
  { icon: Brain, label: 'Marketing & IA', rotY: -18, rotX: 6, x: -120, y: -70, z: 40 },
  { icon: Megaphone, label: 'Publicidad & Branding', rotY: 10, rotX: -4, x: 110, y: -110, z: 80 },
  { icon: Film, label: 'Producción Audiovisual', rotY: -8, rotX: -8, x: -90, y: 90, z: 60 },
  { icon: Building2, label: 'Espacios & Eventos', rotY: 16, rotX: 4, x: 100, y: 70, z: 20 },
];

export default function Hero() {
  const tilt = useTilt<HTMLDivElement>(8);

  return (
    <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-500">
                Agencia Creativa · Marketing, IA & Producción
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Creamos marca,
              <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                contenido y experiencias
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Somos INFAMA Creative: marketing digital e inteligencia artificial, publicidad y
              branding, producción audiovisual y diseño de espacios y eventos. Todo lo que tu marca
              necesita para impactar, desde una campaña en redes hasta el montaje de un festival.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-pink-500 to-fuchsia-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Cuéntanos tu proyecto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="group bg-gray-900 border-2 border-pink-500/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Qué hacemos</span>
              </a>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-800">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="flex flex-col items-start space-y-2">
                  <pillar.icon className="w-5 h-5 text-pink-500" />
                  <p className="text-sm text-gray-400 leading-snug">{pillar.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual: 3D floating pillar stack */}
          <div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={tilt.style}
            className="relative hidden lg:block h-[440px] perspective-1000 preserve-3d transition-transform duration-200 ease-out"
          >
            {/* Orbit ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full border border-pink-500/20 animate-spin-slow" />
              <div className="absolute w-96 h-96 rounded-full border border-fuchsia-500/10 animate-spin-slower" />
            </div>

            <div className="absolute inset-0 preserve-3d">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.label}
                  className="absolute left-1/2 top-1/2 preserve-3d"
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${pillar.x}px, ${pillar.y}px, ${pillar.z}px) rotateY(${pillar.rotY}deg) rotateX(${pillar.rotX}deg)`,
                  }}
                >
                  <div
                    className={`${idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'} bg-gray-900/90 backdrop-blur border border-pink-500/30 rounded-2xl px-6 py-5 shadow-2xl shadow-pink-500/20 w-48`}
                  >
                    <pillar.icon className="w-7 h-7 text-pink-500 mb-3" />
                    <p className="text-white font-semibold text-sm leading-snug">{pillar.label}</p>
                  </div>
                </div>
              ))}

              {/* Center logo badge */}
              <div
                className="absolute left-1/2 top-1/2 preserve-3d"
                style={{ transform: 'translate(-50%, -50%) translate3d(0, 0, 110px)' }}
              >
                <div className="relative w-44 h-32 animate-float flex items-center justify-center">
                  <div className="absolute inset-0 bg-pink-500/40 blur-2xl rounded-full" />
                  <img
                    src={`${import.meta.env.BASE_URL}image.png`}
                    alt="The INFAMA Creative"
                    className="relative w-full h-full object-contain drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
