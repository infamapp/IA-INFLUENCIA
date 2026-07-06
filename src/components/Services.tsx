import { Brain, Building2, Film, Megaphone, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import Reveal from './Reveal';

const pillars = [
  {
    icon: Brain,
    title: 'Marketing Digital & IA',
    description:
      'Estrategia, contenido y automatización con inteligencia artificial para crecer y posicionar marcas y perfiles personales.',
    color: 'from-pink-600 to-fuchsia-500',
    features: [
      'Estrategia de redes sociales',
      'Creación de contenido con IA',
      'Crecimiento de marca personal e influencers',
      'Automatización y analítica',
    ],
  },
  {
    icon: Megaphone,
    title: 'Publicidad & Branding',
    description:
      'Identidad de marca y campañas publicitarias que hacen que un producto, un local o una persona se recuerden.',
    color: 'from-fuchsia-600 to-purple-500',
    features: [
      'Branding de marca y producto',
      'Campañas publicitarias 360',
      'Vídeos promocionales y expositivos',
      'Dirección de arte',
    ],
  },
  {
    icon: Film,
    title: 'Producción Audiovisual',
    description:
      'Estudio propio de producción para videoclips, contenido de eventos musicales y proyectos cinematográficos.',
    color: 'from-purple-600 to-pink-500',
    features: [
      'Videoclips',
      'Cobertura de festivales y conciertos',
      'Producciones cinematográficas',
      'Edición y postproducción',
    ],
  },
  {
    icon: Building2,
    title: 'Espacios & Eventos',
    description:
      'Creación y montaje de decorados y conceptos para locales de ocio, eventos musicales y experiencias emergentes.',
    color: 'from-pink-500 to-rose-500',
    features: [
      'Decoración y montaje de locales',
      'Escenografía para eventos musicales',
      'Conceptos emergentes',
      'Producción integral del evento',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-500">Qué Hacemos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Cuatro disciplinas,
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              una sola visión creativa
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            De la estrategia digital al montaje físico de un evento: diseñamos, producimos y
            ejecutamos cada pieza de la experiencia de marca.
          </p>
        </Reveal>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <TiltCard key={pillar.title} intensity={6}>
              <div className="group bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-pink-500/20 transition-shadow duration-300 border border-gray-800 hover:border-pink-500 h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{pillar.title}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{pillar.description}</p>

                <ul className="space-y-2">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-fuchsia-400 animate-gradient rounded-2xl p-12 text-white relative overflow-hidden shadow-xl shadow-pink-500/30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Desde una campaña de contenido hasta la producción completa de un evento, hablemos
                de cómo darle forma.
              </p>
              <a
                href="#contact"
                className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                Hablar con el equipo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
