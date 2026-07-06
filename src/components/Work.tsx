import { Camera, Clapperboard, Music, PartyPopper, Sparkle, Store } from 'lucide-react';
import TiltCard from './TiltCard';

const categories = [
  {
    icon: Music,
    title: 'Videoclips',
    tag: 'Producción Audiovisual',
    color: 'from-pink-600 to-fuchsia-500',
  },
  {
    icon: PartyPopper,
    title: 'Festivales & Eventos Musicales',
    tag: 'Espacios & Eventos',
    color: 'from-fuchsia-600 to-purple-500',
  },
  {
    icon: Store,
    title: 'Locales de Ocio',
    tag: 'Decoración & Montaje',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: Sparkle,
    title: 'Campañas de Marca',
    tag: 'Publicidad & Branding',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Clapperboard,
    title: 'Producciones Cinematográficas',
    tag: 'Producción Audiovisual',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Camera,
    title: 'Contenido Digital & Marca Personal',
    tag: 'Marketing & IA',
    color: 'from-fuchsia-500 to-pink-600',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-fuchsia-500/20 px-4 py-2 rounded-full border border-fuchsia-500/30 mb-4">
            <Clapperboard className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-fuchsia-400">Áreas de Producción</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Del concepto
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              al escenario real
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un mismo equipo creativo que se mueve entre lo digital y lo físico: contenido, campañas
            y también la producción y el montaje de eventos en vivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <TiltCard key={category.title} intensity={10}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-pink-500 transition-colors duration-300 h-56">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-35 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 bg-gray-900/70" />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-pink-400 uppercase tracking-wide">
                      {category.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">{category.title}</h3>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
