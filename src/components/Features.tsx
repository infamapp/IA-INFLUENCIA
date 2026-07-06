import { Compass, Layers, Sparkles, Users, Wand2, Zap } from 'lucide-react';
import TiltCard from './TiltCard';

const features = [
  {
    icon: Layers,
    title: 'Un solo equipo, todo el proceso',
    description:
      'Estrategia, creatividad, producción audiovisual y montaje físico bajo un mismo techo: sin depender de mil proveedores distintos.',
  },
  {
    icon: Wand2,
    title: 'IA aplicada a la creatividad',
    description:
      'Usamos inteligencia artificial para acelerar contenido, análisis y estrategia, sin perder el criterio creativo humano.',
  },
  {
    icon: Compass,
    title: 'De lo digital a lo físico',
    description:
      'Diseñamos campañas y también las llevamos al terreno: escenografía, decoración y montaje de eventos reales.',
  },
  {
    icon: Users,
    title: 'Marca personal e influencia',
    description:
      'Acompañamos a personas y perfiles emergentes en su posicionamiento, contenido y crecimiento como marca.',
  },
  {
    icon: Sparkles,
    title: 'Conceptos que no son plantilla',
    description:
      'Cada proyecto parte de un concepto propio, pensado para la marca, el espacio o el evento concreto.',
  },
  {
    icon: Zap,
    title: 'Producción propia',
    description:
      'Equipo y estudio audiovisual in-house para videoclips, contenido de eventos y piezas publicitarias.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-fuchsia-500/20 px-4 py-2 rounded-full border border-fuchsia-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-fuchsia-400">Por qué Infama Creative</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Creatividad con
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              capacidad de producción real
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <TiltCard key={feature.title} intensity={6}>
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative p-8 rounded-2xl border border-gray-800 group-hover:border-pink-500 transition-all duration-300 bg-gray-900 h-full">
                  <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
