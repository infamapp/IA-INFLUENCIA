import { Building2, Layers, Zap } from 'lucide-react';
import TiltCard from './TiltCard';

const models = [
  {
    icon: Zap,
    title: 'Proyecto puntual',
    description: 'Una pieza concreta: un videoclip, una campaña, el montaje de un evento o el branding de un lanzamiento.',
    color: 'from-pink-600 to-fuchsia-500',
  },
  {
    icon: Layers,
    title: 'Partnership continuo',
    description: 'Gestión mensual de contenido, redes y estrategia de marca o marca personal, con producción recurrente.',
    color: 'from-fuchsia-600 to-purple-500',
  },
  {
    icon: Building2,
    title: 'Producción a medida',
    description: 'Proyectos grandes: festivales, aperturas de locales o producciones audiovisuales con equipo dedicado.',
    color: 'from-purple-600 to-pink-500',
  },
];

const faqs = [
  {
    q: '¿Trabajáis solo en digital o también en eventos físicos?',
    a: 'Ambos: desde campañas y contenido digital hasta la decoración, escenografía y montaje de espacios y eventos en vivo.',
  },
  {
    q: '¿Podéis encargaros de un proyecto de principio a fin?',
    a: 'Sí. Del concepto a la ejecución: estrategia, diseño, producción audiovisual y montaje, con un mismo equipo.',
  },
  {
    q: '¿Ofrecéis servicios sueltos o solo paquetes completos?',
    a: 'Ambos. Podemos encargarnos de una pieza concreta o de la producción integral de una campaña o evento.',
  },
  {
    q: '¿Trabajáis con marcas personales e influencers?',
    a: 'Sí, acompañamos también el posicionamiento y crecimiento de marcas personales y creadores.',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 mb-4">
            <Zap className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-500">Cómo Colaboramos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Un modelo que se adapta
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              al tamaño del proyecto
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sin planes cerrados: te contamos cómo encajaría tu proyecto y presupuesto a medida.
          </p>
        </div>

        {/* Models */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((model) => (
            <TiltCard key={model.title} intensity={6}>
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-pink-500 transition-colors duration-300 h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-6`}
                >
                  <model.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{model.title}</h3>
                <p className="text-gray-300 leading-relaxed">{model.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Preguntas Frecuentes</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
