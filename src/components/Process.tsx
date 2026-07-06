import { ArrowRight, Compass, PenTool, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Brief & Concepto',
    description: 'Escuchamos el proyecto, la marca o el evento y definimos un concepto creativo con sentido para ese contexto.',
    color: 'from-pink-600 to-fuchsia-500',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Estrategia & Diseño',
    description: 'Diseñamos la estrategia de marketing, la identidad visual o la escenografía necesaria para llevarlo a cabo.',
    color: 'from-fuchsia-600 to-purple-500',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Producción & Montaje',
    description: 'Ejecutamos: grabación, edición, campañas, decorados o montaje físico del espacio o evento.',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lanzamiento & Crecimiento',
    description: 'Publicamos, medimos y seguimos optimizando el contenido y la estrategia de marca en el tiempo.',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30 mb-4">
            <Rocket className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-500">Cómo Trabajamos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Del concepto a la
            <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              ejecución, en 4 fases
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso claro que se adapta tanto a una campaña digital como a la producción
            completa de un evento.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-500 opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 border-2 border-gray-800 hover:border-pink-500 relative group">
                  <div
                    className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-pink-300" />
                    </div>
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-8 h-8 text-pink-300 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 shadow-xl border border-gray-800 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left flex-1">
                <h3 className="text-3xl font-bold mb-3 text-white">¿Empezamos?</h3>
                <p className="text-lg text-gray-300">
                  Cuéntanos qué necesitas y te decimos cómo lo abordaríamos.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-pink-500 to-fuchsia-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Hablar del proyecto</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
